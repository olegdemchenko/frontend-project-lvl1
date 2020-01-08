const randomNumbGen = (lowerLimit, upperLimit) => (
  Math.round(Math.random() * upperLimit + lowerLimit)
);
export default randomNumbGen;
