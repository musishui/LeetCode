/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let list1 = {next:null}
  let list2 = {next:null}
  let node1 = list1
  let node2 = list2
  let node = head
  while (node) {
    if (node.val < x) {
      node1.next = node
      node1 = node1.next
    } else {
      node2.next = node
      node2 = node2.next
    }
    node = node.next
  }
  node1.next = list2.next
  node2.next = null
  return list1.next
};

module.exports = partition