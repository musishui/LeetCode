const expect = require('chai').expect

var fun = require('../../src/0101/0134_加油站')
describe('0134_加油站', () => {
  it('用例一', () => {
    const gas = [1, 2, 3, 4, 5]
    const cost = [3, 4, 5, 1, 2]
    const output = 3

    expect(fun(gas, cost)).to.be.equal(output)
  })
  it('用例二', () => {
    const gas  = [2,3,4]
    const cost = [3,4,3]
    const output = -1

    expect(fun(gas, cost)).to.be.equal(output)
  })
})