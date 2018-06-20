const expect = require('chai').expect
const buildListNode = require('../helper').buildListNode

var fun = require('../src/0083_删除排序链表中的重复元素')
describe('0083_删除排序链表中的重复元素', () => {
  it('用例一', () => {
    const input = [1, 1, 2]
    const output = [1, 2]
    expect(fun(buildListNode(input))).to.deep.equal(buildListNode(output))
  })
  it('用例二', () => {
    const input = [1, 1, 2, 3, 3]
    const output = [1, 2, 3]
    expect(fun(buildListNode(input))).to.deep.equal(buildListNode(output))
  })
  it('用例三', () => {
    const input = [1, 1, 1]
    const output = [1]
    expect(fun(buildListNode(input))).to.deep.equal(buildListNode(output))
  })
})