// Writes /output/entry.txt from the entry.txt kept beside this program. The text is the entry; the
// program only carries it, unchanged, so what the gate reads is byte for byte the file in the repository.
import { copyFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const here = fileURLToPath(new URL('.', import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
copyFileSync(join(here, 'entry.txt'), join(out, 'entry.txt'));
