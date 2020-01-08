import readlineSync from 'readline-sync';

let name;
const gameConsole = (countOfCorrect, game, rules) => {
  if (countOfCorrect === 0) {
    console.log('Welcome to the Brain Games!');
    console.log(rules);
    name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}`);
  }
  if (countOfCorrect > 2) {
    console.log(`Congratilations, ${name}!`);
    return;
  }
  const { question, correctAnswer } = game();
  console.log(`Question: ${question}`);
  const gamerAnswer = readlineSync.question('Your answer:');
  if (gamerAnswer === correctAnswer) {
    console.log('Correct!');
    return gameConsole(countOfCorrect + 1, game, rules);
  } else {
    console.log(`${gamerAnswer} is wrong answer :(. Correct answer was ${correctAnswer}.\nLets try again, ${name}}`);
  };
};
export default gameConsole;
