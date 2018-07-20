const expect = require('chai').expect
var fun = require('../../src/0001/0033_搜索旋转排序数组')
describe('0033_搜索旋转排序数组', () => {
  it('用例一', () => {
    const input = [4, 5, 6, 7, 0, 1, 2]
    const target = 0
    const output = 4
    expect(fun(input, target)).to.be.equal(output)
  })
  it('用例二', () => {
    const input = [4, 5, 6, 7, 0, 1, 2]
    const target = 3
    const output = -1
    expect(fun(input, target)).to.be.equal(output)
  })
  it('用例三', () => {
    const input = [5,1,3]
    const target = 3
    const output = 2
    expect(fun(input, target)).to.be.equal(output)
  })
  it('用例四', () => {
    const input = [3,5,1]
    const target = 3
    const output = 0
    expect(fun(input, target)).to.be.equal(output)
  })
})