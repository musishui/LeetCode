/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let res = [[nums[0]]]
  for (let i = 1; i < nums.length; i++){
    let len = res.length
    for (let l = len; l--;){
      for (let n = i + 1; n--;){
        let arr = [...res[l]]
        arr.splice(n,0,nums[i])
        res[(i+1)*l+n]=arr
      }
    }
  }
  return res
};

module.exports = permute