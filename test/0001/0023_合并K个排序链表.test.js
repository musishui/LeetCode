const expect = require('chai').expect
const buildListNode = require('../../helper').buildListNode
var fun = require('../../src/0001/0023_合并K个排序链表')
describe('0023_合并K个排序链表', () => {
  it('用例一', () => {
    const input = buildListNode([1, 2, 4])
    const input1 = buildListNode([1, 3, 4])
    const output = buildListNode([1, 1, 2, 3, 4, 4])
    expect(fun([input, input1])).to.deep.equal(output)
  })

  it('用例二', () => {
    const input = buildListNode([1, 4, 5])
    const input1 = buildListNode([1, 3, 4])
    const input2 = buildListNode([2, 6])
    const output = buildListNode([1, 1, 2, 3, 4, 4, 5, 6])
    expect(fun([input, input1, input2])).to.deep.equal(output)
  })
})