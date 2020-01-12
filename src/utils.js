const randomNumbGen = (lowerLimit, upperLimit) => (
  Math.round(Math.random() * upperLimit + lowerLimit)
);
const isEven = (arg) => (arg % 2 === 0 ? 'yes' : 'no');
const isRemainderNull = (arg, divisor) => (arg % divisor === 0);
export { randomNumbGen, isEven, isRemainderNull };
