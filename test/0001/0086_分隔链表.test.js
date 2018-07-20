const expect = require('chai').expect
const buildListNode = require('../../helper').buildListNode

var fun = require('../../src/0001/0086_分隔链表')
describe('0086_分隔链表', () => {
  it('用例一', () => {
    const input = [1, 4, 3, 2, 5, 2]
    const input1 = 3
    const output = [1, 2, 2, 4, 3, 5]
    expect(fun(buildListNode(input), input1)).to.deep.equal(buildListNode(output))
  })
})