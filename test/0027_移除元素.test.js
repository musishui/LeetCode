const expect = require('chai').expect
var fun = require('../src/0027_移除元素')
describe('0027_移除元素', () => {
  it('用例一', () => {
    const input = [3, 2, 2, 3]
    const val = 3
    const output = 2
    expect(fun(input, val)).to.be.equal(output)
  })
  it('用例二', () => {
    const input = [0, 1, 2, 2, 3, 0, 4, 2]
    const val = 2
    const output = 5
    expect(fun(input, val)).to.be.equal(output)
  })
})