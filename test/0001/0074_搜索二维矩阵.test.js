const expect = require('chai').expect
var fun = require('../../src/0001/0074_搜索二维矩阵')
describe('0074_搜索二维矩阵', () => {
  it('用例一', () => {
    const input = [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50]
    ]
    const input1 = 3
    const output = true
    expect(fun(input, input1)).to.be.equal(output)
  })
  it('用例二', () => {
    const input = [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50]
    ]
    const input1 = 13
    const output = false
    expect(fun(input, input1)).to.be.equal(output)
  })
})