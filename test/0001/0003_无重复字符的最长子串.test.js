// 0003_无重复字符的最长子串
const expect = require('chai').expect
var lengthOfLongestSubstring = require('../../src/0001/0003_无重复字符的最长子串')
describe('0003_无重复字符的最长子串', () => {
  it('abcabcbb', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).to.be.equal(3)
  })
  it('bbbbb', () => {
    expect(lengthOfLongestSubstring('bbbbb')).to.be.equal(1)
  })
  it('pwwkew', () => {
    expect(lengthOfLongestSubstring('pwwkew')).to.be.equal(3)
  })
  it('au', () => {
    expect(lengthOfLongestSubstring('au')).to.be.equal(2)
  })
})