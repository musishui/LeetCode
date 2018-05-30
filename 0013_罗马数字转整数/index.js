/**
 * @param {string} s
 * @return {number}
 */
let obj = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900
}
var romanToInt = function (s) {
  let i = 0
  let n = 0
  let len = s.length
  let k1 = s.charAt(0)
  while (i < len) {
    let k2 = s.charAt(i + 1)
    let value = obj[k1 + k2]
    if (value) {
      i += 2
      k1 = s.charAt(i)
    } else {
      value = obj[k1]
      i += 1
      k1 = k2
    }
    n += value
  }
  return n
};



// /**
//  * @param {string} s
//  * @return {number}
//  */
// var romanToInt = function(s) {
//  let i = 0
//  let n = 0
//  let len = s.length
//  while (i < len) {
//    let k1 = s.charAt(i)
//    let k2 = k1 + s.charAt(i + 1) || ''
//    let value = obj[k2]
//    if (value) {
//      i += 2
//    } else {
//      value = obj[k1]
//      i += 1
//    }
//    n += value
//  }
//  return n   
// };