function ListNode(val) {
  this.val = val;
  this.next = null;
}

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
  toString() {
    return `start: ${this.start}, end:${this.end}`
  }
}

class TreeNode{
  constructor(val) {
    this.val = val
    this.left = this.right = null
  }

  static creat (arr) {
    if(!arr.length)return null
    let nodes = [new TreeNode(arr[0])]
    let n=0
    for (let i = 1; i < arr.length; i++){
      if (arr[i] != null) {
        nodes[n].left = new TreeNode(arr[i])
        nodes.push(nodes[n].left)
      }
      i++
      if (arr[i] != null) {
        nodes[n].right = new TreeNode(arr[i])
        nodes.push(nodes[n].right)
      }
      n++
    }
    return nodes[0]
  }
}

function buildListNode(arr) {
  let header = {
    next: null
  }
  let node = header
  for (let i = 0; i < arr.length; i++) {
    node.next = new ListNode(arr[i])
    node = node.next
  }
  return header.next
}

function buildIntervals(arrs) {
  return arrs.map(item => buildInterval(item))
}

function buildInterval(arr) {
  return new Interval(arr[0], arr[1])
}

module.exports = {
  ListNode,
  buildListNode,
  Interval,
  buildInterval,
  buildIntervals,
  TreeNode
}