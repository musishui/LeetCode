const expect = require('chai').expect
var threeSumClosest = require('../src/0016_最接近的三数之和')
describe('0016_最接近的三数之和', () => {
  it('[0,2,1,-3], 1', () => {
    const input = [0, 2, 1, -3]
    const target = 1
    const output = 0
    expect(threeSumClosest(input, target)).to.deep.equal(output)
  })
  it('用例二', () => {
    const input = [6, -18, -20, -7, -15, 9, 18, 10, 1, -20, -17, -19, -3, -5, -19, 10, 6, -11, 1, -17, -15, 6, 17, -18, -3, 16, 19, -20, -3, -17, -15, -3, 12, 1, -9, 4, 1, 12, -2, 14, 4, -4, 19, -20, 6, 0, -19, 18, 14, 1, -15, -5, 14, 12, -4, 0, -10, 6, 6, -6, 20, -8, -6, 5, 0, 3, 10, 7, -2, 17, 20, 12, 19, -13, -1, 10, -1, 14, 0, 7, -3, 10, 14, 14, 11, 0, -4, -15, -8, 3, 2, -5, 9, 10, 16, -4, -3, -9, -8, -14, 10, 6, 2, -12, -7, -16, -6, 10]
    const target = -52
    const output = -52
    expect(threeSumClosest(input, target)).to.deep.equal(output)
  })
  it('用例三', () => {
    const input = [-1,0,1,2,-1,-4]
    const target = 0
    const output = 0
    expect(threeSumClosest(input, target)).to.deep.equal(output)
  })
})