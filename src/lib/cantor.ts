// Cantor's diagonal argument.
//
// Given any list of infinite binary sequences, build a new one by flipping the nth digit of the nth
// sequence. It differs from every sequence in the list at that sequence's diagonal digit, so it isn't in
// the list: no list can hold every binary sequence, and there are uncountably many of them.

/** `count` random binary sequences of `length` digits each */
export function randomSequences(count: number, length: number): number[][] {
  return Array.from({ length: count }, () => Array.from({ length }, () => (Math.random() < 0.5 ? 0 : 1)));
}

/** The sequence that escapes the list: its nth digit is the flip of the nth digit of the nth sequence */
export function antidiagonal(sequences: number[][]): number[] {
  return sequences.map((sequence, n) => 1 - sequence[n]);
}
