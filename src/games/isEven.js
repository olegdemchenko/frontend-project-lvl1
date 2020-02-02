import randomNumbGen from '../utils';
import runEngine from '../index';

const isEven = (numb) => (numb % 2 === 0);
const description = 'Answer "yes" if the number is even, otherwise answer "no"';
const genGameData = () => {
  const question = randomNumbGen(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question: String(question), correctAnswer };
};
export default () => runEngine(genGameData, description);
