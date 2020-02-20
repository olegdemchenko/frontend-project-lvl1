import readlineSync from 'readline-sync';

const gameLevelsCount = 3;
const runEngine = (genGameData, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  for (let i = 0; i < gameLevelsCount; i += 1) {
    const { question, correctAnswer } = genGameData();
    console.log(`Question: ${question}`);
    const gamerAnswer = readlineSync.question('Your answer:');
    if (gamerAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${gamerAnswer} is wrong answer :(. Correct answer was ${correctAnswer}.`);
      console.log(`Lets try again, ${name}`);
      return;
    }
  }
  console.log(`Congratilations, ${name}!`);
};
export default runEngine;
