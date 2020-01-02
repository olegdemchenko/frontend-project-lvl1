const rules = 'What number is missing in the progression?';
const game = () => {
  const startNumb = Math.ceil(Math.random() * 30);
  const d = Math.ceil(Math.random() * 9);
  const arithmeticProgression = [];
  arithmeticProgression.push(startNumb);
  for (let i = 1; i < 10; i += 1) {
    arithmeticProgression.push(arithmeticProgression[i - 1] + d);
  }
  const answer = arithmeticProgression[d];
  arithmeticProgression[d] = '..';
  console.log(`Question: ${arithmeticProgression.join(' ')}`);
  return (arg = answer) => String(arg);
};
export { rules, game };
