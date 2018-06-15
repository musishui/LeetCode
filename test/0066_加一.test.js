const expect = require('chai').expect
var fun = require('../src/0066_加一')
describe('0066_加一', () => {
  it('用例一', () => {
    const input = [1, 2, 3]
    const output = [1, 2, 4]
    expect(fun(input)).to.deep.equal(output)
  })
  it('用例二', () => {
    const input = [9, 9]
    const output = [1, 0, 0]
    expect(fun(input)).to.deep.equal(output)
  })
})