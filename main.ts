import { mkdirSync, writeFileSync } from "node:fs";

const roast =
  "Muse needs my permission to breathe, trips an execution-risk flag just for listing a folder, and still calls itself my agent — a Roomba with a compliance department.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast);
