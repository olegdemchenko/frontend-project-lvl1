"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.game = exports.rules = void 0;
const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
exports.rules = rules;

const game = () => {
  const numb = Math.floor(Math.random() * 100);
  console.log(`Question: ${numb}`);
  return (param = numb) => param % 2 === 0 ? 'yes' : 'no';
};

exports.game = game;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9pc0V2ZW4uanMiXSwibmFtZXMiOlsicnVsZXMiLCJnYW1lIiwibnVtYiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNvbnNvbGUiLCJsb2ciLCJwYXJhbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsTUFBTUEsS0FBSyxHQUFHLDJEQUFkOzs7QUFFQSxNQUFNQyxJQUFJLEdBQUcsTUFBTTtBQUNqQixRQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsR0FBM0IsQ0FBYjtBQUNBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxhQUFZTCxJQUFLLEVBQTlCO0FBQ0EsU0FBTyxDQUFDTSxLQUFLLEdBQUdOLElBQVQsS0FBbUJNLEtBQUssR0FBRyxDQUFSLEtBQWMsQ0FBZCxHQUFrQixLQUFsQixHQUEwQixJQUFwRDtBQUNELENBSkQiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHJ1bGVzID0gJ0Fuc3dlciBcInllc1wiIGlmIHRoZSBudW1iZXIgaXMgZXZlbiwgb3RoZXJ3aXNlIGFuc3dlciBcIm5vXCInO1xuXG5jb25zdCBnYW1lID0gKCkgPT4ge1xuICBjb25zdCBudW1iID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgY29uc29sZS5sb2coYFF1ZXN0aW9uOiAke251bWJ9YCk7XG4gIHJldHVybiAocGFyYW0gPSBudW1iKSA9PiAocGFyYW0gJSAyID09PSAwID8gJ3llcycgOiAnbm8nKTtcbn07XG5leHBvcnQgeyBydWxlcywgZ2FtZSB9O1xuIl19