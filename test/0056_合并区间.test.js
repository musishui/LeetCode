const expect = require('chai').expect
var { merge, convertToIntervals} = require('../src/0056_合并区间')
describe('0056_合并区间', () => {
  it('用例一', () => {
    const input =convertToIntervals([[1,3],[2,6],[8,10],[15,18]])
    const output = convertToIntervals([[1,6],[8,10],[15,18]])
    expect(merge(input)).to.deep.equal(output)
  })
  it('用例二', () => {
    const input =convertToIntervals( [[1,4],[4,5]])
    const output = convertToIntervals( [[1,5]])
    expect(merge(input)).to.deep.equal(output)
  })
})