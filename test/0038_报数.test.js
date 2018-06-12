const expect = require('chai').expect
var fun = require('../src/0038_报数')
describe('0038_报数', () => {
  it('用例一', () => {
    const input = 6
    const output = '312211'
    expect(fun(input)).to.be.equal(output)
  })
  it('用例二', () => {
    const input = 7
    const output = '13112221'
    expect(fun(input)).to.be.equal(output)
  })
  it('用例三', () => {
    const input = 8
    const output = '1113213211'
    expect(fun(input)).to.be.equal(output)
  })
})