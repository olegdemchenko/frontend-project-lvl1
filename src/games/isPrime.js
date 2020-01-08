import randomNumbGen from '../utils';
import gameConsole from '../index';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const questionGenerator = () => {
  const upperLimitOfNumb = 100;
  const lowerLimitOfNumb = 1;
  const question = `${randomNumbGen('ceil', lowerLimitOfNumb, upperLimitOfNumb)}`;
  const correctAnswer = (arg = question) => {
    let counter = 2;
    while (counter < arg) {
      if (arg % counter === 0) {
        return 'no';
      }
      counter += 1;
    }
    return 'yes';
  };
  return { question, correctAnswer: correctAnswer() };
};
const game = () => gameConsole(0, questionGenerator, rules);
export default game;
