const expect = require('chai').expect
var fun = require('../src/0079_单词搜索')
describe('0079_单词搜索', () => {

  it('用例一', () => {
    const input = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E']
    ]
    const word = "ABCCED"
    const output = true
    expect(fun(input, word)).to.be.equal(output)
  })
  it('用例二', () => {
    const input = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E']
    ]
    const word = "SEE"
    const output = true
    expect(fun(input, word)).to.be.equal(output)
  })
  it('用例三', () => {
    const input = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E']
    ]
    const word = "ABCB"
    const output = false
    expect(fun(input, word)).to.be.equal(output)
  })
})