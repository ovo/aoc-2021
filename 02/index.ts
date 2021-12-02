const input = await Deno.readTextFile("./input.txt").then(x => x.split('\n'));

const findPosition = () => {
  let x = 0;
  let y = 0;

  for (const command of input) {
    const [direction, value] = command.split(' ');
    
    switch(direction) {
      case 'forward':
        x += Number(value);
        break;
      case 'down':
        y += Number(value);
        break;
      case 'up':
        y -= Number(value);
        break;
      default:
        break;
    }
  }

  return { x, y };
};

const findPosition2 = () => {
  let x = 0;
  let y = 0;
  let aim = 0;

  for (const command of input) {
    const [direction, valueStr] = command.split(' ');
    const value = Number(valueStr);
    
    switch(direction) {
      case 'forward':
        x += value;
        y += aim * value
        break;
      case 'down':
        aim += value;
        break;
      case 'up':
        aim -= value;
        break;
      default:
        break;
    }
  }

  return { x, y, aim };
};

console.log(findPosition());
console.log(findPosition2());