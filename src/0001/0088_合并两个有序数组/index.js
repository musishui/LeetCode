/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let l = m + n
  m--;
  n--
  while (l--) {
    if (n < 0) break
    if (m < 0 || nums1[m] < nums2[n]) {
      nums1[l] = nums2[n]
      n--
    } else {
      nums1[l] = nums1[m]
      m--
    }
  }
};

module.exports = merge