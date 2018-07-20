const expect = require('chai').expect
var fun = require('../../src/0001/0071_简化路径')
describe('0071_简化路径', () => {
  it('用例一', () => {
    const input =  '/home/'
    const output = '/home'
    expect(fun(input)).to.be.equal(output)
  })
  it('用例二', () => {
    const input =  "/a/./b/../../c/"
    const output = '/c'
    expect(fun(input)).to.be.equal(output)
  })
  it('用例三', () => {
    const input =  "/../"
    const output = '/'
    expect(fun(input)).to.be.equal(output)
  })
  it('用例四', () => {
    const input =  "/home//foo/"
    const output = '/home/foo'
    expect(fun(input)).to.be.equal(output)
  })
})