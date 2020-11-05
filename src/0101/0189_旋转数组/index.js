/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const len = nums.length;
  if (len < 2 || k === 0) return;
  let count = 0;
  let loop = 0;
  let temp = nums[0];
  let index = 0;
  while (count < len) {
    let next = (index + k) % len;
    let val = nums[next];
    nums[next] = temp;
    count++;
    if (next === loop) {
      loop++;
      next++;
      val = nums[next];
    }
    index = next;
    temp = val;
  }
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let k = 3;
rotate(arr, k);
console.log(arr);
