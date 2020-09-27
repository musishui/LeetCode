/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  let cache = [1, 1, 2]
  const getNum = function (n) {
    if (cache[n]) return cache[n]
    let sum = 0
    for (let i = 0; i < n; i++) {
      let left = i
      let right = n - i - 1
      sum += (cache[left] || getNum(left)) * (cache[right] || getNum(right))
    }
    cache[n] = sum
    return sum
  }
  return getNum(n)
};

console.log(numTrees(3))
console.log(numTrees(10))