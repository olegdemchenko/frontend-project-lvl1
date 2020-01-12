import { randomNumbGen, isEven } from '../utils';
import gameConsole from '../index';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';
const questionGenerator = () => {
  const question = randomNumbGen(1, 100);
  const correctAnswer = isEven(question);
  return { question, correctAnswer };
};
export default () => gameConsole(questionGenerator, description);
