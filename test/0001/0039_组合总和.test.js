const expect = require('chai').expect
var fun = require('../../src/0001/0039_组合总和')
describe('0039_组合总和', () => {
  it('用例一', () => {
    const input = [2, 3, 6, 7]
    const input1 = 7
    const output = [
      [3, 2, 2],
      [7]
    ]
    expect(fun(input, input1)).to.deep.equal(output)
  })
  it('用例二', () => {
    const input = [2, 3, 5]
    const input1 = 8
    const output = [[2,2,2,2],[3,3,2],[5,3]]
    expect(fun(input, input1)).to.deep.equal(output)
  })
})