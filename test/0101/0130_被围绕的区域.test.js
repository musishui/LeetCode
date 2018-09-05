const expect = require('chai').expect

var fun = require('../../src/0101/0130_被围绕的区域')
describe('0130_被围绕的区域', () => {
  it('用例一', () => {
    const input = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
    const output = [["X", "X", "X", "X"], ["X", "X", "X", "X"], ["X", "X", "X", "X"], ["X", "O", "X", "X"]]
    fun(input)
    expect(input).to.deep.equal(output)
  })
})