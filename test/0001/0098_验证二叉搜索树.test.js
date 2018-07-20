const expect = require('chai').expect
const TreeNode = require('../../helper').TreeNode
var fun = require('../../src/0001/0098_验证二叉搜索树')
describe('0098_验证二叉搜索树', () => {
  it('用例一', () => {
    const input = TreeNode.creat([2, 1, 3])
    const output = true
    expect(fun(input)).to.be.equal(output)
  })
  it('用例二', () => {
    const input = TreeNode.creat([5,1,4,null,null,3,6])
    const output = false
    expect(fun(input)).to.be.equal(output)
  })
})