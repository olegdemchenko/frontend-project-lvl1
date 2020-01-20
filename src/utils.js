const randomNumbGen = (lowerLimit, upperLimit) => (
  Math.round(lowerLimit + Math.random() * (upperLimit - lowerLimit))
);

export default randomNumbGen;
