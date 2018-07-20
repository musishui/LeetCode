const expect = require('chai').expect
var fun = require('../../src/0001/0067_二进制求和')
describe('0067_二进制求和', () => {
  it('用例一', () => {
    const input = '11'
    const input1 = '1'
    const output = '100'
    expect(fun(input, input1)).to.be.equal(output)
  })
  it('用例二', () => {
    const input = '1010'
    const input1 = '1011'
    const output = '10101'
    expect(fun(input, input1)).to.be.equal(output)
  })
})