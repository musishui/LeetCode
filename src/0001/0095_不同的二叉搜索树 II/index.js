/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const { TreeNode } = require("../../../helper");

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  let cache = {
    '1_1': [new TreeNode(1)],
    '1_2': [
      new TreeNode(1, undefined, new TreeNode(2)),
      new TreeNode(2, new TreeNode(1)),
    ]
  }

  const _generateTrees = (start, end) => {
    let key = `${start}_${end}`
    if (cache[key]) return cache[key]

    let trees = []
    if (start === end) {
      trees.push(new TreeNode(start))
    } else {
      for (let root = start; root <= end; root++) {
        let leftEnd = root - 1
        let leftTrees = start <= leftEnd ? _generateTrees(start, leftEnd) : [undefined]
        let rightStart = root + 1
        let rightTrees = rightStart <= end ? _generateTrees(rightStart, end) : [undefined]
        for (let l = 0; l < leftTrees.length; l++) {
          for (let r = 0; r < rightTrees.length; r++) {
            trees.push(new TreeNode(root, leftTrees[l], rightTrees[r]))
          }
        }
      }
    }
    cache[key] = trees
    return trees

  }
  
  return _generateTrees(1, n)
};

module.exports = generateTrees