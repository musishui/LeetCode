const expect = require('chai').expect
const TreeNode = require('../../helper').TreeNode
var fun = require('../../src/0101/0112_路径总和')
describe('0112_路径总和', () => {
  it('用例一', () => {
    const input = TreeNode.creat([1, 2])
    const input1 = 2
    const output = false
    expect(fun(input, input1)).to.be.equal(output)
  })
  it('用例二', () => {
    const input = TreeNode.creat([5,4,8,11,null,13,4,7,2,null,null,null,1])
    const input1 = 22
    const output = true
    expect(fun(input, input1)).to.be.equal(output)
  })
  
})