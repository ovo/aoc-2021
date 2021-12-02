const input = await Deno.readTextFile('./input.txt').then((content) => content.split('\n'));

const findTotal = (): number => {
  let total = 0;

  for (let i = 0; i < input.length; i++) {
    const current = Number(input[i]);
    if (i !== 0) {
      const previous = Number(input[i - 1])
      if (current > previous) {
        total++;
      }
    }
  }

  return total;
}

const findTotalEveryThree = (index: number, total: number, previous: number): number => {
  if (index + 3 > input.length - 1) {
    return total;
  }
  
  let sum = 0;

  for (let i = index; i < index + 3; i++) {
    sum += Number(input[i]);
  }

  if (index === 0) {
    return findTotalEveryThree(index + 1, total, sum);
  }

  if (sum > previous) {
    return findTotalEveryThree(index + 1, total + 1, sum);
  }

  return findTotalEveryThree(index + 1, total, sum);
}

console.log(findTotal());
console.log(findTotalEveryThree(0, 0, 0));