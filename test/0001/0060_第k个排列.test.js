const expect = require('chai').expect
var fun = require('../../src/0001/0060_第k个排列')
describe('0060_第k个排列', () => {
  it('用例一', () => {
    const input = 3
    const input1 = 3
    const output = '213'
    expect(fun(input, input1)).to.be.equal(output)
  })
  it('用例二', () => {
    const input = 4
    const input1 = 9
    const output = '2314'
    expect(fun(input, input1)).to.be.equal(output)
  })
})