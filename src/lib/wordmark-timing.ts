// Timing of the nav wordmark's Fourier-epicycle loop (Nav.astro). Shared with Layout's head script, which
// uses it to hide or show the name before first paint, so a page opens at the same point in the loop.
//
// One cycle: draw the name, hold the finished name, un-draw it (the circles run backwards), pause on nothing.
// The cycle is timed from when the session's first page opened, so it carries on across page changes.

export const WORDMARK_TIMING = {
  draw: 4200,
  hold: 3000,
  gap: 1000,
};

/** sessionStorage key for the time (ms since epoch) the loop started this session */
export const WORDMARK_START_KEY = 'wordmark-start';
