/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const buildListNode = require('../../helper').buildListNode

var rotateRight = function (head, k) {
  if (!k || !head) return head
  let node = head
  let len = 1
  let result = null
  while (node.next) {
    len += 1
    node = node.next
  }
  node.next = head
  k = k % len
  for (let i = 0; i < len - k; i++) {
    node = node.next
  }
  result = node.next
  node.next = null
  return result
};
const input = buildListNode([0, 1, 2])
const input1 = 4
rotateRight(input, input1)
module.exports = rotateRight