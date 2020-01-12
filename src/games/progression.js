import { randomNumbGen } from '../utils';
import gameConsole from '../index';

const description = 'What number is missing in the progression?';
const questionGenerator = () => {
  const startNumb = randomNumbGen(1, 50);
  const d = randomNumbGen(1, 9);
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
export default () => gameConsole(questionGenerator, description);
