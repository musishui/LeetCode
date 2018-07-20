const expect = require('chai').expect
var fun = require('../../src/0001/0034_搜索范围')
describe('0034_搜索范围', () => {
  it('用例一', () => {
    const input = [5,7,7,8,8,10]
    const target = 8
    const output = [3,4]
    expect(fun(input, target)).to.deep.equal(output)
  })
  it('用例二', () => {
    const input = [5,7,7,8,8,10]
    const target = 6
    const output = [-1,-1]
    expect(fun(input, target)).to.deep.equal(output)
  })
  it('用例三', () => {
    const input = [5,7,7,8,8,10]
    const target = 5
    const output = [0,0]
    expect(fun(input, target)).to.deep.equal(output)
  })
})