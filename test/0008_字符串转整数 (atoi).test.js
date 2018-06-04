//0022_括号生成
const expect = require('chai').expect
const myAtoi = require('../src/0008_字符串转整数 (atoi)')
describe('0008_字符串转整数 (atoi)', () => {
  it('42', () => {
    expect(myAtoi('42')).to.equal(42)
  })

  it('   -42', () => {
    expect(myAtoi('   -42')).to.equal(-42)
  })
  it('4193 with words', () => {
    expect(myAtoi('4193 with words')).to.equal(4193)
  })
  it('words and 987', () => {
    expect(myAtoi('words and 987')).to.equal(0)
  })
  it('-91283472332', () => {
    expect(myAtoi('-91283472332')).to.equal(-2147483648)
  })
})