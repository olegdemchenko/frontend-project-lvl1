import { randomNumbGen, isRemainderNull } from '../utils';
import gameConsole from '../index';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const primeOrNot = (arg) => {
  let counter = 2;
  while (counter < arg) {
    if (isRemainderNull(arg, counter)) {
      return 'no';
    }
    counter += 1;
  }
  return 'yes';
};
const questionGenerator = () => {
  const question = `${randomNumbGen(1, 100)}`;
  const correctAnswer = primeOrNot(question);
  return { question, correctAnswer };
};

export default () => gameConsole(questionGenerator, description);
