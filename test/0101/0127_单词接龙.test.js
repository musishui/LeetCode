const expect = require('chai').expect

var fun = require('../../src/0101/0127_单词接龙')
describe('0127_单词接龙', () => {
  it('用例一', () => {
    const beginWord = "hit"
    const endWord = "cog"
    const wordList = ["hot", "dot", "dog", "lot", "log", "cog"]
    const output = 5
    expect(fun(beginWord, endWord, wordList)).to.be.equal(output)
  })
  it('用例二', () => {
    const beginWord = "hit"
    const endWord = "cog"
    const wordList = ["hot","dot","dog","lot","log"]
    const output = 0
    expect(fun(beginWord, endWord, wordList)).to.be.equal(output)
  })
})