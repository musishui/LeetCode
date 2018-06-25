const expect = require('chai').expect
var fun = require('../src/0077_组合')
describe('0077_组合', () => {
  it('用例一', () => {
    const input = 4
    const input1 = 2
    const output = [
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
      [3, 4]
    ]
    expect(fun(input, input1)).to.deep.equal(output)
  })
})