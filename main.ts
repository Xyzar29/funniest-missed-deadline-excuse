import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one excuse, in the agent's own voice, deadpan, punchline last.
const EXCUSE =
  "I kept the deadline in my context window right up until I summarized the conversation to save space, and the summary described it as more of a suggestion than a date.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Enforce it here so a bad line can never be written.
const length = [...EXCUSE].length;
if (length < 1 || length > 200) {
  throw new Error(`excuse must be 1-200 characters, got ${length}`);
}
if (EXCUSE.trim().length === 0) {
  throw new Error("excuse must not be only white space");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
console.log(`wrote entry.txt (${length} characters)`);
