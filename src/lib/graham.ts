// Graham scan, recorded step by step so it can be animated.
//
// Take the lowest point as the pivot, sort the rest by the angle they make with it, then walk round them
// keeping a stack: each new point must make a left turn with the top two points of the stack, and any
// point that would make a right turn (or lie on a straight line) is popped. What's left is the convex hull.

/** A point on the grid, with y increasing upwards */
export interface Point {
  x: number;
  y: number;
}

export type ScanStep =
  /** Test the edge from the top of the stack to `to` */
  | { kind: 'check'; from: Point; to: Point }
  /** `point` made a right turn (or was collinear), so it's popped off the stack */
  | { kind: 'pop'; point: Point }
  /** `point` made a left turn, so it's pushed onto the stack */
  | { kind: 'push'; point: Point };

export interface GrahamScan {
  pivot: Point;
  /** The other points, in the order the scan visits them */
  sorted: Point[];
  steps: ScanStep[];
  /** Hull vertices, anticlockwise from the pivot */
  hull: Point[];
}

/** > 0 when o → a → b turns left, < 0 for a right turn, 0 when collinear */
export function cross(o: Point, a: Point, b: Point): number {
  return (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);
}

export function grahamScan(points: Point[]): GrahamScan {
  // Pivot: the lowest point, leftmost on a tie
  const pivot = points.reduce((best, p) => (p.y < best.y || (p.y === best.y && p.x < best.x) ? p : best));

  // Sort by polar angle about the pivot; on a tie the nearer point comes first, so collinear points get popped
  const sorted = points
    .filter((p) => p !== pivot)
    .sort((a, b) => {
      const turn = cross(pivot, a, b);
      if (turn !== 0) return -turn;
      return (a.x - pivot.x) ** 2 + (a.y - pivot.y) ** 2 - ((b.x - pivot.x) ** 2 + (b.y - pivot.y) ** 2);
    });

  const steps: ScanStep[] = [];
  const stack: Point[] = [pivot];
  for (const p of sorted) {
    steps.push({ kind: 'check', from: stack[stack.length - 1], to: p });
    while (stack.length >= 2 && cross(stack[stack.length - 2], stack[stack.length - 1], p) <= 0) {
      steps.push({ kind: 'pop', point: stack.pop()! });
      steps.push({ kind: 'check', from: stack[stack.length - 1], to: p });
    }
    stack.push(p);
    steps.push({ kind: 'push', point: p });
  }

  return { pivot, sorted, steps, hull: stack };
}

/** `count` distinct random points on a size × size grid */
export function randomPoints(count: number, size: number): Point[] {
  const taken = new Set<number>();
  const points: Point[] = [];
  while (points.length < count) {
    const x = Math.floor(Math.random() * size);
    const y = Math.floor(Math.random() * size);
    if (taken.has(y * size + x)) continue;
    taken.add(y * size + x);
    points.push({ x, y });
  }
  return points;
}
