const expect = require('chai').expect
var isValid = require('../src/0020_有效的括号')
describe('有效的括号', () => {
  it('()', () => {
    expect(isValid('()')).to.be.equal(true)
  })
  it('()[]{}', () => {
    expect(isValid('()[]{}')).to.be.equal(true)
  })
  it('(]', () => {
    expect(isValid('(]')).to.be.equal(false)
  })

  it('([)]', () => {
    expect(isValid('([)]')).to.be.equal(false)
  })

  it('{[]}', () => {
    expect(isValid('{[]}')).to.be.equal(true)
  })
})