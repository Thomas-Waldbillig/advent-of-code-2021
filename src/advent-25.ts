import { getLines } from "./utilities";

export const input = getLines("inputs/input-25.txt").map(
  (value: string): string[] => value.split(" ")
);

export function part1(input: string[]): number {
  return input.length;
}

export function part2(input: string[]): number {
  return input.length;
}
