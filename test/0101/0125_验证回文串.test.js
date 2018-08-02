const expect = require('chai').expect

var fun = require('../../src/0101/0125_验证回文串')
describe('0125_验证回文串', () => {
  it('用例一', () => {
    const input = "A man, a plan, a canal: Panama"
    const output = true
    expect(fun(input)).to.be.equal(output)
  })
  it('用例二', () => {
    const input = "race a car"
    const output = false
    expect(fun(input)).to.be.equal(output)
  })
})