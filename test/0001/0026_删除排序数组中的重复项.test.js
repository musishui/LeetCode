const expect = require('chai').expect
var fun = require('../../src/0001/0026_删除排序数组中的重复项')
describe('0026_删除排序数组中的重复项', () => {
  it('用例一', () => {
    const input = [1,1,2]
    const output = 2
    expect(fun(input)).to.be.equal(output)
  })
  it('用例二', () => {
    const input = [0,0,1,1,1,2,2,3,3,4]
    const output = 5
    expect(fun(input)).to.be.equal(output)
  })
})