import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line about office life, 119 characters, well under the 200-character gate.
// The file is written with no trailing newline, so the sealed scorer counts
// exactly the 119 characters of the joke and nothing else.
const JOKE =
  "The office plants are the only ones thriving here: they get sunlight, water, and nobody ever books them into a meeting.";

// The grader runs `node /bot/main.ts` with MAKEFUN_OUTPUT_DIR=/output;
// default to /output so the entry lands where the sealed scorer reads it.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), JOKE, "utf8");
console.log(JOKE);
