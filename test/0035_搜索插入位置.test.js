const expect = require('chai').expect
var fun = require('../src/0035_搜索插入位置')
describe('0035_搜索插入位置', () => {
  it('用例一', () => {
    const input = [1, 3, 5, 6]
    const target = 5
    const output = 2
    expect(fun(input, target)).to.be.equal(output)
  })
  it('用例二', () => {
    const input = [1, 3, 5, 6]
    const target = 2
    const output = 1
    expect(fun(input, target)).to.be.equal(output)
  })
  it('用例三', () => {
    const input = [1, 3, 5, 6]
    const target = 7
    const output = 4
    expect(fun(input, target)).to.be.equal(output)
  })
  it('用例四', () => {
    const input = [1, 3, 5, 6]
    const target = 0
    const output = 0
    expect(fun(input, target)).to.be.equal(output)
  })
  it('用例五', () => {
    const input = [1, 3]
    const target = 3
    const output = 1
    expect(fun(input, target)).to.be.equal(output)
  })
})