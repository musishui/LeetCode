const expect = require('chai').expect
const TreeNode = require('../helper').TreeNode
var fun = require('../src/0100_相同的树')
describe('0100_相同的树', () => {
  it('用例一', () => {
    const input = TreeNode.creat([2, 1, 3])
    const input1 = TreeNode.creat([2, 1, 3])
    const output = true
    expect(fun(input,input1)).to.be.equal(output)
  })
  it('用例二', () => {
    const input = TreeNode.creat([2, 1])
    const input1 = TreeNode.creat([2, null, 1])
    const output = false
    expect(fun(input,input1)).to.be.equal(output)
  })
})