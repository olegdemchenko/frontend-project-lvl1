import { randomNumbGen, isRemainderNull } from '../utils';
import gameConsole from '../index';

const description = 'Find the greatest common divisor of given numbers';
const correctAnswer = (arg1, arg2) => {
  let nod = 0;
  let counter = 1;
  while (counter <= Math.min(arg1, arg2)) {
    if (isRemainderNull(arg1, counter) && isRemainderNull(arg2, counter)) {
      nod = counter;
    }
    counter += 1;
  }
  return `${nod}`;
};
const questionGenerator = () => {
  const numb1 = randomNumbGen(0, 100);
  const numb2 = randomNumbGen(0, 100);
  const question = `${numb1}, ${numb2}`;
  return { question, correctAnswer: correctAnswer(numb1, numb2) };
};
export default () => gameConsole(questionGenerator, description);
