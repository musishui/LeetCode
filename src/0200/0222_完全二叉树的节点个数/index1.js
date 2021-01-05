/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const { TreeNode } = require("../../../helper");

/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  if (!root) return 0
  const exist = (n, level, node) => {
    let bits = 1 << (level - 1)
    while (node && bits > 0) {
      if (!(bits & n)) {
        node = node.left
      } else {
        node = node.right
      }
      bits >>= 1
    }
    return node !== null
  }
  let level = 0
  let node = root
  while (node.left) {
    level++
    node = node.left
  }
  let min = 1 << level
  let max = (1 << (level + 1)) - 1

  while (min < max) {
    let mid = ~~((min + max + 1) / 2)
    if (exist(mid, level, root)) {
      min = mid
    } else {
      max = mid - 1
    }
  }
  return min
};

let root = TreeNode.creat([1, 2, 3, 4, 5, 6])
console.log(countNodes(root))