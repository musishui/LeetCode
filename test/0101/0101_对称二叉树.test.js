const expect = require('chai').expect
const TreeNode = require('../../helper').TreeNode
var fun = require('../../src/0101/0101_对称二叉树')
describe('0101_对称二叉树', () => {
  it('用例一', () => {
    const input = TreeNode.creat([1,2,2,3,4,4,3])
    const output = true
    expect(fun(input)).to.be.equal(output)
  })
  it('用例二', () => {
    const input = TreeNode.creat([1,2,2,null,3,null,3])
    const output = false
    expect(fun(input)).to.be.equal(output)
  })
})