const expect = require('chai').expect
const TreeNode = require('../../helper').TreeNode
const fun = require('../../src/0101/0104_二叉树的最大深度')
describe('0104_二叉树的最大深度', () => {
  it('用例一', () => {
    const input = TreeNode.creat([3, 9, 20, null, null, 15, 7])
    const output = 3
    expect(fun(input)).to.be.equal(output)
  })
})