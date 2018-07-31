const expect = require('chai').expect

var fun = require('../../src/0101/0122_买卖股票的最佳时机 II')
describe('0122_买卖股票的最佳时机 II', () => {
  it('用例一', () => {
    const input = [7,1,5,3,6,4]
    const output = 7
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