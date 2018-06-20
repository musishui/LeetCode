const expect = require('chai').expect
var fun = require('../src/0069_x 的平方根')
describe('0069_x 的平方根', () => {
  it('用例一', () => {
    const input = 4
    const output = 2
    expect(fun(input)).to.be.equal(output)
  })
  it('用例二', () => {
    const input = 8
    const output = 2
    expect(fun(input)).to.be.equal(output)
  })
  it('用例三', () => {
    const input = 85264
    const output = 292
    expect(fun(input)).to.be.equal(output)
  })
})