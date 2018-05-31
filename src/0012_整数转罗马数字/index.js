/**
 * @param {number} num
 * @return {string}
 */
let obj = {
  '1': 'I',
  '4': 'IV',
  '5': 'V',
  '9': 'IX',
  '10': 'X',
  '40': 'XL',
  '50': 'L',
  '90': 'XC',
  '100': 'C',
  '400': 'CD',
  '500': 'D',
  '900': 'CM',
  '1000': 'M'
}
const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
var intToRoman = function (num) {
  if (num > 3999 || num < 1) return
  let idx = 0
  let chars = []
  while (num) {
    idx = nums.findIndex(val => val <= num)
    let n = num - nums[idx]
    if (n >= 0) {
      chars.push(obj[nums[idx]])
      num = n
    } else {
      idx++
    }
  }
  return chars.join('')
};

//console.log(intToRoman(1994))
module.exports = intToRoman