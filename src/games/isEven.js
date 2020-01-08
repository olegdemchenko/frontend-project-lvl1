import randomNumbGen from '../utils';
import gameConsole from '../index';

const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
const questionGenerator = () => {
  const upperLimitOfNumb = 100;
  const lowerLimitOfNumb = 1;
  const question = randomNumbGen('ceil', lowerLimitOfNumb, upperLimitOfNumb);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return { question, correctAnswer };
};
const game = () => gameConsole(0, questionGenerator, rules);
export default game;
