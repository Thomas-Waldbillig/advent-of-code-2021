import { readFileSync } from "fs";
import { join } from "path";
import { advent_01_1, advent_01_2 } from "./advent-01";
import { advent_02_1, advent_02_2 } from "./advent-02";

function getLines(filePath: string): string[] {
  return readFileSync(join(__dirname, filePath)).toString().split("\n");
}

const input01 = getLines("./advent-01/input.txt").map((value: string): number =>
  Number.parseInt(value)
);
console.log({ advent_01_1: advent_01_1(input01) });
console.log({ advent_01_2: advent_01_2(input01) });

const input02 = getLines("./advent-02/input.txt")
  .map((value) => value.split(" "))
  .map(([direction, value]): [string, number] => [direction!, +value!]);
console.log({ advent_02_1: advent_02_1(input02) });
console.log({ advent_02_2: advent_02_2(input02) });
