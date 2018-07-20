const expect = require('chai').expect
var fun = require('../../src/0001/0081_ 搜索旋转排序数组 II')
describe('0081_ 搜索旋转排序数组 II', () => {
  it('用例一', () => {
    const input = [2,5,6,0,0,1,2]
    const target = 0
    const output = true
    expect(fun(input, target)).to.be.equal(output)
  })
  it('用例二', () => {
    const input = [2,5,6,0,0,1,2]
    const target = 3
    const output = false
    expect(fun(input, target)).to.be.equal(output)
  })
})