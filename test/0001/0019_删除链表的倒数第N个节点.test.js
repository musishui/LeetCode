const expect = require('chai').expect
const buildListNode = require('../../helper').buildListNode
var removeNthFromEnd = require('../../src/0001/0019_删除链表的倒数第N个节点')
describe('0019_删除链表的倒数第N个节点', () => {
  it('用例一', () => {
    const input = [1, 2, 3, 4, 5]
    const n = 2
    const output = [1, 2, 3, 5]
    expect(removeNthFromEnd(buildListNode(input), n)).to.deep.equal(buildListNode(output))
  })
})