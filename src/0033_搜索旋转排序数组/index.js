/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function (nums, target) {
//   return splitArray(nums, target, 0, nums.length-1)
// };

// function splitArray(nums, target, left, right) {
//   if (left > right) return -1
//   let mid = Math.floor((left + right) / 2)
//   if (nums[mid] === target) return mid
//   if (nums[left] < nums[mid]) {
//     if (target >= nums[left] && target <= nums[mid - 1]) {
//       return indexOf(nums, target, left, mid - 1)
//     } else {
//       return splitArray(nums, target, mid + 1, right)
//     }
//   } else {
//     if (target >= nums[mid + 1] && target <= nums[right]) {
//       return indexOf(nums, target, mid + 1, right)
//     } else {
//       return splitArray(nums, target, left, mid - 1)
//     }
//   }
// }

// function indexOf(nums, target, left, right) {
//   if (left > right) return -1
//   if (nums[left] === target) return left
//   if (nums[right] === target) return right

//   while (left <= right) {

//     let mid = Math.floor((left + right) / 2)
//     if (nums[mid] === target) return mid
//     else if (nums[mid] > target) {
//       right = mid - 1
//     } else {
//       left = mid + 1
//     }
//   }
//   return -1
// }

var search = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  let mid = 0
  let l, r
  while (left <= right) {
    mid = Math.ceil((left + right) / 2)
    if (nums[mid] === target) return mid
    if (nums[left] > nums[mid]) {
      if (target >= nums[mid] && target <= nums[right]) {
        l = mid
        r = right
        break
      }
      right = mid - 1
    } else {
      if (target >= nums[left] && target <= nums[mid]) {
        l = left
        r = mid
        break
      }
      left = mid + 1
    }
  }
  if (l == null) return -1
  while (l <= r) {
    let m = Math.ceil((l + r) / 2)
    if (nums[m] === target) return m
    else if (nums[m] > target) {
      r = m - 1
    } else {
      l = m + 1
    }
  }
  return -1
};

module.exports = search