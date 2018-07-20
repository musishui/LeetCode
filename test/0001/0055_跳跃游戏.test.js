const expect = require('chai').expect
var fun = require('../../src/0001/0055_跳跃游戏')
describe('0055_跳跃游戏', () => {
  it('用例一', () => {
    const input = [2, 3, 1, 1, 4]
    const output = true
    expect(fun(input)).to.be.equal(output)
  })
  it('用例二', () => {
    const input = [3, 2, 1, 0, 4]
    const output = false
    expect(fun(input)).to.be.equal(output)
  })
})