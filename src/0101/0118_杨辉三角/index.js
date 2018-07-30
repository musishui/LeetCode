/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if(numRows === 0) return []
  let rows = [
    [1]
  ]
  if (numRows === 1) return rows
  for (let i = 0; i < numRows-1; i++) {
    let row=[1]
    for (let n = 0; n < i; n++) {
      row.push(rows[i][n] + rows[i][n + 1])
    }
    row.push(1)
    rows.push(row)
  }
  return rows
};

module.exports = generate