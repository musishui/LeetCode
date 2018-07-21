const expect = require('chai').expect
const TreeNode = require('../../helper').TreeNode
const fun = require('../../src/0101/0106_从中序与后序遍历序列构造二叉树')
describe('0106_从中序与后序遍历序列构造二叉树', () => {
  it('用例一', () => {
    const input = [
      [9, 3, 15, 20, 7],
      [9, 15, 7, 20, 3]
    ]
    const output = TreeNode.creat([3, 9, 20, null, null, 15, 7])
    expect(fun(...input)).to.deep.equal(output)
  })
})