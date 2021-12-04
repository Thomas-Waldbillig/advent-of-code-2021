import { readFileSync } from 'fs';

interface InputFormat {
  draws: number[];
  boards: Board[];
}

interface Field {
  isMarked: boolean;
  value: number;
}

class Board {
  private readonly fields: Field[][];

  get hasWon(): boolean {
    const { length } = this.fields[0]!;
    const rowHasWon = this.fields.some((row: Field[]): boolean =>
      row.every(({ isMarked }: Field): boolean => isMarked)
    );
    if (rowHasWon) return true;
    return [...Array(length).keys()].some((index: number): boolean =>
      this.fields.every((row: Field[]): boolean => row[index]!.isMarked)
    );
  }

  get sumUnmarked(): number {
    return this.fields
      .reduce((result: Field[], current: Field[]): Field[] => [...result, ...current], [])
      .filter(({ isMarked }: Field): boolean => !isMarked)
      .reduce((result: number, { value }: Field): number => result + value, 0);
  }

  constructor(data: string) {
    this.fields = data
      .split('\n')
      .map((line: string): Field[] =>
        line.match(/.{2,3}/g)!.map((value: string): Field => ({ isMarked: false, value: +value }))
      );
  }

  public mark(newValue: number): void {
    this.fields.forEach((row: Field[]): void =>
      row
        .filter(({ value }: Field): boolean => value === newValue)
        .forEach((field: Field): boolean => (field.isMarked = true))
    );
  }
}

export const input = ((): InputFormat => {
  const [drawsData, ...boardsData] = readFileSync('inputs/input-04.txt').toString().split('\n\n');
  return {
    draws: drawsData!.split(',').map((value: string): number => +value),
    boards: boardsData!.map((data: string): Board => new Board(data)),
  };
})();

export function part1({ draws, boards }: InputFormat): number | undefined {
  for (let draw of draws) {
    boards.forEach((board: Board): void => board.mark(draw));
    let winner: Board | undefined;
    if ((winner = boards.find((board: Board): boolean => board.hasWon)))
      return winner.sumUnmarked * draw;
  }
  return;
}

export function part2({ draws, boards }: InputFormat): number | undefined {
  let remaining = [...boards];
  for (let draw of draws) {
    remaining.forEach((board: Board): void => board.mark(draw));
    if (remaining.length === 1 && remaining[0]!.hasWon) return remaining[0]!.sumUnmarked * draw;
    remaining = remaining.filter(({ hasWon }: Board): boolean => !hasWon);
  }
  return;
}
