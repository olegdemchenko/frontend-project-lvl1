const rules = 'What is the result of the expression ?';

const game = () => {
  const operators = ['+', '-', '*'];
  const stroke = `${Math.floor(Math.random() * 100)} ${operators[Math.floor(Math.random() * 3)]} ${Math.floor(Math.random() * 100)}`;
  console.log(`Question: ${stroke}`);
  return (param = stroke) => String(eval(param));
};
export { rules, game };
