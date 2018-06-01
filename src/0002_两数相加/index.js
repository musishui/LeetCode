/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


function ListNode(val) {
  this.val = val;
  this.next = null;
}
var addTwoNumbers = function (l1, l2) {
  let n1 = l1
  let n2 = l2
  let ln
  let root
  let bit = 0
  while (n1 || n2 || bit) {
    n1 || (n1 = new ListNode(0))
    n2 || (n2 = new ListNode(0))

    let sum = n1.val + n2.val + bit
    bit = sum > 9 ? 1 : 0
    bit && (sum = sum - 10)
    let node = new ListNode(sum)
    if (ln) {
      ln.next = node
    } else {
      root = node
    }
    ln = node

    n1 = n1.next
    n2 = n2.next
  }
  return root
};

module.exports = {
  addTwoNumbers,
  ListNode
}