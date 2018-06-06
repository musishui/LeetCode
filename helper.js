function ListNode(val) {
  this.val = val;
  this.next = null;
}

function buildListNode(arr) {
  let header = new ListNode(arr[0])
  let node = header
  for (let i = 1; i < arr.length; i++) {
    node.next = new ListNode(arr[i])
    node = node.next
  }
  return header
}

module.exports = {
  ListNode,
  buildListNode
}