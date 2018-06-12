const expect = require('chai').expect
var fun = require('../src/0043_字符串相乘')
describe('0043_字符串相乘', () => {
  it('用例一', () => {
    const input = '2'
    const input1 = '3'
    const output = '6'
    expect(fun(input, input1)).to.be.equal(output)
  })
  it('用例二', () => {
    const input = '123'
    const input1 = '456'
    const output = '56088'
    expect(fun(input, input1)).to.be.equal(output)
  })
  it('用例三', () => {
    const input = '9'
    const input1 = '9'
    const output = '81'
    expect(fun(input, input1)).to.be.equal(output)
  })
})