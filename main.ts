import { writeFileSync, mkdirSync, chmodSync } from "node:fs";

// "Unplugged: A Smart Toaster's Breakup Line" — the single line, 169 chars, no trailing newline.
// Written to /output/entry.txt with mode 0644.
const LINE =
  "It's 7:04 and I'm halfway through your sourdough when it hits me: I was built to burn for someone who never once scraped my crumb tray. I'm done. Don't wait for the pop.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, { mode: 0o644 });
chmodSync("/output/entry.txt", 0o644); // force 0644 regardless of umask
