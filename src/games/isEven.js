
const rules = 'Answer "yes" if the number is even, otherwise answer "no"';

const game = () => {
  const numb = Math.floor(Math.random() * 100);
  console.log(`Question: ${numb}`);
  return (param = numb) => (param % 2 === 0 ? 'yes' : 'no');
};
export { rules, game };
