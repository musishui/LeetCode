const expect = require('chai').expect

var fun = require('../../src/0001/0093_复原IP地址')
describe('0093_复原IP地址', () => {
  it('用例一', () => {
    const input = "25525511135"
    const output = ["255.255.11.135", "255.255.111.35"]
    expect(fun(input)).to.deep.equal(output)
  })
})