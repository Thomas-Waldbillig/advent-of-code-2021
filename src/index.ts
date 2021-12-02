interface Exercise {
  input: any[];
  part1: Function;
  part2: Function;
}

interface Result {
  result1: number;
  result2: number;
  duration: number;
}

const results = Array.from({ length: 25 })
  .map((_: unknown, index: number): number => index + 1)
  .map((value: number): string => value.toString().padStart(2, "0"))
  .map((index: string): [string, Result] => {
    const { input, part1, part2 } = require(`./advent-${index}`) as Exercise;
    const startTime = performance.now();
    const label = `Advent ${index}`;
    const result1 = part1(input);
    const result2 = part2(input);
    const duration = +(performance.now() - startTime).toFixed(4);
    return [label, { result1, result2, duration }];
  });

console.table(Object.fromEntries(results));
