const expect = require('chai').expect

var fun = require('../../src/0101/0131_分割回文串')
describe('0131_分割回文串', () => {
  it('用例一', () => {
    const input = 'aab'
    const output = [['a','a','b'],['aa','b']]
    expect(fun(input)).to.deep.equal(output)
  })
})