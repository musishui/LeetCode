const expect = require('chai').expect
var fun = require('../../src/0001/0078_子集')
describe('0078_子集', () => {
  it('用例一', () => {
    const input = [1,2,3]
    const output = [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]
    expect(fun(input)).to.deep.equal(output)
  })
})