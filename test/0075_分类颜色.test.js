const expect = require('chai').expect
var fun = require('../src/0075_分类颜色')
describe('0075_分类颜色', () => {
  it('用例一', () => {
    const input =  [2,0,2,1,1,0]
    const output = [0, 0, 1, 1, 2, 2]
    fun(input)
    expect(input).to.deep.equal(output)
  })
})