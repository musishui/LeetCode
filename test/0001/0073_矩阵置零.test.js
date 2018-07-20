const expect = require('chai').expect
var fun = require('../../src/0001/0073_矩阵置零')
describe('0070_爬楼梯', () => {
  it('用例一', () => {
    const input =  [
      [1,1,1],
      [1,0,1],
      [1,1,1]
    ]
    const output = [
      [1,0,1],
      [0,0,0],
      [1,0,1]
    ]
    fun(input)
    expect(input).to.deep.equal(output)
  })
  it('用例二', () => {
    const input =  [
      [0,1,2,0],
      [3,4,5,2],
      [1,3,1,5]
    ]
    const output = [
      [0,0,0,0],
      [0,4,5,0],
      [0,3,1,0]
    ]
    fun(input)
    expect(input).to.deep.equal(output)
  })
})