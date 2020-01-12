import { randomNumbGen } from '../utils';
import gameConsole from '../index';

const description = 'What is the result of the expression ?';
const arrayOfOperators = ['+', '-', '*'];
const questionGenerator = () => {
  const firstOperand = randomNumbGen(0, 100);
  const secondOperand = randomNumbGen(0, 100);
  const operator = randomNumbGen(0, 2);
  const question = `${firstOperand} ${arrayOfOperators[operator]} ${secondOperand}`;
  let correctAnswer;
  switch (operator) {
    case 0:
      correctAnswer = String(firstOperand + secondOperand);
      break;
    case 1:
      correctAnswer = String(firstOperand - secondOperand);
      break;
    default:
      correctAnswer = String(firstOperand * secondOperand);
  }
  return { question, correctAnswer };
};
export default () => gameConsole(questionGenerator, description);
