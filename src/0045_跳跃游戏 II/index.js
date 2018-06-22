/**
 * @param {number[]} nums
 * @return {number}
 */
// var jump = function (nums) {
//   let len = nums.length
//   if (len <= 1) return 0
//   let i = 0
//   let count = 0
//   for (let max = 0; max < len - 1; count++){
//     let n = 0
//     for (; i <= max; i++){
//       n = Math.max(n, i + nums[i])
//       if (n >= len - 1) {
//         break
//       }
//     }
//     max = n
//   }
//   return count
// };

var jump = function (nums) {
  var num = 0;
  var end = 0;
  var len = 0;
  for (var i = 0; i < nums.length - 1; i++) {
    len = Math.max(len, i + nums[i]);
    if (len >= nums.length - 1) return num + 1;
    if (i === end) {
      num++;
      end = len;
    }
  }
  return len >= nums.length - 1 ? num : -1;
};

module.exports = jump