//0022_括号生成
const expect = require('chai').expect
const generateParenthesis = require('../../src/0001/0022_括号生成')
describe('0022_括号生成', () => {
  it('3', () => {
    expect(generateParenthesis(3)).to.deep.equal(["()()()","(())()","((()))","(()())","()(())"])
  })
})