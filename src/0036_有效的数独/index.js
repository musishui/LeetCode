/**
 * @param {character[][]} board
 * @return {boolean}
 */

var isValidSudoku = function (board) {
  let a = []
  let b = []
  let c = []
  for (let i = 0; i < 9; i++) {
    a.push({})
    b.push({})
    c.push({})
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let val = board[i][j]
      if (val !== '.') {
        let m = Math.floor(i / 3) * 3 + Math.floor(j / 3)
        if (a[i][val] || b[j][val] || c[m][val]) return false
        a[i][val] = b[j][val] = c[m][val] = true
      }
    }
  }
  return true
}
module.exports = isValidSudoku