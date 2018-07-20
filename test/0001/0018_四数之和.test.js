const expect = require('chai').expect
var fourSum = require('../../src/0001/0018_四数之和')
describe('0018_四数之和', () => {
  it('用例一', () => {
    const input = [1, 0, -1, 0, -2, 2]
    const target = 0
    const output=[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
    expect(fourSum(input,target)).to.deep.equal(output)
  })
})