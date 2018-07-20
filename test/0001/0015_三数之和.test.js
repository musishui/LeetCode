const expect = require('chai').expect
var threeSum = require('../../src/0001/0015_三数之和')
describe('0015_三数之和', () => {
  it('[-1, 0, 1, 2, -1, -4]', () => {
    const input = [-1, 0, 1, 2, -1, -4]
    const output = [
      [-1, -1, 2],
      [-1, 0, 1]
    ]
    expect(threeSum(input)).to.deep.equal(output)
  })
})