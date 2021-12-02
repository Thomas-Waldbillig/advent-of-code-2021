import { getLines } from "./utilities";

export const input = getLines("inputs/input-01.txt").map(
  (value: string): number => Number.parseInt(value)
);

export function part1(input: number[]): number {
  const { length: response } = input.filter(
    (value: number, index: number, original: number[]): boolean =>
      value > (original[index - 1] ?? Number.MAX_VALUE)
  );
  return response;
}

export function part2(input: number[]): number {
  input = input.map((_: number, index: number, original: number[]): number =>
    original
      .slice(index, index + 3)
      .reduce((result: number, current: number): number => result + current, 0)
  );
  return part1(input);
}
