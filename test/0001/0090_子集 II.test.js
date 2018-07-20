const expect = require('chai').expect
var fun = require('../../src/0001/0090_子集 II')
describe('0090_子集 II', () => {
  it('用例一', () => {
    const input = [1,2,2]
    const output = [[],[1],[1,2],[1,2,2],[2],[2,2]]
    expect(fun(input)).to.deep.equal(output)
  })
})