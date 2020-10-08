const expect = require('chai').expect

function buildCycleList(nums, cysIndex) {
  let nodes = []
  nums.forEach((num, i) => {
    let node = {
      val: num
    }
    nodes.push(node)
    if (i > 0) {
      nodes[i - 1].next = node
    }
  })
  if (cysIndex >= 0) {
    nodes[nodes.length - 1].next = nodes[cysIndex]
  }
  return nodes
}

var fun = require('../../src/0101/0142_环形链表 II')
describe('0142_环形链表 II', () => {
  it('用例一', () => {
    let nodes = buildCycleList([1,2,3,4,5], 1)
    let input1 = nodes[0]
    let output = nodes[1]
    expect(fun(input1)).to.be.equal(output)
  })
  it('用例二', () => {
    let nodes = buildCycleList([1,2,3,4,5,6], 1)
    let input1 = nodes[0]
    let output = nodes[1]
    expect(fun(input1)).to.be.equal(output)
  })
  it('用例三', () => {
    let nodes = buildCycleList([1,2,3,4,5], 2)
    let input1 = nodes[0]
    let output = nodes[2]
    expect(fun(input1)).to.be.equal(output)
  })
  it('用例四', () => {
    let nodes = buildCycleList([1,2,3,4,5,6], 2)
    let input1 = nodes[0]
    let output = nodes[2]
    expect(fun(input1)).to.be.equal(output)
  })
})