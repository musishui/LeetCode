/**
 * @param {number} n
 * @return {number[]}
 */
// var grayCode = function (n) {
//   let nums = [0]
//   let pows = []
//   let flags = [true]
//   let len = Math.pow(2,n)
//   for (i = 0; i < n; i++) {
//     pows.push(Math.pow(2, i))
//   }

//   next(0)
//   return nums

//   function next(num) {
//     if (nums.length === len) return true
//     for (let i = 0; i < n; i++) {
//       let m = num ^ pows[i]
//       if (!flags[m]) {
//         flags[m] = true
//         nums.push(m)
//         if (next(m)) {
//           return true
//         } else {
//           nums.pop()
//           flags[m] = false
//         }
//       }
//     }
//     return false
//   }
// };

var grayCode = function(n) {
  var result = [];
  for(var i=0;i<1<<n;i++) {
      result.push(i^i>>1);
  }
  return result;
};
module.exports = grayCode