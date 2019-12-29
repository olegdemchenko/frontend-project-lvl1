const rules = 'What is the result of the expression ?';
const operators = ['+', '-', '*'];
let stroke = '';
const question = () => {
  stroke = `${Math.floor(Math.random() * 100)} ${operators[Math.floor(Math.random() * 3)]} ${Math.floor(Math.random() * 100)}`;
  return stroke;
};
const correctAnswer = () => String(eval(stroke));
export { rules, question, correctAnswer };
