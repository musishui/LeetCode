const expect = require('chai').expect
var fun = require('../src/0054_螺旋矩阵')
describe('0054_螺旋矩阵', () => {
  it('用例一', () => {
    const input = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]
    const output = [1, 2, 3, 6, 9, 8, 7, 4, 5]
    expect(fun(input)).to.deep.equal(output)
  })
  it('用例二', () => {
    const input = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12]
    ]
    const output = [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
    expect(fun(input)).to.deep.equal(output)
  })
})