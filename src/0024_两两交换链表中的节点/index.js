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
var swapPairs = function (head) {
  if(!head || !head.next) return head
  let newHead = {next:head}
  let currNode = newHead
  while (currNode && currNode.next && currNode.next.next) {
    let prev = currNode.next
    let next = prev.next

    prev.next = next.next
    next.next = prev
    currNode.next = next
    currNode = prev

  }
  return newHead.next

};

module.exports = swapPairs