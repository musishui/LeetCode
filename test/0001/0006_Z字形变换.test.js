//0022_括号生成
const expect = require('chai').expect
const convert = require('../../src/0001/0006_Z字形变换')
describe('0006_Z字形变换', () => {
  it('PAYPALISHIRING, 3', () => {
    expect(convert('PAYPALISHIRING', 3)).to.equal('PAHNAPLSIIGYIR')
  })

  it('PAYPALISHIRING, 4', () => {
    expect(convert('PAYPALISHIRING', 4)).to.equal('PINALSIGYAHRPI')
  })
})