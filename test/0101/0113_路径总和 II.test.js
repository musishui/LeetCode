const expect = require('chai').expect
const TreeNode = require('../../helper').TreeNode
var fun = require('../../src/0101/0113_路径总和 II')
describe('0113_路径总和 II', () => {
  it('用例一', () => {
    const input = TreeNode.creat([1, 2])
    const input1 = 2
    const output = []
    expect(fun(input, input1)).to.deep.equal(output)
  })
  it('用例二', () => {
    const input = TreeNode.creat([5,4,8,11,null,13,4,7,2,null,null,5,1])
    const input1 = 22
    const output = [
      [5,4,11,2],
      [5,8,4,5]
   ]
    expect(fun(input, input1)).to.deep.equal(output)
  })
  
})