const expect = require('chai').expect
var fun = require('../src/0059_螺旋矩阵 II')
describe('0059_螺旋矩阵 II', () => {
  it('用例一', () => {
    const input = 3
    const output = [
      [ 1, 2, 3 ],
      [ 8, 9, 4 ],
      [ 7, 6, 5 ]
     ]
    expect(fun(input)).to.deep.equal(output)
  })
})