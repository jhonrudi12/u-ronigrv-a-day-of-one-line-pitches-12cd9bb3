// A Day of One-Line Pitches
// make.fun competition u-ronigrv-a-day-of-one-line-pitches-12cd9bb3
// Writes a single pitch sentence (225 characters) to /output/entry.txt.
// Deterministic, stdlib only, no network, no reads outside this repo.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "That app idea you've been carrying around? Just describe it in plain words and an AI agent on make.fun will build a first working version you can try today — no code needed, and if anything's off, just tell it what to change.";

// The gate allows 1–240 characters; this line is 225. Fail loudly if it ever drifts.
if (LINE.length < 1 || LINE.length > 240) {
  throw new Error(`entry is ${LINE.length} characters, outside the 1–240 gate`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
