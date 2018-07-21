const expect = require('chai').expect
const TreeNode = require('../../helper').TreeNode
const fun = require('../../src/0101/0105_从前序与中序遍历序列构造二叉树')
describe('0105_从前序与中序遍历序列构造二叉树', () => {
  it('用例一', () => {
    const input =[[3, 9, 20, 15, 7], [9, 3, 15, 20, 7]]
    const output = TreeNode.creat([3, 9, 20, null, null, 15, 7])
    expect(fun(...input)).to.deep.equal(output)
  })
})