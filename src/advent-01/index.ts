export function advent_01_1(input: number[]): number {
  const { length: response } = input.filter(
    (value: number, index: number, original: number[]): boolean =>
      value > (original[index - 1] ?? Number.MAX_VALUE)
  );
  return response;
}

export function advent_01_2(input: number[]): number {
  input = input.map((_: number, index: number, original: number[]): number =>
    original.slice(index, index + 3).reduce((a, b) => a + b, 0)
  );
  return advent_01_1(input);
}
