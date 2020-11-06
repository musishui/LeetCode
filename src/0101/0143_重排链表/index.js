/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head || !head.next) return head;
  let node = head;
  let nodes = [];
  while (node) {
    nodes.push(node);
    node = node.next;
  }
  let left = 1,
    right = nodes.length - 1;
  let currNode = head;
  while (left < right) {
    currNode = currNode.next = nodes[right--];
    currNode = currNode.next = nodes[left++];
  }
  
  if (left === right) {
    currNode = currNode.next;
  }

  currNode.next = null;
};

function buildList(nums) {
  let head, node;
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      head = node = { val: nums[i] };
    } else {
      node.next = { val: nums[i] };
      node = node.next;
    }
  }
  return head;
}
let ls = buildList([1, 2, 3, 4, 5, 6, 7]);
reorderList(ls);
console.log(JSON.stringify(ls));
