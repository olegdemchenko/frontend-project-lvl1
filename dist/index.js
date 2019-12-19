"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.greeting = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const greeting = () => {
  console.log('Welcome to the Brain Games!');

  const name = _readlineSync.default.question('May I have your name? ');

  console.log(`Hello, ${name}`);
};

exports.greeting = greeting;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJncmVldGluZyIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwicmVhZGxpbmVTeW5jIiwicXVlc3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBLE1BQU1BLFFBQVEsR0FBRyxNQUFNO0FBQ3ZCQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSw2QkFBWjs7QUFFQSxRQUFNQyxJQUFJLEdBQUdDLHNCQUFhQyxRQUFiLENBQXNCLHdCQUF0QixDQUFiOztBQUNBSixFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxVQUFTQyxJQUFLLEVBQTNCO0FBQ0MsQ0FMRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFkbGluZVN5bmMgZnJvbSAncmVhZGxpbmUtc3luYyc7XG5cbmNvbnN0IGdyZWV0aW5nID0gKCkgPT4ge1xuY29uc29sZS5sb2coJ1dlbGNvbWUgdG8gdGhlIEJyYWluIEdhbWVzIScpO1xuXG5jb25zdCBuYW1lID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdNYXkgSSBoYXZlIHlvdXIgbmFtZT8gJyk7XG5jb25zb2xlLmxvZyhgSGVsbG8sICR7bmFtZX1gKTtcbn07XG5leHBvcnQgeyBncmVldGluZyB9O1xuIl19