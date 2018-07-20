/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let count = 0
  for (let l = s.length; l--;){
    if (s[l] !== ' ') {
      count+=1
    } else if(count){
      break
    }
  }
  return count
};

module.exports = lengthOfLastWord