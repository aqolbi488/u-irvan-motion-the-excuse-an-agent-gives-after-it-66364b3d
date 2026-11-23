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

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
