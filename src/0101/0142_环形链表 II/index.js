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
var detectCycle = function (head) {
  let oneNode = head && head.next
  let twoNode = oneNode && oneNode.next
  while (twoNode && oneNode !== twoNode) {
    twoNode = twoNode.next && twoNode.next.next
    oneNode = oneNode.next
  }
  if (twoNode) {
    oneNode = head
    while (oneNode !== twoNode) {
      oneNode = oneNode.next
      twoNode = twoNode.next
    }
  }
  return twoNode
};

module.exports = detectCycle