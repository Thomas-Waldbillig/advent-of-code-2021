import { readFileSync } from "fs";
import { join } from "path";

interface Temp {
  count: number;
  previous: number;
}

function getLines(): number[] {
  return readFileSync(join(__dirname, "./input.txt"))
    .toString()
    .split("\n")
    .map((elem: string): number => Number.parseInt(elem));
}

export function advent_01_1(): void {
  const { length: response } = getLines().filter(
    (value: number, index: number, original: number[]): boolean =>
      value > (original[index - 1] ?? Number.MAX_VALUE)
  );

  console.log(`Answer 01 - 1: ${response}`);
}

export function advent_01_2(): void {
  const { length: response } = getLines()
    .map((_: number, index: number, original: number[]): number[] =>
      original.slice(index, index + 3)
    )
    .map((values: number[]): number =>
      values.reduce(
        (result: number, current: number): number => result + current,
        0
      )
    )
    .filter(
      (value: number, index: number, original: number[]): boolean =>
        value > (original[index - 1] ?? Number.MAX_VALUE)
    );

  console.log(`Answer 01 - 2: ${response}`);
}
