import randomNumbGen from '../utils';
import gameConsole from '../index';

const description = 'What is the result of the expression ?';
const arrayOfOperators = ['+', '-', '*'];
const getResult = (operator, arg1, arg2) => {
  switch (operator) {
    case '+':
      return String(arg1 + arg2);
    case '-':
      return String(arg1 - arg2);
    case '*':
      return String(arg1 * arg2);
    default:
      return 'the result cannot be determined';
  }
};
const questionGenerator = () => {
  const firstOperand = randomNumbGen(0, 100);
  const secondOperand = randomNumbGen(0, 100);
  const operator = arrayOfOperators[randomNumbGen(0, arrayOfOperators.length - 1)];
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = getResult(operator, firstOperand, secondOperand);
  return { question, correctAnswer };
};
export default () => gameConsole(questionGenerator, description);
