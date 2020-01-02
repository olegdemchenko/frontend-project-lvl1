"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gameConsole = exports.greeting = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let name;

const greeting = (arg = '') => {
  console.log('Welcome to the Brain Games!');
  console.log(arg);
  name = _readlineSync.default.question('May I have your name? ');
  console.log(`Hello, ${name}`);
}; // const game = (x, y) => (f) => f(x, y);
// const getQuestion = (pair) => pair((x, y) => x());
// const getAnswer = (pair) => pair((x, y) => y());


exports.greeting = greeting;

const gameConsole = (countOfCorrect, game, rules) => {
  if (countOfCorrect === 0) {
    greeting(rules);
  }

  if (countOfCorrect > 2) {
    console.log(`Congratilations, ${name}!`);
    return;
  }

  const question = game();
  const correctAnswer = question();

  const gamerAnswer = _readlineSync.default.question('Your answer:');

  const nextLevel = () => {
    console.log('Correct!');
    return gameConsole(countOfCorrect + 1, game, rules);
  };

  return gamerAnswer === correctAnswer ? nextLevel() : console.log(`${gamerAnswer} is wrong answer :(. Correct answer was ${correctAnswer}.\nLets try again, ${name}}`);
};

exports.gameConsole = gameConsole;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJuYW1lIiwiZ3JlZXRpbmciLCJhcmciLCJjb25zb2xlIiwibG9nIiwicmVhZGxpbmVTeW5jIiwicXVlc3Rpb24iLCJnYW1lQ29uc29sZSIsImNvdW50T2ZDb3JyZWN0IiwiZ2FtZSIsInJ1bGVzIiwiY29ycmVjdEFuc3dlciIsImdhbWVyQW5zd2VyIiwibmV4dExldmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFQSxJQUFJQSxJQUFKOztBQUNBLE1BQU1DLFFBQVEsR0FBRyxDQUFDQyxHQUFHLEdBQUcsRUFBUCxLQUFjO0FBQzdCQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSw2QkFBWjtBQUNBRCxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBRixFQUFBQSxJQUFJLEdBQUdLLHNCQUFhQyxRQUFiLENBQXNCLHdCQUF0QixDQUFQO0FBQ0FILEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLFVBQVNKLElBQUssRUFBM0I7QUFDRCxDQUxELEMsQ0FNQTtBQUNBO0FBQ0E7Ozs7O0FBQ0EsTUFBTU8sV0FBVyxHQUFHLENBQUNDLGNBQUQsRUFBaUJDLElBQWpCLEVBQXVCQyxLQUF2QixLQUFpQztBQUNuRCxNQUFJRixjQUFjLEtBQUssQ0FBdkIsRUFBMEI7QUFDeEJQLElBQUFBLFFBQVEsQ0FBQ1MsS0FBRCxDQUFSO0FBQ0Q7O0FBQ0QsTUFBSUYsY0FBYyxHQUFHLENBQXJCLEVBQXdCO0FBQ3RCTCxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxvQkFBbUJKLElBQUssR0FBckM7QUFDQTtBQUNEOztBQUNELFFBQU1NLFFBQVEsR0FBR0csSUFBSSxFQUFyQjtBQUNBLFFBQU1FLGFBQWEsR0FBR0wsUUFBUSxFQUE5Qjs7QUFDQSxRQUFNTSxXQUFXLEdBQUdQLHNCQUFhQyxRQUFiLENBQXNCLGNBQXRCLENBQXBCOztBQUNBLFFBQU1PLFNBQVMsR0FBRyxNQUFNO0FBQ3RCVixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaO0FBQ0EsV0FBT0csV0FBVyxDQUFDQyxjQUFjLEdBQUcsQ0FBbEIsRUFBcUJDLElBQXJCLEVBQTJCQyxLQUEzQixDQUFsQjtBQUNELEdBSEQ7O0FBSUEsU0FBUUUsV0FBVyxLQUFLRCxhQUFoQixHQUFnQ0UsU0FBUyxFQUF6QyxHQUE4Q1YsT0FBTyxDQUFDQyxHQUFSLENBQWEsR0FBRVEsV0FBWSwyQ0FBMENELGFBQWMsc0JBQXFCWCxJQUFLLEdBQTdHLENBQXREO0FBQ0QsQ0FoQkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhZGxpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xuXG5sZXQgbmFtZTtcbmNvbnN0IGdyZWV0aW5nID0gKGFyZyA9ICcnKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdXZWxjb21lIHRvIHRoZSBCcmFpbiBHYW1lcyEnKTtcbiAgY29uc29sZS5sb2coYXJnKTtcbiAgbmFtZSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignTWF5IEkgaGF2ZSB5b3VyIG5hbWU/ICcpO1xuICBjb25zb2xlLmxvZyhgSGVsbG8sICR7bmFtZX1gKTtcbn07XG4vLyBjb25zdCBnYW1lID0gKHgsIHkpID0+IChmKSA9PiBmKHgsIHkpO1xuLy8gY29uc3QgZ2V0UXVlc3Rpb24gPSAocGFpcikgPT4gcGFpcigoeCwgeSkgPT4geCgpKTtcbi8vIGNvbnN0IGdldEFuc3dlciA9IChwYWlyKSA9PiBwYWlyKCh4LCB5KSA9PiB5KCkpO1xuY29uc3QgZ2FtZUNvbnNvbGUgPSAoY291bnRPZkNvcnJlY3QsIGdhbWUsIHJ1bGVzKSA9PiB7XG4gIGlmIChjb3VudE9mQ29ycmVjdCA9PT0gMCkge1xuICAgIGdyZWV0aW5nKHJ1bGVzKTtcbiAgfVxuICBpZiAoY291bnRPZkNvcnJlY3QgPiAyKSB7XG4gICAgY29uc29sZS5sb2coYENvbmdyYXRpbGF0aW9ucywgJHtuYW1lfSFgKTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgcXVlc3Rpb24gPSBnYW1lKCk7XG4gIGNvbnN0IGNvcnJlY3RBbnN3ZXIgPSBxdWVzdGlvbigpO1xuICBjb25zdCBnYW1lckFuc3dlciA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignWW91ciBhbnN3ZXI6Jyk7XG4gIGNvbnN0IG5leHRMZXZlbCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnQ29ycmVjdCEnKTtcbiAgICByZXR1cm4gZ2FtZUNvbnNvbGUoY291bnRPZkNvcnJlY3QgKyAxLCBnYW1lLCBydWxlcyk7XG4gIH07XG4gIHJldHVybiAgZ2FtZXJBbnN3ZXIgPT09IGNvcnJlY3RBbnN3ZXIgPyBuZXh0TGV2ZWwoKSA6IGNvbnNvbGUubG9nKGAke2dhbWVyQW5zd2VyfSBpcyB3cm9uZyBhbnN3ZXIgOiguIENvcnJlY3QgYW5zd2VyIHdhcyAke2NvcnJlY3RBbnN3ZXJ9LlxcbkxldHMgdHJ5IGFnYWluLCAke25hbWV9fWApO1xufTtcbmV4cG9ydCB7IGdyZWV0aW5nLCBnYW1lQ29uc29sZSB9O1xuIl19