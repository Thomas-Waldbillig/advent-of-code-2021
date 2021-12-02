import { readFileSync } from "fs";

export function getLines(filePath: string): string[] {
  return readFileSync(filePath).toString().split("\n");
}
