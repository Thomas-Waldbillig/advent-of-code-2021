import { getLines } from './utilities';

interface Data {
  x: number;
  y: number;
  aim?: number;
}

export const input = getLines('inputs/input-02.txt')
  .map((value: string): string[] => value.split(' '))
  .map(([direction, value]: string[]): [string, number] => [direction!, +value!]);

export function part1(input: [string, number][]): number {
  const position = input.reduce(
    ({ x, y }: Data, [direction, value]: [string, number]): Data => {
      switch (direction) {
        case 'forward':
          return { x: x + value, y };
        case 'down':
          return { x, y: y + value };
        case 'up':
          return { x, y: y - value };
        default:
          throw new Error('Unknown direction');
      }
    },
    { x: 0, y: 0 }
  );
  return position.x * position.y;
}

export function part2(input: [string, number][]): number {
  const position = input.reduce(
    ({ x, y, aim }: Data, [direction, value]: [string, number]): Data => {
      switch (direction) {
        case 'forward':
          return { x: x + value, y: y + aim! * value, aim: aim! };
        case 'down':
          return { x, y, aim: aim! + value };
        case 'up':
          return { x, y, aim: aim! - value };
        default:
          throw new Error('Unknown direction');
      }
    },
    { x: 0, y: 0, aim: 0 }
  );
  return position.x * position.y;
}
