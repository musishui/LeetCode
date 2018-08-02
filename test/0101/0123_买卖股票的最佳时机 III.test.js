const expect = require('chai').expect

var fun = require('../../src/0101/0123_买卖股票的最佳时机 III')
describe('0123_买卖股票的最佳时机 III', () => {
  it('用例一', () => {
    const input = [3,3,5,0,0,3,1,4]
    const output = 6
    expect(fun(input)).to.be.equal(output)
  })
  it('用例二', () => {
    const input = [1,2,3,4,5]
    const output = 4
    expect(fun(input)).to.be.equal(output)
  })
  it('用例三', () => {
    const input = [7,6,4,3,1]
    const output = 0
    expect(fun(input)).to.be.equal(output)
  })
})