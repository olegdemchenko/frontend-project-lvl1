import readlineSync from 'readline-sync';


const gameConsole = (game, rules) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  for (let i = 0; i < 3; i += 1) {
    const { question, correctAnswer } = game();
    console.log(`Question: ${question}`);
    const gamerAnswer = readlineSync.question('Your answer:');
    if (gamerAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${gamerAnswer} is wrong answer :(. Correct answer was ${correctAnswer}.\nLets try again, ${name}}`);
      return;
    }
  }
  console.log(`Congratilations, ${name}!`);
};
export default gameConsole;
