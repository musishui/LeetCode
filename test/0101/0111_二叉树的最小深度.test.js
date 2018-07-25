const expect = require('chai').expect
const TreeNode = require('../../helper').TreeNode
var fun = require('../../src/0101/0111_二叉树的最小深度')
describe('0111_二叉树的最小深度', () => {
  it('用例一', () => {
    const input = TreeNode.creat([3, 9, 20, null, null, 15, 7])
    const output = 2
    expect(fun(input)).to.be.equal(output)
  })
  it('用例二', () => {
    const input = TreeNode.creat([1, 2])
    const output = 2
    expect(fun(input)).to.be.equal(output)
  })
})