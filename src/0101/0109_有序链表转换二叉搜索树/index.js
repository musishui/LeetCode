/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const { TreeNode } = require('../../../helper')
var sortedListToBST = function (head) {
  let len = 0
  let node = head
  while (node) {
    len++
    node = node.next
  }
  return helper(head, len)
  function helper (head, len) {
    if(!len) return null
    let mid = Math.floor(len / 2)
    let node = head
    for (let i = 0; i < mid; i++) {
      node = node.next
    }
    let treeNode = new TreeNode(node.val)
    if (mid > 0) {
      treeNode.left = helper(head, mid )
    }
    if (mid < len - 1) {
      treeNode.right = helper(node.next, len - mid-1 )
    }
    return treeNode
  }
};

module.exports = sortedListToBST