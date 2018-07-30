const expect = require('chai').expect
const TreeNode = require('../../helper').TreeNode
var fun = require('../../src/0101/0114_二叉树展开为链表')
describe('0114_二叉树展开为链表', () => {
  it('用例一', () => {
    const input = TreeNode.creat([1, 2, 5,3,4,null,6])
    const output = TreeNode.creat([1, null, 2, null, 3, null, 4, null, 5, null, 6])
    fun(input)
    expect(input).to.deep.equal(output)
  })
})