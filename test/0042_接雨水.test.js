const expect = require('chai').expect
var fun = require('../src/0042_接雨水')
describe('0042_接雨水', () => {
  it('用例一', () => {
    const input = [0,1,0,2,1,0,1,3,2,1,2,1]
    const output = 6
    expect(fun(input)).to.be.equal(output)
  })
})