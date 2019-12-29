import readlineSync from 'readline-sync';

let name;
const greeting = (arg = '') => {
  console.log('Welcome to the Brain Games!');
  console.log(arg);
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
};
const game = (x, y) => (f) => f(x, y);
const getQuestion = (pair) => pair((x, y) => x());
const getAnswer = (pair) => pair((x, y) => y());
const gameConsole = (countOfCorrect, pair, rules) => {
  if (countOfCorrect === 0) {
    greeting(rules);
  }
  if (countOfCorrect > 2) {
    console.log(`Congratilations, ${name}!`);
    return;
  }
  const question = getQuestion(pair);
  const correctAnswer = getAnswer(pair);
  const gamerAnswer = readlineSync.question(`Question:${question}\nYour answer:`);
  const nextLevel = () => {
    console.log('Correct!');
    return gameConsole(countOfCorrect + 1, pair, rules);
  };
  return  gamerAnswer === correctAnswer ? nextLevel() :console.log(`${gamerAnswer} is wrong answer :(. Correct answer was ${correctAnswer}.\nLets try again, ${name}}`);
};
export { greeting, gameConsole, game };
