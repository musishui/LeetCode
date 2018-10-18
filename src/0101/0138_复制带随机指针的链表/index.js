/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function (head) {
  if (!head) return null

  const getNode = (() => {
    let nodeMap = new Map()
    return (label) => {
      let node = nodeMap.get(label)
      if (!node) {
        node = new RandomListNode(label)
        nodeMap.set(label, node)
      }
      return node
    }
  })()

  let newHead = new RandomListNode()
  let currNode = newHead
  while (head) {
    let newNode = getNode(head.label)
    if (head.random) {
      newNode.random = getNode(head.random.label)
    }
    currNode.next = newNode
    currNode = newNode
    head = head.next
  }

  return newHead.next
};

function RandomListNode(label) {
  this.label = label;
  this.next = this.random = null;
}
