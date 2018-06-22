const expect = require('chai').expect
var fun = require('../src/0063_不同路径 II')
describe('0063_不同路径 II', () => {
  it('用例一', () => {
    const input = [
      [0,0,0],
      [0,1,0],
      [0,0,0]
    ]
    const output = 2
    expect(fun(input)).to.be.equal(output)
  })
})