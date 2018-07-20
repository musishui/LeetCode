const expect = require('chai').expect
var fun = require('../../src/0001/0049_字母异位词分组')
describe('0049_字母异位词分组', () => {
  it('用例一', () => {
    const input = ["eat", "tea", "tan", "ate", "nat", "bat"]
    const output = [
      ["eat","tea","ate"],
      ["tan","nat"],
      ["bat"]
    ]
    expect(fun(input)).to.deep.equal(output)
  })
})