
const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
let numb = 0;
const question = () => {
  numb = Math.floor(Math.random() * 100);
  return numb;
};
const correctAnswer = () => (numb % 2 === 0 ? 'yes' : 'no');
export { rules, question, correctAnswer };
