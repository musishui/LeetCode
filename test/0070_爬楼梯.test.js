const expect = require('chai').expect
var fun = require('../src/0070_爬楼梯')
describe('0070_爬楼梯', () => {
  it('用例一', () => {
    const input =  2
    const output = 2
    expect(fun(input)).to.be.equal(output)
  })
  it('用例二', () => {
    const input =  3
    const output = 3
    expect(fun(input)).to.be.equal(output)
  })
})