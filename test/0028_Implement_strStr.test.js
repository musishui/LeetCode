const expect = require('chai').expect
var fun = require('../src/0028_Implement_strStr')
describe('0028_Implement_strStr', () => {
  it('用例一', () => {
    const haystack = "hello"
    const needle = "ll"
    const output = 2
    expect(fun(haystack, needle)).to.be.equal(output)
  })
  it('用例二', () => {
    const haystack = "aaaaa"
    const needle = "bba"
    const output = -1
    expect(fun(haystack, needle)).to.be.equal(output)
  })
  
  it('用例三', () => {
    const haystack = "aaaaa"
    const needle = ""
    const output = 0
    expect(fun(haystack, needle)).to.be.equal(output)
  })

  
  it('用例四', () => {
    const haystack = "aaaaa"
    const needle = "aaaaa"
    const output = 0
    expect(fun(haystack, needle)).to.be.equal(output)
  })
  it('用例五', () => {
    const haystack = "aaaa"
    const needle = "aaaaa"
    const output = -1
    expect(fun(haystack, needle)).to.be.equal(output)
  })
})