/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let res = []
  let val = 1
  for (let i = 0, j = rowIndex; i <= j; i++) {
    if (i > 0) {
      val = val * (j--) / i
    }
    res[i] = val
    res[j] = val
  }
  return res
};

module.exports = getRow