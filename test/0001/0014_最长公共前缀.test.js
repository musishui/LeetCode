const expect = require('chai').expect
var longestCommonPrefix = require('../../src/0001/0014_最长公共前缀')
describe('0014_最长公共前缀', () => {
  it('有公共前缀', () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).to.be.equal('fl')
  })
  it('没有公共前缀', () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).to.be.equal('')
  })
  it('空串', () => {
    expect(longestCommonPrefix(["", ""])).to.be.equal('')
  })
})