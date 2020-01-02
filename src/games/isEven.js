import randomNumbGen from './randomNumbGen';

const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
const game = () => {
  const upperLimitOfNumb = 100;
  const lowerLimitOfNumb = 1;
  const numb = randomNumbGen('ceil', lowerLimitOfNumb, upperLimitOfNumb);
  console.log(`Question: ${numb}`);
  return (param = numb) => (param % 2 === 0 ? 'yes' : 'no');
};
export { rules, game };
