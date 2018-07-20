/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows < 2 || s.length <= numRows) return s
  let num = numRows * 2 - 2
  let i = 0
  let rtn = []
  while (i < s.length) {
    let n = i % num
    n = n < numRows ? n : num - n
    rtn[n] || (rtn[n] = [])
    rtn[n].push(s.charAt(i))
    i++
  }
  let strs = rtn[0]
  for (let j = 1; j < rtn.length; j++){
    strs = strs.concat(rtn[j])
  }
  return strs.join('')
};

module.exports = convert

// console.log(convert('PAYPALISHIRING',4))