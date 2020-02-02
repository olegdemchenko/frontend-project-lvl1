import randomNumbGen from '../utils';
import runEngine from '../index';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const isPrime = (number) => {
  if (number <= 1) return false;
  let divider = 2;
  while (divider < number) {
    if (number % divider === 0) {
      return false;
    }
    divider += 1;
  }
  return true;
};
const genGameData = () => {
  const question = randomNumbGen(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question: String(question), correctAnswer };
};

export default () => runEngine(genGameData, description);
