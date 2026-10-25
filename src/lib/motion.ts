// Shared plumbing for the animations: reduced motion, and frame loops that only run while on screen.

export const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Calls `frame` on every animation frame while `root` is on screen, with the time since the previous
 * frame. That's capped at 100ms, so time spent off screen or in a stalled tab doesn't count.
 */
export function whileVisible(root: Element, frame: (now: number, elapsed: number) => void): void {
  let id = 0;
  let last = 0;
  const loop = (now: number) => {
    frame(now, Math.min(100, now - last));
    last = now;
    id = requestAnimationFrame(loop);
  };

  new IntersectionObserver(([entry]) => {
    cancelAnimationFrame(id);
    if (entry.isIntersecting) {
      last = performance.now();
      id = requestAnimationFrame(loop);
    }
  }).observe(root);
}

/**
 * Plays a sequence of steps on its own clock, which only moves while `root` is on screen, so it resumes
 * where it was. `advance` moves to the next step and returns how long it stays on screen; `draw` runs
 * after any frame that advanced. The first step is held for `firstMs`.
 */
export function playSteps(root: Element, firstMs: number, advance: () => number, draw: () => void): void {
  let clock = 0;
  let nextAt = firstMs;
  whileVisible(root, (_, elapsed) => {
    clock += elapsed;
    let changed = false;
    while (clock >= nextAt) {
      nextAt += advance();
      changed = true;
    }
    if (changed) draw();
  });
}

/**
 * Wraps `step` (which returns how long to hold, or null once a round is over) so that between rounds `el`
 * fades out, `restart` sets up the next round while it's hidden, and it fades back in. `fadeMs` must match
 * the element's opacity transition; `restart` returns how long to hold the first step of the new round.
 */
export function fadeBetweenRounds(
  el: HTMLElement,
  fadeMs: number,
  step: () => number | null,
  restart: () => number,
): () => number {
  let fading = false;
  return () => {
    if (fading) {
      fading = false;
      el.style.opacity = '';
      return restart();
    }
    const hold = step();
    if (hold !== null) return hold;
    fading = true;
    el.style.opacity = '0';
    return fadeMs;
  };
}

/** A random integer from `min` to `max`, both included */
export const randomInt = (min: number, max: number) => min + Math.floor(Math.random() * (max - min + 1));
