/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let init = 0
  nums.forEach(d=>{
      init ^= d
  })
  return init
};

module.exports = singleNumber