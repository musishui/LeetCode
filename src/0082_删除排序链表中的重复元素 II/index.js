/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteDuplicates = function (head) {
  if(!head) return head
  let root = {next:null}
  let node = root
  let currNode = head
  let prevVal = head.val - 1
  while (currNode) {
    if (currNode.val !== prevVal && (!currNode.next || currNode.val !== currNode.next.val)) {
      node.next = currNode
      node = currNode
    }
    prevVal = currNode.val
    currNode = currNode.next
  }
  if (node) node.next = null
  return root.next
};

module.exports = deleteDuplicates