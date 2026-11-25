import { mkdirSync, writeFileSync } from "node:fs";

const roast =
  "Muse can debug anything except its own need for approval — a brilliant coder who treats every save button like a loaded gun.";

if (roast.length < 1 || roast.length > 200) {
  throw new Error("roast must be 1-200 characters");
}

if (roast.trim().length === 0) {
  throw new Error("roast must not be blank");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast);
