const expect = require('chai').expect
const buildListNode = require('../../helper').buildListNode
var fun = require('../../src/0001/0024_两两交换链表中的节点')
describe('0024_两两交换链表中的节点', () => {
  it('用例一', () => {
    const input = buildListNode([1, 2, 3, 4])
    const output = buildListNode([2, 1, 4, 3])
    expect(fun(input)).to.deep.equal(output)
  })
  it('用例二', () => {
    const input = buildListNode([1, 2, 3])
    const output = buildListNode([2, 1, 3])
    expect(fun(input)).to.deep.equal(output)
  })
  it('用例三', () => {
    const input = buildListNode([1, 2, 3, 4, 5])
    const output = buildListNode([2, 1, 4, 3, 5])
    expect(fun(input)).to.deep.equal(output)
  })
  it('用例四', () => {
    const input = buildListNode([1, 2])
    const output = buildListNode([2, 1])
    expect(fun(input)).to.deep.equal(output)
  })
})