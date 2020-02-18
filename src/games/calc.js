import randomNumbGen from '../utils';
import runEngine from '../index';

const description = 'What is the result of the expression ?';
const operators = ['+', '-', '*'];
const calculate = (operator, numb1, numb2) => {
  switch (operator) {
    case '+':
      return (numb1 + numb2);
    case '-':
      return (numb1 - numb2);
    case '*':
      return (numb1 * numb2);
    default:
      return null;
  }
};
const genGameData = () => {
  const firstOperand = randomNumbGen(0, 100);
  const secondOperand = randomNumbGen(0, 100);
  const operator = operators[randomNumbGen(0, operators.length - 1)];
  const question = String().concat(firstOperand, ' ', operator, ' ', secondOperand);
  const correctAnswer = String(calculate(operator, firstOperand, secondOperand));
  return { question, correctAnswer };
};
export default () => runEngine(genGameData, description);
