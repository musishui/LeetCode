const expect = require('chai').expect
var intToRoman = require('../../src/0001/0012_整数转罗马数字')
describe('0012_整数转罗马数字', () => {
  it('3', () => {
    expect(intToRoman(3)).to.be.equal('III')
  })
  it('4', () => {
    expect(intToRoman(4)).to.be.equal('IV')
  })
  it('9', () => {
    expect(intToRoman(9)).to.be.equal('IX')
  })

  it('58', () => {
    expect(intToRoman(58)).to.be.equal('LVIII')
  })

  it('1994', () => {
    expect(intToRoman(1994)).to.be.equal('MCMXCIV')
  })
})