const expect = require('chai').expect
const TreeNode = require('../../helper').TreeNode
var fun = require('../../src/0101/0102_二叉树的层次遍历')
describe('0102_二叉树的层次遍历', () => {
  it('用例一', () => {
    const input = TreeNode.creat([3,9,20,null,null,15,7])
    const output = [
      [3],
      [9,20],
      [15,7]
    ]
    expect(fun(input)).to.deep.equal(output)
  })
})