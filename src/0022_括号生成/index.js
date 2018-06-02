/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (!n) return []
  let len = 2 * n
  let rlt = [{
    val: 1,
    cnt: 1,
    str: '('
  }]
  for (let i = 1; i < len; i++) {
    for (let l = rlt.length; l--;) {
      let item = rlt[l]
      if (item.val === 0) {
        item.str = item.str + '('
        item.val = item.val + 1
        item.cnt = item.cnt + 1
      } else if (item.val > 0) {
        rlt[l] = {
          val: item.val -1,
          cnt: item.cnt ,
          str: item.str + ')'
        }
        if (item.cnt < n) {
          rlt.push({
            val: item.val + 1,
            cnt: item.cnt + 1,
            str: item.str + '('
          })
        }
      }
    }
  }
  return rlt.map(item => item.str)
};

module.exports = generateParenthesis

//console.log(JSON.stringify(generateParenthesis(3)))