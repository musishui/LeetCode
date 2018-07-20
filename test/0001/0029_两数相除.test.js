const expect = require('chai').expect
var fun = require('../../src/0001/0029_两数相除')
describe('0029_两数相除', () => {
  it('用例一', () => {
    const input = 10
    const input1 = 3
    const output = 3
    expect(fun(input, input1)).to.be.equal(output)
  })
  it('用例二', () => {
    const input = -100
    const input1 = 3
    const output = -33
    expect(fun(input, input1)).to.be.equal(output)
  })
  it('用例三', () => {
    const input = 1
    const input1 = 1
    const output = 1
    expect(fun(input, input1)).to.be.equal(output)
  })
  it('用例四', () => {
    const input = -2147483648
    const input1 = -1
    const output = 2147483647
    expect(fun(input, input1)).to.be.equal(output)
  })
})