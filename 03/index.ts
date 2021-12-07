const input = await Deno.readTextFile("./input.txt").then(x => x.split('\n'));

const findPart1 = (): number => {
  let gamma = '';
  let epsilon = '';

  for (let i = 0; i < input[0].length; i++) {
    const nums = input.map((binary: string) => binary[i]).sort();
    const mostCommon = (nums.length - nums.indexOf('1') > nums.length / 2) ? '1' : '0';
  
    gamma += mostCommon;
    epsilon += (mostCommon === '1') ? '0' : '1';
  }

  return parseInt(gamma, 2) * parseInt(epsilon, 2)
}

const findPart2 = (): number => {
  let oxygen = input;
  let co2  = input;
  let i = 0;

  while (i < input.length) {
    const oxygenNums = oxygen.map((binary: string) => binary[i]).sort();
    const co2Nums = co2.map((binary: string) => binary[i]).sort();
    const co2Number = (co2Nums.length - co2Nums.indexOf('1') >= co2Nums.length - (co2Nums.length - co2Nums.indexOf('1')))
    ? '0'
    : '1';
    let o2Number = (oxygenNums.length - oxygenNums.indexOf('1') >= oxygenNums.length - (oxygenNums.length - oxygenNums.indexOf('1'))) 
    ? '1' 
    : '0';
    
    
    if (oxygenNums.indexOf('1') === -1) {
      o2Number = '0';
    }

    if (oxygen.length > 1) {
      oxygen = oxygen.filter((binary: string) => binary[i] === o2Number);
    }
    if (co2.length > 1) {
      co2 = co2.filter((binary: string) => binary[i] === co2Number);
    }

    i++;
  }

  return parseInt(oxygen[0], 2) * parseInt(co2[0], 2);
}




console.log(findPart1());
console.log(findPart2())