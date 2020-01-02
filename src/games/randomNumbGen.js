const randomNumbGen = (typeOfFunc, lowerLimit, upperLimit) => {
  switch (typeOfFunc) {
    case 'floor':
      return Math.float(Math.random() * upperLimit + lowerLimit);
    default:
      return Math.ceil(Math.random() * upperLimit + lowerLimit);
  }
};
export default randomNumbGen;
