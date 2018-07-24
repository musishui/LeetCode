const expect = require('chai').expect
const { TreeNode, buildListNode } = require('../../helper')
var fun = require('../../src/0101/0109_有序链表转换二叉搜索树')
describe('0109_有序链表转换二叉搜索树', () => {
  it('用例一', () => {
    const input = buildListNode([-10, -3, 0, 5, 9])
    const output = TreeNode.creat([0, -3, 9, -10, null, 5, null])
    expect(fun(input)).to.deep.equal(output)
  })
})