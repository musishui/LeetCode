/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  if (!s) return []
  let cache = new Map()
  const isPalindrome = (s) => {
    if (cache.has(s)) return cache.get(s)
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
      if (s[i] != s[j]) {
        cache.set(s, false)
        return false
      }
    }
    cache.set(s, true)
    return true
  }
  let data = [
    [s[0]]
  ]
  let temArr = []
  for (let i = 1; i < s.length; i++) {
    let arr = []
    let temp = []
    for (let j = 0; j < data.length; j++) {
      let item = data[j]
      arr.push([...item, s[i]])
      let last = item.pop() + s[i]
      if (isPalindrome(last)) {
        arr.push([...item, last])
      } else {
        temp.push([...item,last])
      }
    }
    for (let m = 0; m < temArr.length; m++){
      let item = temArr[m]
      let last = item.pop() + s[i]
      if (isPalindrome(last)) {
        arr.push([...item, last])
      } else {
        temp.push([...item,last])
      }
    }
    data = arr
    temArr = temp
  }
  return data
};
console.log(partition('abbab'))
module.exports = partition