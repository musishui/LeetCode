const expect = require('chai').expect
var fun = require('../src/0053_最大子序和')
describe('0053_最大子序和', () => {
  it('用例一', () => {
    const input = [-2,1,-3,4,-1,2,1,-5,4]
    const output = 6
    expect(fun(input)).to.be.equal(output)
  })
})