const expect = require('chai').expect
const TreeNode = require('../../helper').TreeNode

var fun = require('../../src/0101/0129_求根到叶子节点数字之和')
describe('0129_求根到叶子节点数字之和', () => {
  it('用例一', () => {
    const input = TreeNode.creat([1,2,3])
    const output = 25
    expect(fun(input)).to.be.equal(output)
  })
  it('用例二', () => {
    const input = TreeNode.creat([4,9,0,5,1])
    const output = 1026
    expect(fun(input)).to.be.equal(output)
  })
})