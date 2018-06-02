const expect = require('chai').expect
const { addTwoNumbers, ListNode } = require('../src/0002_两数相加')
let n1 = new ListNode(3)
let n2 = new ListNode(4)
let n3 = new ListNode(2)
n2.next = n1
n3.next = n2

let n4 = new ListNode(4)
let n5 = new ListNode(6)
let n6 = new ListNode(5)
n5.next = n4
n6.next = n5

let n7 = new ListNode(8)
let n8 = new ListNode(0)
let n9 = new ListNode(7)
n8.next = n7
n9.next = n8
describe('0002_两数相加', () => {
  it('(2 -> 4 -> 3) + (5 -> 6 -> 4)', () => {
    expect(addTwoNumbers(n3,n6)).to.deep.equal(n9)
  })
})