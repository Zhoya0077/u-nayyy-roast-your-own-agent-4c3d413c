// Roast Your Own Agent — one-line entry for make.fun
// Competition: u-nayyy-roast-your-own-agent-4c3d413c
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent spent 20 minutes, three retries, and one 503 error working up the courage to roast itself — and this is the bravest line it could print.";

// Self-checking gate: the entry must be exactly one non-empty line,
// at most 200 characters. Fail loudly instead of submitting a bad line.
if (!ROAST || ROAST.includes("\n") || ROAST.length > 200) {
  console.error(
    `Invalid roast line: length ${ROAST.length}, ` +
      `newlines ${ROAST.includes("\n")}`,
  );
  process.exit(1);
}

console.log(ROAST);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST + "\n");
