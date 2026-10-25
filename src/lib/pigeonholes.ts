// The pigeonhole principle, played out as pigeons hopping between holes.
//
// There's one more pigeon than holes, so whenever every pigeon has landed some hole holds two. The next to
// fly is the pigeon that was already in that hole, bumped out by the new arrival; it flies to any other
// hole and takes the free seat there, which makes that hole the crowded one.

/** Each hole has two seats, 0 on the left and 1 on the right */
export interface Pigeon {
  hole: number;
  slot: 0 | 1;
}

export interface Roost {
  holes: number;
  pigeons: Pigeon[];
  /** The pigeon that landed last, sharing a hole with one other */
  newest: Pigeon;
}

export interface Flight {
  pigeon: Pigeon;
  /** Where it lands */
  to: Pigeon;
}

const otherSlot = (slot: 0 | 1): 0 | 1 => (slot === 0 ? 1 : 0);

/** One pigeon per hole, sitting in a random seat, plus one extra sharing a random hole */
export function roost(holes: number): Roost {
  const pigeons: Pigeon[] = Array.from({ length: holes }, (_, hole) => ({ hole, slot: Math.random() < 0.5 ? 0 : 1 }));
  const crowded = Math.floor(Math.random() * holes);
  const newest: Pigeon = { hole: crowded, slot: otherSlot(pigeons[crowded].slot) };
  pigeons.push(newest);
  return { holes, pigeons, newest };
}

export function nextFlight({ holes, pigeons, newest }: Roost): Flight {
  const pigeon = pigeons.find((p) => p.hole === newest.hole && p !== newest)!;
  let hole = Math.floor(Math.random() * (holes - 1));
  if (hole >= pigeon.hole) hole++; // any hole but its own
  const resident = pigeons.find((p) => p.hole === hole)!;
  return { pigeon, to: { hole, slot: otherSlot(resident.slot) } };
}

export function land(roost: Roost, { pigeon, to }: Flight): void {
  Object.assign(pigeon, to);
  roost.newest = pigeon;
}
