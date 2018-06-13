const expect = require('chai').expect
var fun = require('../src/0040_组合总和 II')
describe('0040_组合总和 II', () => {
  it('用例一', () => {
    const input = [10, 1, 2, 7, 6, 1, 5]
    const input1 = 8
    const output = [[1,1,6],[1,2,5],[1,7],[2,6]]
    expect(fun(input, input1)).to.deep.equal(output)
  })
  it('用例二', () => {
    const input = [2, 5, 2, 1, 2]
    const input1 = 5
    const output = [[1,2,2],[5]]
    expect(fun(input, input1)).to.deep.equal(output)
  })
})