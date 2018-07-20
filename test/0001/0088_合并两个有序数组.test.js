const expect = require('chai').expect
var fun = require('../../src/0001/0088_合并两个有序数组')
describe('0088_合并两个有序数组', () => {
  it('用例一', () => {
    const input = [1, 2, 3, 0, 0, 0],
      m = 3
    const input1 = [2, 5, 6],
      n = 3
    const output = [1, 2, 2, 3, 5, 6]
    fun(input, m, input1, n)
    expect(input).to.deep.equal(output)
  })
})