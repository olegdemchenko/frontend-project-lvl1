import randomNumbGen from '../utils';
import gameConsole from '../index';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const isPrime = (arg) => {
  let counter = 2;
  while (counter < arg) {
    if (arg % counter === 0) {
      return false;
    }
    counter += 1;
  }
  return true;
};
const questionGenerator = () => {
  const question = `${randomNumbGen(1, 100)}`;
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => gameConsole(questionGenerator, description);
