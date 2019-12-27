import readlineSync from 'readline-sync';

let name;
const greeting = (arg = '') => {
  console.log('Welcome to the Brain Games!');
  console.log(arg);
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
};
const isEven = (countOfCorrect) => {
  if (countOfCorrect === 0) {
    greeting('Answer "yes" if the number is even, otherwise answer "no"');
  }
  if (countOfCorrect > 2) {
    console.log(`Congratilations, ${name}`);
    return;
  }
  const number = Math.floor(Math.random() * 100);
  const correctAnswer = number % 2 ? 'no' : 'yes';
  const gamerAnswer = readlineSync.question(`Question:${number}\nYour answer:`);
  return  gamerAnswer === correctAnswer ? isEven(countOfCorrect + 1) :console.log(`${gamerAnswer} is wrong answer :(. Correct answer was ${correctAnswer}.\nLets try again, ${name}}`);
};
export { greeting, isEven };
