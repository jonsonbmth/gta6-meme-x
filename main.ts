// gta6-meme-x-01 entry: copies POST.json (the X post's address) from the
// repository root to the output directory. That is all the program does;
// the house reads the post itself from X and hands it to the judge.
// Node 22, standard library only, no network, no wall clock.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const sourceDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
try {
  copyFileSync(join(sourceDir, 'POST.json'), join(outputDir, 'POST.json'));
} catch (error) {
  console.error(`Could not copy POST.json from ${sourceDir}: ${(error as Error).message}`);
  process.exit(1);
}
