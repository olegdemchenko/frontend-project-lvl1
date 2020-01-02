import readlineSync from 'readline-sync';

let name;
const greeting = (arg = '') => {
  console.log('Welcome to the Brain Games!');
  console.log(arg);
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
};
// const game = (x, y) => (f) => f(x, y);
// const getQuestion = (pair) => pair((x, y) => x());
// const getAnswer = (pair) => pair((x, y) => y());
const gameConsole = (countOfCorrect, game, rules) => {
  if (countOfCorrect === 0) {
    greeting(rules);
  }
  if (countOfCorrect > 2) {
    console.log(`Congratilations, ${name}!`);
    return;
  }
  const question = game();
  const correctAnswer = question();
  const gamerAnswer = readlineSync.question('Your answer:');
  const nextLevel = () => {
    console.log('Correct!');
    return gameConsole(countOfCorrect + 1, game, rules);
  };
  return  gamerAnswer === correctAnswer ? nextLevel() : console.log(`${gamerAnswer} is wrong answer :(. Correct answer was ${correctAnswer}.\nLets try again, ${name}}`);
};
export { greeting, gameConsole };
