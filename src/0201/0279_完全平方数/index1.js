/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  let square_nums = new Set()
  const is_divided_by = (n, count) => {
    if (count === 1) {
      return square_nums.has(n)
    }
    for (let square of square_nums) {
      if (is_divided_by(n - square, count - 1)) {
        return true
      }
    }
    return false
  }
  let max_square_index = ~~(Math.sqrt(n)) + 1
  for (let i = 1; i < max_square_index; i++) {
    square_nums.add(i * i)
  }
  let count = 1
  for (; count <= n; count++) {
    if (is_divided_by(n, count)) {
      return count
    }
  }
  return count
};

console.log(numSquares(12))