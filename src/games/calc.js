import randomNumbGen from '../utils';
import gameConsole from '../index';

const rules = 'What is the result of the expression ?';
const questionGenerator = () => {
  const operators = ['+', '-', '*'];
  const upperLimitOfNumb = 100;
  const lowerLimitOfNumb = 0;
  const question = `${randomNumbGen('ceil', lowerLimitOfNumb, upperLimitOfNumb)} ${operators[randomNumbGen('floor', lowerLimitOfNumb, operators.length)]} ${randomNumbGen('ceil', lowerLimitOfNumb, upperLimitOfNumb)}`;
  const correctAnswer = String(eval(question));
  return { question, correctAnswer };
};
const game = () => gameConsole(0, questionGenerator, rules);
export default game;
