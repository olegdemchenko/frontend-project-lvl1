import randomNumbGen from '../utils';
import gameConsole from '../index';

const rules = 'What number is missing in the progression?';
const questionGenerator = () => {
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
  const question = `${arithmeticProgression.join(' ')}`;
  const correctAnswer = String(answer);
  return { question, correctAnswer };
};
const game = () => gameConsole(0, questionGenerator, rules);
export default game;
