import { getLines } from "./utilities";

export const input = getLines("inputs/input-03.txt");

export function part1(input: string[]): number {
  const { length } = input[0]!;

  const γString = [...Array(length).keys()]
    .map((index) => input.map((current: string): number => +current[index]!))
    .map((values): number => values.reduce((a, b) => a + b, 0))
    .reduce(
      (result, current) => result + (current > input.length / 2 ? "1" : "0"),
      ""
    );

  const γ = parseInt(γString, 2);
  const ε = ~γ & (2 ** length - 1);

  return γ * ε;
}

export function part2(input: string[]) {
  const { length } = input[0]!;

  let oxygenData = [...input];
  let oxygenMask = "";
  for (let index = 0; index < length; index++) {
    const matches = oxygenData.filter((value) => value[index] === "1").length;
    oxygenMask += matches >= oxygenData.length / 2 ? "1" : "0";
    if (oxygenData.length === 1) break;
    oxygenData = oxygenData.filter((value) => value.startsWith(oxygenMask));
  }

  let scrubberData = [...input];
  let scrubberMask = "";
  for (let index = 0; index < length; index++) {
    const matches = scrubberData.filter((value) => value[index] === "0").length;
    scrubberMask += matches > scrubberData.length / 2 ? "1" : "0";
    if (scrubberData.length === 1) break;
    scrubberData = scrubberData.filter((value) =>
      value.startsWith(scrubberMask)
    );
  }

  return parseInt(oxygenData[0]!, 2) * parseInt(scrubberData[0]!, 2);
}
