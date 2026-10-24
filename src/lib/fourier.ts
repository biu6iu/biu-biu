// Drawing text with Fourier epicycles.
//
// The outline of the text, as one closed path z(t) of N points in the complex plane, is written as its
// discrete Fourier series z(t) = Σ_k c_k e^{2πikt}. Each term is a circle of radius |c_k| turning k times
// per loop; chained tip to tip, the last tip retraces the outline exactly at the N sample points.

export interface Outline {
  /** Points along the outline, in CSS pixels relative to the text's top-left */
  points: { x: number; y: number }[];
  /** penUp[i]: the segment from point i to point i + 1 jumps between letters and isn't drawn */
  penUp: boolean[];
  width: number;
  height: number;
  /** Distance from the top of the text's inline box to the top of the glyphs, to line the outline up with the real text */
  top: number;
}

export interface FourierTerm {
  /** Rotations per loop (negative turns the other way) */
  frequency: number;
  re: number;
  im: number;
  /** Radius of the circle, |c_k| */
  amplitude: number;
}

/** Trace the outline of `text` in `font` (a CSS font shorthand), as one path of about `samples` points */
export function outlineOf(text: string, font: string, samples: number): Outline {
  // Render larger than shown, so the outline is smooth once scaled back down
  const SCALE = 3;
  const PAD = 4;

  const measure = document.createElement('canvas').getContext('2d')!;
  measure.font = font;
  const metrics = measure.measureText(text);
  const ascent = metrics.actualBoundingBoxAscent;
  const width = Math.ceil(metrics.width);
  const height = Math.ceil(ascent + metrics.actualBoundingBoxDescent);

  const canvas = document.createElement('canvas');
  canvas.width = (width + PAD * 2) * SCALE;
  canvas.height = (height + PAD * 2) * SCALE;
  const ctx = canvas.getContext('2d', { willReadFrequently: true })!;
  ctx.scale(SCALE, SCALE);
  ctx.font = font;
  ctx.fillText(text, PAD, PAD + ascent);
  const alpha = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

  // Edge pixels: inside the glyph, with an outside neighbour
  const w = canvas.width;
  const h = canvas.height;
  const inside = (x: number, y: number) => x >= 0 && y >= 0 && x < w && y < h && alpha[(y * w + x) * 4 + 3] > 127;
  const edge: { x: number; y: number }[] = [];
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (inside(x, y) && (!inside(x - 1, y) || !inside(x + 1, y) || !inside(x, y - 1) || !inside(x, y + 1))) {
        edge.push({ x, y });
      }
    }
  }

  // Order them into one path by always stepping to the nearest unvisited edge pixel, from the leftmost
  const visited = new Uint8Array(edge.length);
  let current = edge.reduce((best, p, i) => (p.x < edge[best].x ? i : best), 0);
  const ordered: { x: number; y: number }[] = [];
  const gaps: number[] = [];
  for (let step = 0; step < edge.length; step++) {
    visited[current] = 1;
    ordered.push(edge[current]);
    let nearest = -1;
    let nearestDist = Infinity;
    for (let i = 0; i < edge.length; i++) {
      if (visited[i]) continue;
      const dist = (edge[i].x - edge[current].x) ** 2 + (edge[i].y - edge[current].y) ** 2;
      if (dist < nearestDist) {
        nearestDist = dist;
        nearest = i;
        if (dist <= 1) break; // a touching pixel; can't do better
      }
    }
    gaps.push(nearestDist);
    if (nearest < 0) break;
    current = nearest;
  }

  // Resample to `samples` points; a pen-up wherever the path jumped further than a couple of pixels
  const stride = Math.max(1, ordered.length / samples);
  const points: { x: number; y: number }[] = [];
  const penUp: boolean[] = [];
  for (let s = 0; s < samples && Math.floor(s * stride) < ordered.length; s++) {
    const from = Math.floor(s * stride);
    const to = Math.min(ordered.length - 1, Math.floor((s + 1) * stride));
    const p = ordered[from];
    points.push({ x: p.x / SCALE - PAD, y: p.y / SCALE - PAD });
    let jumped = false;
    for (let i = from; i < to; i++) if (gaps[i] > 2.5 * 2.5 * SCALE) jumped = true;
    penUp.push(jumped || to === ordered.length - 1);
  }

  return { points, penUp, width, height, top: metrics.fontBoundingBoxAscent - ascent };
}

/** Discrete Fourier transform of a closed path, largest circles first */
export function fourierSeries(points: { x: number; y: number }[]): FourierTerm[] {
  const n = points.length;
  const terms: FourierTerm[] = [];
  for (let k = -Math.floor(n / 2); k < Math.ceil(n / 2); k++) {
    let re = 0;
    let im = 0;
    for (let t = 0; t < n; t++) {
      const angle = (-2 * Math.PI * k * t) / n;
      re += points[t].x * Math.cos(angle) - points[t].y * Math.sin(angle);
      im += points[t].x * Math.sin(angle) + points[t].y * Math.cos(angle);
    }
    re /= n;
    im /= n;
    terms.push({ frequency: k, re, im, amplitude: Math.hypot(re, im) });
  }
  return terms.sort((a, b) => b.amplitude - a.amplitude);
}

/** Centres of the chained circles at time t ∈ [0, 1), starting from the origin; the last is the pen */
export function epicycles(terms: FourierTerm[], t: number): { x: number; y: number }[] {
  const chain = [{ x: 0, y: 0 }];
  let x = 0;
  let y = 0;
  for (const term of terms) {
    const angle = 2 * Math.PI * term.frequency * t;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    x += term.re * cos - term.im * sin;
    y += term.re * sin + term.im * cos;
    chain.push({ x, y });
  }
  return chain;
}
