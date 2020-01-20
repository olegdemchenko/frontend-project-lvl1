import randomNumbGen from '../utils';
import runEngine from '../index';

const isEven = (arg) => (arg % 2 === 0);
const description = 'Answer "yes" if the number is even, otherwise answer "no"';
const genGameData = () => {
  const question = String(randomNumbGen(1, 100));
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};
export default () => runEngine(genGameData, description);
