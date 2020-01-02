"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.game = exports.rules = void 0;
const rules = 'Answer "yes" if given number is prime. Otherwise answer "no"';
exports.rules = rules;

const game = () => {
  const randomNumb = Math.ceil(Math.random() * 100 + 1);
  console.log(`Question: ${randomNumb}`);
  return (arg = randomNumb) => {
    let counter = 2;

    while (counter < arg) {
      if (arg % counter === 0) {
        return 'no';
      }

      counter += 1;
    }

    return 'yes';
  };
};

exports.game = game;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9pc1ByaW1lLmpzIl0sIm5hbWVzIjpbInJ1bGVzIiwiZ2FtZSIsInJhbmRvbU51bWIiLCJNYXRoIiwiY2VpbCIsInJhbmRvbSIsImNvbnNvbGUiLCJsb2ciLCJhcmciLCJjb3VudGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxNQUFNQSxLQUFLLEdBQUcsOERBQWQ7OztBQUNBLE1BQU1DLElBQUksR0FBRyxNQUFNO0FBQ2pCLFFBQU1DLFVBQVUsR0FBR0MsSUFBSSxDQUFDQyxJQUFMLENBQVVELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixHQUFoQixHQUFzQixDQUFoQyxDQUFuQjtBQUNBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxhQUFZTCxVQUFXLEVBQXBDO0FBQ0EsU0FBTyxDQUFDTSxHQUFHLEdBQUdOLFVBQVAsS0FBc0I7QUFDM0IsUUFBSU8sT0FBTyxHQUFHLENBQWQ7O0FBQ0EsV0FBT0EsT0FBTyxHQUFHRCxHQUFqQixFQUFzQjtBQUNwQixVQUFJQSxHQUFHLEdBQUdDLE9BQU4sS0FBa0IsQ0FBdEIsRUFBeUI7QUFDdkIsZUFBTyxJQUFQO0FBQ0Q7O0FBQ0RBLE1BQUFBLE9BQU8sSUFBSSxDQUFYO0FBQ0Q7O0FBQ0QsV0FBTyxLQUFQO0FBQ0QsR0FURDtBQVVELENBYkQiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBydWxlcyA9ICdBbnN3ZXIgXCJ5ZXNcIiBpZiBnaXZlbiBudW1iZXIgaXMgcHJpbWUuIE90aGVyd2lzZSBhbnN3ZXIgXCJub1wiJztcbmNvbnN0IGdhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHJhbmRvbU51bWIgPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCArIDEpO1xuICBjb25zb2xlLmxvZyhgUXVlc3Rpb246ICR7cmFuZG9tTnVtYn1gKTtcbiAgcmV0dXJuIChhcmcgPSByYW5kb21OdW1iKSA9PiB7XG4gICAgbGV0IGNvdW50ZXIgPSAyO1xuICAgIHdoaWxlIChjb3VudGVyIDwgYXJnKSB7XG4gICAgICBpZiAoYXJnICUgY291bnRlciA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJ25vJztcbiAgICAgIH1cbiAgICAgIGNvdW50ZXIgKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuICd5ZXMnO1xuICB9O1xufTtcbmV4cG9ydCB7IHJ1bGVzLCBnYW1lIH07XG4iXX0=