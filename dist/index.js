"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEven = exports.greeting = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let name;

const greeting = (arg = '') => {
  console.log('Welcome to the Brain Games!');
  console.log(arg);
  name = _readlineSync.default.question('May I have your name? ');
  console.log(`Hello, ${name}`);
};

exports.greeting = greeting;

const isEven = countOfCorrect => {
  if (countOfCorrect === 0) {
    greeting('Answer "yes" if the number is even, otherwise answer "no"');
  }

  if (countOfCorrect > 2) {
    console.log(`Congratilations, ${name}`);
    return;
  }

  const number = Math.floor(Math.random() * 100);
  const correctAnswer = number % 2 ? 'no' : 'yes';

  const gamerAnswer = _readlineSync.default.question(`Question:${number}\nYour answer:`);

  return gamerAnswer === correctAnswer ? isEven(countOfCorrect + 1) : console.log(`${gamerAnswer} is wrong answer :(. Correct answer was ${correctAnswer}.\nLets try again, ${name}}`);
};

exports.isEven = isEven;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJuYW1lIiwiZ3JlZXRpbmciLCJhcmciLCJjb25zb2xlIiwibG9nIiwicmVhZGxpbmVTeW5jIiwicXVlc3Rpb24iLCJpc0V2ZW4iLCJjb3VudE9mQ29ycmVjdCIsIm51bWJlciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNvcnJlY3RBbnN3ZXIiLCJnYW1lckFuc3dlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUEsSUFBSUEsSUFBSjs7QUFDQSxNQUFNQyxRQUFRLEdBQUcsQ0FBQ0MsR0FBRyxHQUFHLEVBQVAsS0FBYztBQUM3QkMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksNkJBQVo7QUFDQUQsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDQUYsRUFBQUEsSUFBSSxHQUFHSyxzQkFBYUMsUUFBYixDQUFzQix3QkFBdEIsQ0FBUDtBQUNBSCxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxVQUFTSixJQUFLLEVBQTNCO0FBQ0QsQ0FMRDs7OztBQU1BLE1BQU1PLE1BQU0sR0FBSUMsY0FBRCxJQUFvQjtBQUNqQyxNQUFJQSxjQUFjLEtBQUssQ0FBdkIsRUFBMEI7QUFDeEJQLElBQUFBLFFBQVEsQ0FBQywyREFBRCxDQUFSO0FBQ0Q7O0FBQ0QsTUFBSU8sY0FBYyxHQUFHLENBQXJCLEVBQXdCO0FBQ3RCTCxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxvQkFBbUJKLElBQUssRUFBckM7QUFDQTtBQUNEOztBQUNELFFBQU1TLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixHQUEzQixDQUFmO0FBQ0EsUUFBTUMsYUFBYSxHQUFHSixNQUFNLEdBQUcsQ0FBVCxHQUFhLElBQWIsR0FBb0IsS0FBMUM7O0FBQ0EsUUFBTUssV0FBVyxHQUFHVCxzQkFBYUMsUUFBYixDQUF1QixZQUFXRyxNQUFPLGdCQUF6QyxDQUFwQjs7QUFDQSxTQUFRSyxXQUFXLEtBQUtELGFBQWhCLEdBQWdDTixNQUFNLENBQUNDLGNBQWMsR0FBRyxDQUFsQixDQUF0QyxHQUE0REwsT0FBTyxDQUFDQyxHQUFSLENBQWEsR0FBRVUsV0FBWSwyQ0FBMENELGFBQWMsc0JBQXFCYixJQUFLLEdBQTdHLENBQXBFO0FBQ0QsQ0FaRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFkbGluZVN5bmMgZnJvbSAncmVhZGxpbmUtc3luYyc7XG5cbmxldCBuYW1lO1xuY29uc3QgZ3JlZXRpbmcgPSAoYXJnID0gJycpID0+IHtcbiAgY29uc29sZS5sb2coJ1dlbGNvbWUgdG8gdGhlIEJyYWluIEdhbWVzIScpO1xuICBjb25zb2xlLmxvZyhhcmcpXG4gIG5hbWUgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ01heSBJIGhhdmUgeW91ciBuYW1lPyAnKTtcbiAgY29uc29sZS5sb2coYEhlbGxvLCAke25hbWV9YCk7XG59O1xuY29uc3QgaXNFdmVuID0gKGNvdW50T2ZDb3JyZWN0KSA9PiB7XG4gIGlmIChjb3VudE9mQ29ycmVjdCA9PT0gMCkge1xuICAgIGdyZWV0aW5nKCdBbnN3ZXIgXCJ5ZXNcIiBpZiB0aGUgbnVtYmVyIGlzIGV2ZW4sIG90aGVyd2lzZSBhbnN3ZXIgXCJub1wiJylcbiAgfVxuICBpZiAoY291bnRPZkNvcnJlY3QgPiAyKSB7XG4gICAgY29uc29sZS5sb2coYENvbmdyYXRpbGF0aW9ucywgJHtuYW1lfWApO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICBjb25zdCBjb3JyZWN0QW5zd2VyID0gbnVtYmVyICUgMiA/ICdubycgOiAneWVzJztcbiAgY29uc3QgZ2FtZXJBbnN3ZXIgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oYFF1ZXN0aW9uOiR7bnVtYmVyfVxcbllvdXIgYW5zd2VyOmApXG4gIHJldHVybiAgZ2FtZXJBbnN3ZXIgPT09IGNvcnJlY3RBbnN3ZXIgPyBpc0V2ZW4oY291bnRPZkNvcnJlY3QgKyAxKSA6Y29uc29sZS5sb2coYCR7Z2FtZXJBbnN3ZXJ9IGlzIHdyb25nIGFuc3dlciA6KC4gQ29ycmVjdCBhbnN3ZXIgd2FzICR7Y29ycmVjdEFuc3dlcn0uXFxuTGV0cyB0cnkgYWdhaW4sICR7bmFtZX19YCk7XG59XG5leHBvcnQgeyBncmVldGluZywgaXNFdmVuIH07XG4iXX0=