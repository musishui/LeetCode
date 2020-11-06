/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const { buildListNode } = require('../../../helper')

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
  if (!head) return head
  let newHead = { val: 0, next: head }
  let node = head.next
  head.next = null
  let curNode = head
  while (node) {
    curNode = curNode.val < node.val ? curNode : newHead
    while (curNode.next) {
      if (curNode.next.val > node.val) {
        break
      }
      curNode = curNode.next
    }
    let next = node.next
    node.next = curNode.next
    curNode.next = node
    node = next
    curNode = node
  }
  return newHead.next
};

let list = buildListNode([4, 2, 1, 3])
let h = insertionSortList(list)

console.log(h)