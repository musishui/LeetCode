/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  if (s.length <= 10) return []
  let map = {
    A: 0,
    C: 1,
    G: 2,
    T: 3
  }
  let ns = ['A', 'C', 'G', 'T']
  let set = new Set()
  let n = 0
  let base = Math.pow(4, 10)
  let result = new Set()
  for (let i = 0; i < s.length; i++) {
    let num = map[s.charAt(i)]
    n = n * 4 + num
    if (i >= 9) {
      n = n % base
      if (set.has(n)) {
        result.add(n)
      } else {
        set.add(n)
      }
    }
  }
  let rst = []
  result.forEach(value => {
    let str = []
    let v = value
    for (let i = 0; i < 10; i++) {
      let n = v % 4
      v = (v - n) / 4
      str.unshift(ns[n])
    }
    rst.push(str.join(''))
  })
  return rst
};