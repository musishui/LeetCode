const expect = require('chai').expect

var fun = require('../../src/0101/0118_杨辉三角')
describe('0118_杨辉三角', () => {
  it('用例一', () => {
    const input = 5
    const output = [
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1]
    ]
    expect(fun(input)).to.deep.equal(output)
  })
})