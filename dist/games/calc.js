"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.game = exports.rules = void 0;
const rules = 'What is the result of the expression ?';
exports.rules = rules;

const game = () => {
  const operators = ['+', '-', '*'];
  const stroke = `${Math.floor(Math.random() * 100)} ${operators[Math.floor(Math.random() * 3)]} ${Math.floor(Math.random() * 100)}`;
  console.log(`Question: ${stroke}`);
  return (param = stroke) => String(eval(param));
};

exports.game = game;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9jYWxjLmpzIl0sIm5hbWVzIjpbInJ1bGVzIiwiZ2FtZSIsIm9wZXJhdG9ycyIsInN0cm9rZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNvbnNvbGUiLCJsb2ciLCJwYXJhbSIsIlN0cmluZyIsImV2YWwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE1BQU1BLEtBQUssR0FBRyx3Q0FBZDs7O0FBRUEsTUFBTUMsSUFBSSxHQUFHLE1BQU07QUFDakIsUUFBTUMsU0FBUyxHQUFHLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBQWxCO0FBQ0EsUUFBTUMsTUFBTSxHQUFJLEdBQUVDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsR0FBM0IsQ0FBZ0MsSUFBR0osU0FBUyxDQUFDRSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLENBQTNCLENBQUQsQ0FBZ0MsSUFBR0YsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixHQUEzQixDQUFnQyxFQUFqSTtBQUNBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxhQUFZTCxNQUFPLEVBQWhDO0FBQ0EsU0FBTyxDQUFDTSxLQUFLLEdBQUdOLE1BQVQsS0FBb0JPLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDRixLQUFELENBQUwsQ0FBakM7QUFDRCxDQUxEIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcnVsZXMgPSAnV2hhdCBpcyB0aGUgcmVzdWx0IG9mIHRoZSBleHByZXNzaW9uID8nO1xuXG5jb25zdCBnYW1lID0gKCkgPT4ge1xuICBjb25zdCBvcGVyYXRvcnMgPSBbJysnLCAnLScsICcqJ107XG4gIGNvbnN0IHN0cm9rZSA9IGAke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCl9ICR7b3BlcmF0b3JzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpXX0gJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApfWA7XG4gIGNvbnNvbGUubG9nKGBRdWVzdGlvbjogJHtzdHJva2V9YCk7XG4gIHJldHVybiAocGFyYW0gPSBzdHJva2UpID0+IFN0cmluZyhldmFsKHBhcmFtKSk7XG59O1xuZXhwb3J0IHsgcnVsZXMsIGdhbWUgfTtcbiJdfQ==