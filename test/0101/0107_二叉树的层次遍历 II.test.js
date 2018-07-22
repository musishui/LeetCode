const expect = require('chai').expect
const TreeNode = require('../../helper').TreeNode
var fun = require('../../src/0101/0107_二叉树的层次遍历 II')
describe('0107_二叉树的层次遍历 II', () => {
  it('用例一', () => {
    const input = TreeNode.creat([3, 9, 20, null, null, 15, 7])
    const output = [
      [15, 7],
      [9, 20],
      [3]
    ]
    expect(fun(input)).to.deep.equal(output)
  })
})