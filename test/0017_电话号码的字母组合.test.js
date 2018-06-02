const expect = require('chai').expect
const letterCombinations = require('../src/0017_电话号码的字母组合')
describe('0017_电话号码的字母组合', () => {
  it('23', () => {
    expect(letterCombinations('23')).to.deep.equal(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])
  })
})