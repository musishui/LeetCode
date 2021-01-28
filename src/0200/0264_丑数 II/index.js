/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  let nums = [1]
  let indexs = [0, 0, 0]
  let base = [2, 3, 5]
  let ns = [2, 3, 5]
  for (let i = 1; i < n; i++) {
    let min = Math.min(...ns)
    nums.push(min)
    let index = ns.indexOf(min)
    while (true) {
      indexs[index] += 1
      let product = nums[indexs[index]] * base[index]
      if (!ns.includes(product)) {
        ns[index] = product
        break
      }
    }
  }
  return nums[n - 1]
};

console.log(nthUglyNumber(100))