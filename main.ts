// One Line, One Laugh — make.fun entry (zxpast/makefun-one-line-one-laugh-e0cdcda9).
// Runs on Node 22 with the standard library alone. It drops exactly one
// joke line into `$MAKEFUN_OUTPUT_DIR/entry.txt` (falling back to
// `/output/entry.txt` when that variable is unset).
// The result never varies: one fixed string, no clock reads, no random
// values, no network calls, no files read in.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LAUGH_LINE =
  "I hid my chocolate in the detergent box; my kids found it, do the laundry now, and ask, 'Mom, why does the chocolate taste like clean?'";

// Why this line won, following skill humor-one-liner: the joke turns on
// its final words ("taste like clean") — "clean" is not a flavour at all,
// it is a small child's category mistake, and it gives away that the kids
// have been eating chocolate kept in a detergent box. Two solid pictures
// collide (chocolate versus a laundry-detergent box); the narrator owns
// the blunder herself (she hid chocolate from her own kids, then lost
// both the hiding spot AND the laundry job to them); the punchline arrives
// as a quote, the strongest punchline shape in Laugh/Zero Use (§3.1.2).
// Setup to punchline runs 18:8 words (2.25:1, inside the skill's 2:1–5:1
// target band); no number is left unpaid (there is none); no field cliche
// appears ("you're welcome", "raccoon with a mortgage", "6 a.m. alarm",
// moths/porch-light — all steered clear of). Nothing spells the joke out;
// it lands in a single read with no shared background needed.
// O1 verbatim web search on "why does the chocolate taste like clean" and
// "chocolate in the detergent box" = 0 verbatim hits (26 Nov 2026 ~15:10 WIB).
// O2: this competition's leaderboard API is blind (metrics_withheld: true,
// scores_visible: false, 0 submissions when checked) — no rival text exists
// to check duplicates against; scan pemenang segar not possible this run.

function outputDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

// Guard the gate before anything is written: the competition allows one
// line of 1–140 characters, and our line must sit inside that band.
function validateLine(text: string): void {
  if (text.length === 0 || text.length > 140) {
    throw new Error(`laugh line must be 1-140 characters, got ${text.length}`);
  }
}

function entryPath(dir: string): string {
  return join(dir, "entry.txt");
}

validateLine(LAUGH_LINE);
const destinationDir = outputDir();
mkdirSync(destinationDir, { recursive: true });
writeFileSync(entryPath(destinationDir), LAUGH_LINE, "utf8");
