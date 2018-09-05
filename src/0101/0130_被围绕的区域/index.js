/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  let m = board.length-1
  let n = (board[0]||[]).length-1
  if (m <= 0 || n <= 0) return
  let arr = []
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (board[i][j] === 'O') {
        if (i === 0 || j === 0 || i == m || j == n) {
          arr.push({i,j})
        }
        board[i][j]=''
      }
    }
  }

  arr.forEach(({i,j})=>helper(i,j))
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (board[i][j] === '') {
        board[i][j]='X'
      }
    }
  }
  function helper (i, j) {
    if (i < 0 || i > m || j < 0 || j > n || board[i][j] !== '') return
    board[i][j] = 'O'
    helper(i - 1, j)
    helper(i + 1, j)
    helper(i, j - 1)
    helper(i, j + 1)
  }
};
module.exports = solve