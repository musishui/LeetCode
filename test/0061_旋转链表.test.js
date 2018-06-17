const expect = require('chai').expect
const buildListNode = require('../helper').buildListNode
var fun = require('../src/0061_旋转链表')
describe('0024_两两交换链表中的节点', () => {
  it('用例一', () => {
    const input = buildListNode([1, 2, 3, 4, 5])
    const input1 = 2
    const output = buildListNode([4, 5, 1, 2, 3])
    expect(fun(input, input1)).to.deep.equal(output)
  })
  it('用例二', () => {
    const input = buildListNode([0, 1, 2])
    const input1 = 4
    const output = buildListNode([2, 0, 1])
    expect(fun(input, input1)).to.deep.equal(output)
  })
})