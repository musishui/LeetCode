const expect = require('chai').expect
var fun = require('../src/0089_格雷编码')
describe('0089_格雷编码', () => {
  it('用例一', () => {
    const input = 4
    const output = [0,1,3,2,6,7,5,4,12,13,15,14,10,11,9,8]
    expect(fun(input)).to.deep.equal(output)
  })
})