// Floyd's cycle detection, recorded step by step so it can be animated.
//
// A linked list runs into a loop. The tortoise moves one node at a time and the hare two; once both are in
// the loop the hare gains a node every step, so they meet. The tortoise then goes back to the head and both
// move one node at a time: they meet again exactly where the loop starts.

/** Nodes 0 to tail - 1 lead into the loop; node `tail` is where it starts and the last node links back to it */
export interface LoopedList {
  tail: number;
  loop: number;
}

export type FloydPhase =
  /** Both at the head, before anything moves */
  | 'start'
  /** The hare moves every step and the tortoise every other step */
  | 'chase'
  /** They've landed on the same node inside the loop */
  | 'met'
  /** The tortoise is back at the head, and both move one node per step */
  | 'restart'
  /** They've met again, on the node where the loop starts */
  | 'found';

export interface FloydStep {
  phase: FloydPhase;
  tortoise: number;
  hare: number;
}

export function next(list: LoopedList, node: number): number {
  return node === list.tail + list.loop - 1 ? list.tail : node + 1;
}

export function floyd(list: LoopedList): FloydStep[] {
  let tortoise = 0;
  let hare = 0;
  const steps: FloydStep[] = [{ phase: 'start', tortoise, hare }];

  // The hare's two hops are recorded separately, so it can be seen moving twice as fast
  for (let hop = 1; ; hop++) {
    hare = next(list, hare);
    if (hop % 2 === 0) tortoise = next(list, tortoise);
    const met = hop % 2 === 0 && tortoise === hare;
    steps.push({ phase: met ? 'met' : 'chase', tortoise, hare });
    if (met) break;
  }

  tortoise = 0;
  steps.push({ phase: 'restart', tortoise, hare });
  while (tortoise !== hare) {
    tortoise = next(list, tortoise);
    hare = next(list, hare);
    steps.push({ phase: tortoise === hare ? 'found' : 'restart', tortoise, hare });
  }

  return steps;
}
