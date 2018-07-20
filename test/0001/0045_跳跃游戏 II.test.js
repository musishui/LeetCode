const expect = require('chai').expect
var fun = require('../../src/0001/0045_跳跃游戏 II')
describe('0045_跳跃游戏 II', () => {
  it('用例一', () => {
    const input = [2,3,1,1,4]
    const output = 2
    expect(fun(input)).to.be.equal(output)
  })
})