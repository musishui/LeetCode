const expect = require('chai').expect
var fun = require('../../src/0001/0084_柱状图中最大的矩形')
describe('0084_柱状图中最大的矩形', () => {
  it('用例一', () => {
    const input =  [2,1,5,6,2,3]
    const output = 10
    expect(fun(input)).to.be.equal(output)
  })
})