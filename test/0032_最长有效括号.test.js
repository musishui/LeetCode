const expect = require('chai').expect
var fun = require('../src/0032_最长有效括号')
describe('0032_最长有效括号', () => {
  it('用例一', () => {
    const input = '(()'
    const output = 2
    expect(fun(input)).to.be.equal(output)
  })
  it('用例二', () => {
    const input = ")()())"
    const output = 4
    expect(fun(input)).to.be.equal(output)
  })
})