const expect = require('chai').expect
var fun = require('../../src/0001/0048_旋转图像')
describe('0048_旋转图像', () => {
  it('用例一', () => {
    const input = [
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]
    const output =[
      [7,4,1],
      [8,5,2],
      [9,6,3]
    ]
    fun(input)
    expect(input).to.deep.equal(output)
  })
  it('用例二', () => {
    const input = [
      [ 5, 1, 9,11],
      [ 2, 4, 8,10],
      [13, 3, 6, 7],
      [15,14,12,16]
    ]
    const output = [
      [15,13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7,10,11]
    ]
    fun(input)
    expect(input).to.deep.equal(output)
  })
})