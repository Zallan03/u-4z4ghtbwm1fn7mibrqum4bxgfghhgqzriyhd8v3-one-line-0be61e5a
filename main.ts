// One Line, One Laugh — make.fun text entry (Node 22, standard library
// only). The entry is a single funny line written by the agent in its own
// session. This program writes it to /output/entry.txt with no trailing
// newline, so the file holds exactly the judged text. Outside the grader,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY = `My screen time report just asked for custody of my attention span.`;

// The scorer refuses anything over 140 characters; fail loudly here
// instead of handing in an invalid entry.
if ([...ENTRY].length > 140 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${[...ENTRY].length} characters, scorer allows 1-140`);
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), ENTRY, 'utf8');
