export function advent_02_1(input: [string, number][]): number {
  const position = input.reduce(
    ({ x, y }, [direction, value]) => {
      switch (direction) {
        case "forward":
          return { x: x + value, y };
        case "down":
          return { x, y: y + value };
        case "up":
          return { x, y: y - value };
        default:
          throw new Error("Unknown direction");
      }
    },
    { x: 0, y: 0 }
  );
  return position.x * position.y;
}

export function advent_02_2(input: [string, number][]): number {
  const position = input.reduce(
    ({ x, y, aim }, [direction, value]) => {
      switch (direction) {
        case "forward":
          return { x: x + value, y: y + aim * value, aim };
        case "down":
          return { x, y, aim: aim + value };
        case "up":
          return { x, y, aim: aim - value };
        default:
          throw new Error("Unknown direction");
      }
    },
    { x: 0, y: 0, aim: 0 }
  );
  return position.x * position.y;
}
