import randomNumbGen from './randomNumbGen';

const rules = 'Find the greatest common divisor of given numbers';
const game = () => {
  const upperLimitOfNumb = 100;
  const lowerLimitOfNumb = 1;
  const numb1 = randomNumbGen('ceil', lowerLimitOfNumb, upperLimitOfNumb);
  const numb2 = randomNumbGen('ceil', lowerLimitOfNumb, upperLimitOfNumb);
  console.log(`Question: ${numb1}, ${numb2}`);
  return (arg1 = numb1, arg2 = numb2) => {
    let nod = 0;
    let counter = 1;
    while (counter <= Math.min(arg1, arg2)) {
      if (arg1 % counter === 0 && arg2 % counter === 0) {
        nod = counter;
      }
      counter += 1;
    }
    return `${nod}`;
  };
};
export { rules, game };
