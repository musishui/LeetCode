const expect = require('chai').expect
const fun = require('../../src/0001/0056_合并区间')
const { buildIntervals} = require('../../helper')
describe('0056_合并区间', () => {
  it('用例一', () => {
    const input =buildIntervals([[1,3],[2,6],[8,10],[15,18]])
    const output = buildIntervals([[1,6],[8,10],[15,18]])
    expect(fun(input)).to.deep.equal(output)
  })
  it('用例二', () => {
    const input =buildIntervals( [[1,4],[4,5]])
    const output = buildIntervals( [[1,5]])
    expect(fun(input)).to.deep.equal(output)
  })
})