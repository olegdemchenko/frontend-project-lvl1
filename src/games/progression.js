import randomNumbGen from '../utils';
import gameConsole from '../index';

const description = 'What number is missing in the progression?';
const progressionLength = 10;
const maxValueOfDifference = 10;
const questionGenerator = () => {
  const startNumb = randomNumbGen(1, 50);
  const progressionDifference = randomNumbGen(1, maxValueOfDifference);
  const arithmeticProgression = [];
  arithmeticProgression.push(startNumb);
  for (let i = 1; i < progressionLength; i += 1) {
    arithmeticProgression.push(arithmeticProgression[i - 1] + progressionDifference);
  }
  const indexOfHiddenElement = randomNumbGen(0, progressionLength - 1);
  const answer = arithmeticProgression[indexOfHiddenElement];
  arithmeticProgression[indexOfHiddenElement] = '..';
  const question = arithmeticProgression.join(' ');
  const correctAnswer = String(answer);
  return { question, correctAnswer };
};
export default () => gameConsole(questionGenerator, description);
