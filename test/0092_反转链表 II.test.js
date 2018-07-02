const expect = require('chai').expect
const buildListNode = require('../helper').buildListNode
var fun = require('../src/0092_反转链表 II')
describe('0092_反转链表 II', () => {
  it('用例一', () => {
    const input = buildListNode([1, 2, 3, 4, 5, 6])
    const input1 = 2
    const input2 = 5
    const output = buildListNode([1,5,4,3,2,6])
    expect(fun(input, input1, input2)).to.deep.equal(output)
  })
})