const expect = require('chai').expect
var fun = require('../src/0064_最小路径和')
describe('0064_最小路径和', () => {
  it('用例一', () => {
    const input = [
      [1,3,1],
      [1,5,1],
      [4,2,1]
    ]
    const output = 7
    expect(fun(input)).to.be.equal(output)
  })
  it('用例二', () => {
    const input = [
      [1]
    ]
    const output = 1
    expect(fun(input)).to.be.equal(output)
  })
})