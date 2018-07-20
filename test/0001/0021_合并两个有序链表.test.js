const expect = require('chai').expect
const buildListNode = require('../../helper').buildListNode
var fun = require('../../src/0001/0021_合并两个有序链表')
describe('0021_合并两个有序链表', () => {
  it('用例一', () => {
    const input = buildListNode([1,2,4])
    const input1 = buildListNode([1,3,4])
    const output=buildListNode([1,1,2,3,4,4])
    expect(fun(input,input1)).to.deep.equal(output)
  })
})