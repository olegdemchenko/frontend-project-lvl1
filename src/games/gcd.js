import randomNumbGen from '../utils';
import runEngine from '../index';

const description = 'Find the greatest common divisor of given numbers';
const getGreatestDivisor = (number1, number2) => {
  if (number1 === 0 || number2 === 0) {
    return number1 === 0 ? number2 : number1;
  }
  let greatestDivisor = 0;
  let denom = 1;
  while (denom <= Math.min(number1, number2)) {
    if (number1 % denom === 0 && number2 % denom === 0) {
      greatestDivisor = denom;
    }
    denom += 1;
  }
  return greatestDivisor;
};
const genGameData = () => {
  const numb1 = randomNumbGen(0, 100);
  const numb2 = randomNumbGen(0, 100);
  const question = String().concat(numb1, ', ', numb2);
  return { question, correctAnswer: `${getGreatestDivisor(numb1, numb2)}` };
};
export default () => runEngine(genGameData, description);
