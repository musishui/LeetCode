/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let m = board.length
  let n = m && board[0].length
  if (!m || !n) return false

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (fun(0, j, i)) {
        return true
      }
    }
  }

  return false

  function fun(idx, x, y) {
    if (x < 0 || y < 0 || x > n - 1 || y > m - 1) return false

    let value = board[y][x]
    if (value !== word[idx]) return false
    board[y][x] = '#'
    let res = idx++ === word.length - 1
    res = res || fun(idx, x, y - 1, 't')
    res = res || fun(idx, x + 1, y, 'r')
    res = res || fun(idx, x, y + 1, 'b')
    res = res || fun(idx, x - 1, y, 'l')

    if (!res) {
      board[y][x] = value
    }
    return res
  }
};

module.exports = exist