import randomNumbGen from './randomNumbGen';

const rules = 'What is the result of the expression ?';
const game = () => {
  const operators = ['+', '-', '*'];
  const upperLimitOfNumb = 100;
  const lowerLimitOfNumb = 0;
  const stroke = `${randomNumbGen('ceil', lowerLimitOfNumb, upperLimitOfNumb)} ${operators[randomNumbGen('floor', lowerLimitOfNumb, operators.length)]} ${randomNumbGen('ceil', lowerLimitOfNumb, upperLimitOfNumb)}`;
  console.log(`Question: ${stroke}`);
  return (param = stroke) => String(eval(param));
};
export { rules, game };
