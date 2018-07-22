const expect = require('chai').expect
const TreeNode = require('../../helper').TreeNode
var fun = require('../../src/0101/0108_将有序数组转换为二叉搜索树')
describe('0108_将有序数组转换为二叉搜索树', () => {
  it('用例一', () => {
    const input = [-10, -3, 0, 5, 9]
    const output = TreeNode.creat([0, -3, 9, -10, null, 5, null])
    expect(fun(input)).to.deep.equal(output)
  })
})