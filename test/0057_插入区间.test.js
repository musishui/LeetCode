const expect = require('chai').expect
var fun = require('../src/0057_插入区间')
const {buildInterval, buildIntervals} = require('../helper')
describe('0056_合并区间', () => {
  it('用例一', () => {
    const input = buildIntervals([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]])
    const input1 = buildInterval([4,8])
    const output = buildIntervals([[1,2],[3,10],[12,16]])
    expect(fun(input, input1)).to.deep.equal(output)
  })
  it('用例二', () => {
    const input = buildIntervals([[1,3],[6,9]])
    const input1 = buildInterval([2,5])
    const output = buildIntervals([[1,5],[6,9]])
    expect(fun(input, input1)).to.deep.equal(output)
  })
})