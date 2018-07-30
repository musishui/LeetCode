const expect = require('chai').expect

var fun = require('../../src/0101/0120_三角形最小路径和')
describe('0120_三角形最小路径和', () => {
  it('用例一', () => {
    const input = [
      [2],
      [3, 4],
      [6, 5, 7],
      [4, 1, 8, 3]
    ]
    const output = 11
    expect(fun(input)).to.be.equal(output)
  })
})