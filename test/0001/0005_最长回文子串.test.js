//0022_括号生成
const expect = require('chai').expect
const longestPalindrome = require('../../src/0001/0005_最长回文子串')
describe('0005_最长回文子串', () => {
  it('babad', () => {
    expect(longestPalindrome('babad')).to.equal('bab')
  })

  it('cbbd', () => {
    expect(longestPalindrome('cbbd')).to.equal('bb')
  })

  it('abcd', () => {
    expect(longestPalindrome('abcd')).to.equal('a')
  })
})