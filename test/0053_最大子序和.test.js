const expect = require('chai').expect
var fun = require('../src/0050_Pow(x, n)')
describe('0050_Pow(x, n)', () => {
  it('用例一', () => {
    const input = 2
    const input1 = 10
    const output = 1024
    expect(fun(input, input1)).to.be.equal(output)
  })
  it('用例二', () => {
    const input = 2.1
    const input1 = 3
    const output = 9.261
    expect(fun(input, input1)).to.be.equal(output)
  })
  
  it('用例三', () => {
    const input = 2
    const input1 = -2
    const output = 0.25
    expect(fun(input, input1)).to.be.equal(output)
  })
})