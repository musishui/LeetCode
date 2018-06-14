const expect = require('chai').expect
var fun = require('../src/0046_全排列')
describe('0046_全排列', () => {
  it('用例一', () => {
    const input = [1]
    const output = [
      [1]
    ]
    expect(fun(input)).to.deep.equal(output)
  })
  it('用例二', () => {
    const input = [1, 2, 3]
    const output = [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
    expect(fun(input)).to.deep.equal(output)
  })
})