import randomNumbGen from '../utils';
import gameConsole from '../index';

const rules = 'What is the result of the expression ?';
const questionGenerator = () => {
  const operators = ['+', '-', '*'];
  const upperLimitOfNumb = 100;
  const lowerLimitOfNumb = 0;
  const question = `${randomNumbGen(lowerLimitOfNumb, upperLimitOfNumb)} ${operators[randomNumbGen(lowerLimitOfNumb, operators.length - 1)]} ${randomNumbGen(lowerLimitOfNumb, upperLimitOfNumb)}`;
  const correctAnswer = String(eval(question));
  return { question, correctAnswer };
};
const game = () => gameConsole(0, questionGenerator, rules);
export default game;
