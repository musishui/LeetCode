const expect = require('chai').expect
var fun = require('../../src/0001/0062_不同路径')
describe('0062_不同路径', () => {
  it('用例一', () => {
    const input = 3
    const input1 = 2
    const output = 3
    expect(fun(input, input1)).to.be.equal(output)
  })
  it('用例二', () => {
    const input = 7
    const input1 = 3
    const output = 28
    expect(fun(input, input1)).to.be.equal(output)
  })
})