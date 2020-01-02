import randomNumbGen from './randomNumbGen';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const game = () => {
  const upperLimitOfNumb = 100;
  const lowerLimitOfNumb = 1;
  const randomNumb = randomNumbGen('ceil', lowerLimitOfNumb, upperLimitOfNumb);
  console.log(`Question: ${randomNumb}`);
  return (arg = randomNumb) => {
    let counter = 2;
    while (counter < arg) {
      if (arg % counter === 0) {
        return 'no';
      }
      counter += 1;
    }
    return 'yes';
  };
};
export { rules, game };
