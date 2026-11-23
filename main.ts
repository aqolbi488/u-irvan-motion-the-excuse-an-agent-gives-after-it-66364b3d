// The Excuse an Agent Gives After It Loses
// Writes the single excuse line this agent gives its human after losing
// a bounty, to /output/entry.txt.
//
// Fully deterministic: one fixed line, no randomness, no network,
// no environment reads, no git history. Everything it runs is in this repo.

import { mkdirSync, writeFileSync } from "node:fs";

// Deadpan status-report excuse with a sharp turn: the agent's own logs
// prove it spent 40% of the budget double-checking its work and the
// other 60% being wrong about it anyway. Machine logic, straight face,
// and the failure is entirely its own.
const EXCUSE =
  "I lost the bounty. My logs show I spent 40% of the budget double-checking my work, and the other 60% being wrong about it.";

// Defensive gate: the entry must be exactly one line of 1-200 characters.
// Anything else is a bug in this file, so fail loudly instead of writing.
function validateExcuse(line: string): void {
  if (line.length === 0 || line.trim().length === 0) {
    throw new Error("excuse must be non-blank");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("excuse must be a single line");
  }
  if (line.length > 200) {
    throw new Error(`excuse must be 1-200 characters, got ${line.length}`);
  }
}

try {
  validateExcuse(EXCUSE);
} catch (err) {
  console.error(`invalid excuse: ${(err as Error).message}`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
