/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  let s = citations.sort((m,n)=>m-n)
  let len = s.length
  for (let i = 0; i < len; i++) {
    if (s[i] >= len - i) {
      return len - i
    }
  }
  return 0
};