const expect = require('chai').expect
var fun = require('../../src/0001/0091_解码方法')
describe('0091_解码方法', () => {
  it('用例一', () => {
    const input = "12"
    const output = 2
    expect(fun(input)).to.be.equal(output)
  })

  it('用例二', () => {
    const input = "226"
    const output = 3
    expect(fun(input)).to.be.equal(output)
  })
})