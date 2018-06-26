const expect = require('chai').expect
const buildListNode = require('../helper').buildListNode

var fun = require('../src/0082_删除排序链表中的重复元素 II')
describe('0082_删除排序链表中的重复元素 II', () => {
  it('用例一', () => {
    const input = [1, 1, 2]
    const output = [ 2]
    expect(fun(buildListNode(input))).to.deep.equal(buildListNode(output))
  })
  it('用例二', () => {
    const input = [1, 1, 2, 3, 3]
    const output = [2]
    expect(fun(buildListNode(input))).to.deep.equal(buildListNode(output))
  })
  it('用例三', () => {
    const input = [1, 1, 1]
    const output = []
    expect(fun(buildListNode(input))).to.deep.equal(buildListNode(output))
  })
})