import randomNumbGen from '../utils';
import gameConsole from '../index';

const rules = 'Find the greatest common divisor of given numbers';
const questionGenerator = () => {
  const upperLimitOfNumb = 100;
  const lowerLimitOfNumb = 1;
  const numb1 = randomNumbGen('ceil', lowerLimitOfNumb, upperLimitOfNumb);
  const numb2 = randomNumbGen('ceil', lowerLimitOfNumb, upperLimitOfNumb);
  const question = `${numb1}, ${numb2}`;
  const correctAnswer = (arg1 = numb1, arg2 = numb2) => {
    let nod = 0;
    let counter = 1;
    while (counter <= Math.min(arg1, arg2)) {
      if (arg1 % counter === 0 && arg2 % counter === 0) {
        nod = counter;
      }
      counter += 1;
    }
    return `${nod}`;
  };
  return { question, correctAnswer: correctAnswer() };
};
const game = () => gameConsole(0, questionGenerator, rules);
export default game;
