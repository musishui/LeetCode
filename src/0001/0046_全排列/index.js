/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  // // 解法一
  // let res = [[nums[0]]]
  // for (let i = 1; i < nums.length; i++){
  //   let len = res.length
  //   for (let l = len; l--;){
  //     for (let n = i + 1; n--;){
  //       let arr = [...res[l]]
  //       arr.splice(n,0,nums[i])
  //       res[(i+1)*l+n]=arr
  //     }
  //   }
  // }
  // return res

  // // 解法二
  // return fun(nums, nums.length - 1)

  // function fun(nums, index) {
  //   let num = nums[index]
  //   if (index === 0) {
  //     return [
  //       [num]
  //     ]
  //   } else {
  //     let arr = fun(nums, index - 1)
  //     let res = []
  //     for (let i = 0; i <= index; i++) {
  //       arr.forEach(item => {
  //         let tmp = [...item]
  //         tmp.splice(i, 0, num)
  //         res.push(tmp)
  //       })
  //     }
  //     return res
  //   }
  // }
  function swap(nums, i, j) {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }

  function permuteRec(start, nums, result) {
    let len = nums.length
    if (start >= len) {
      result.push(nums)
      return
    }
    for (let i = start; i < len; i++) {
      if (i > start && nums[i] === nums[start]) continue
      start !== i && swap(nums, start, i)
      permuteRec(start + 1, [...nums], result)
    }
  }

  let result = []
  permuteRec(0, nums, result)
  return result

};
console.log(JSON.stringify(permute([1, 2, 3])))
module.exports = permute