// Helpers for the ASCII drawings rendered into a <pre> (AsciiFigure.astro).

/** Width of one character of the <pre>'s monospace font, to work out how much fits across */
export function charWidth(pre: HTMLElement): number {
  pre.textContent = '0'.repeat(10);
  return pre.getBoundingClientRect().width / 10;
}

/** Text in the page's ink colour; everything else keeps the muted grey of the <pre> */
export const ink = (text: string) => `<span class="text-ink">${text}</span>`;

/** A character grid as <pre> HTML, with the cells marked in `inked` in the ink colour */
export function gridToHtml(chars: string[][], inked: boolean[][]): string {
  return chars.map((row, y) => row.map((c, x) => (inked[y][x] ? ink(c) : c)).join('')).join('\n');
}
