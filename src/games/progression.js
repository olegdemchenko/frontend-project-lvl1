import randomNumbGen from './randomNumbGen';

const rules = 'What number is missing in the progression?';
const game = () => {
  const upperLimitOfNumb = 50;
  const upperLimitOfD = 9;
  const lowerLimitOfNumb = 1;
  const startNumb = randomNumbGen('ceil', lowerLimitOfNumb, upperLimitOfNumb);
  const d = randomNumbGen('ceil', lowerLimitOfNumb, upperLimitOfD);
  const arithmeticProgression = [];
  arithmeticProgression.push(startNumb);
  for (let i = 1; i < 10; i += 1) {
    arithmeticProgression.push(arithmeticProgression[i - 1] + d);
  }
  const answer = arithmeticProgression[d];
  arithmeticProgression[d] = '..';
  console.log(`Question: ${arithmeticProgression.join(' ')}`);
  return (arg = answer) => String(arg);
};
export { rules, game };
