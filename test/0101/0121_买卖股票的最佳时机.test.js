const expect = require('chai').expect

var fun = require('../../src/0101/0121_买卖股票的最佳时机')
describe('0121_买卖股票的最佳时机', () => {
  it('用例一', () => {
    const input = [7,1,5,3,6,4]
    const output = 5
    expect(fun(input)).to.be.equal(output)
  })
  it('用例二', () => {
    const input = [7,6,4,3,1]
    const output = 0
    expect(fun(input)).to.be.equal(output)
  })
})