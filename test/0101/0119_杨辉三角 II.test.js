const expect = require('chai').expect

var fun = require('../../src/0101/0119_杨辉三角 II')
describe('0119_杨辉三角 II', () => {
  it('用例一', () => {
    const input = 4
    const output = [1, 4, 6, 4, 1]
    expect(fun(input)).to.deep.equal(output)
  })
})