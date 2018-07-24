const expect = require('chai').expect
const TreeNode = require('../../helper').TreeNode
var fun = require('../../src/0101/0110_平衡二叉树')
describe('0110_平衡二叉树', () => {
  it('用例一', () => {
    const input = TreeNode.creat([3, 9, 20, null, null, 15, 7])
    const output = true
    expect(fun(input)).to.be.equal(output)
  })
  it('用例二', () => {
    const input = TreeNode.creat([1, 2, 2, 3, 3, null, null, 4, 4])
    const output = false
    expect(fun(input)).to.be.equal(output)
  })
})