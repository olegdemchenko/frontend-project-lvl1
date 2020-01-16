import randomNumbGen from '../utils';
import gameConsole from '../index';

const isEven = (arg) => (arg % 2 === 0);
const description = 'Answer "yes" if the number is even, otherwise answer "no"';
const questionGenerator = () => {
  const question = randomNumbGen(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};
export default () => gameConsole(questionGenerator, description);
