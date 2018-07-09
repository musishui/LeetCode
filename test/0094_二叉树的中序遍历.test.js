const expect = require('chai').expect
const TreeNode = require('../helper').TreeNode
var fun = require('../src/0094_二叉树的中序遍历')
describe('0094_二叉树的中序遍历', () => {
  it('用例一', () => {
    const input = TreeNode.creat([1, 2])
    const output = [2,1]
    expect(fun(input)).to.deep.equal(output)
  })
  it('用例二', () => {
    const input = TreeNode.creat([1,null,2,3])
    const output = [1,3,2]
    expect(fun(input)).to.deep.equal(output)
  })
})