const expect = require('chai').expect
var fun = require('../src/0058_最后一个单词的长度')
describe('0058_最后一个单词的长度', () => {
  it('用例一', () => {
    const input = 'Hello World'
    const output = 5
    expect(fun(input)).to.be.equal(output)
  })
})