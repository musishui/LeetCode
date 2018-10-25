const expect = require('chai').expect

var fun = require('../../src/0101/0139_单词拆分')
describe('0139_单词拆分', () => {
  it('用例一', () => {
    let input1 = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    let input2 = ["aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa", "ba"]
    let output = false
    expect(fun(input1, input2)).to.be.equal(output)
  })
})