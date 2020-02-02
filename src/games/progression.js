import randomNumbGen from '../utils';
import runEngine from '../index';

const description = 'What number is missing in the progression?';
const progressionLength = 10;
const maxDifference = 10;
const genGameData = () => {
  const startNumb = randomNumbGen(1, 50);
  const progressionDifference = randomNumbGen(1, maxDifference);
  const arithmeticProgression = [];
  arithmeticProgression.push(startNumb);
  for (let i = 1; i < progressionLength; i += 1) {
    arithmeticProgression.push(arithmeticProgression[i - 1] + progressionDifference);
  }
  const hiddenElementIndex = randomNumbGen(0, progressionLength - 1);
  const answer = arithmeticProgression[hiddenElementIndex];
  arithmeticProgression[hiddenElementIndex] = '..';
  const question = arithmeticProgression.join(' ');
  const correctAnswer = String(answer);
  return { question, correctAnswer };
};
export default () => runEngine(genGameData, description);
