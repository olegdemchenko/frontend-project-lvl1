import randomNumbGen from '../utils';
import runEngine from '../index';

const description = 'Find the greatest common divisor of given numbers';
const getGreatestDivisor = (number1, number2) => {
  if (number1 === 0 || number2 === 0) {
    return number1 === 0 ? number2 : number1;
  }
  return getGreatestDivisor(Math.min(number1, number2),
    (Math.max(number1, number2) % Math.min(number1, number2)));
};
const genGameData = () => {
  const numb1 = randomNumbGen(0, 100);
  const numb2 = randomNumbGen(0, 100);
  const question = String().concat(numb1, ', ', numb2);
  return { question, correctAnswer: String(getGreatestDivisor(numb1, numb2)) };
};
export default () => runEngine(genGameData, description);
