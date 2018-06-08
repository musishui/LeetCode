const expect = require('chai').expect
var fun = require('../src/0031_下一个排列')
describe('0031_下一个排列', () => {
  it('用例一', () => {
    const input = [1, 2, 3]
    const output = [1, 3, 2]
    fun(input)
    expect(input).to.deep.equal(output)
  })
  it('用例二', () => {
    const input = [3, 2, 1]
    const output = [1, 2, 3]
    fun(input)
    expect(input).to.deep.equal(output)
  })
  it('用例三', () => {
    const input = [1, 1, 5]
    const output = [1, 5, 1]
    fun(input)
    expect(input).to.deep.equal(output)
  })
})