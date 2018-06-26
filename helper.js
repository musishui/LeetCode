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
  buildIntervals
}