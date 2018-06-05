const expect = require('chai').expect
var removeNthFromEnd = require('../src/0019_删除链表的倒数第N个节点')
describe('0019_删除链表的倒数第N个节点', () => {
  it('用例一', () => {
    const input = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 4,
            next: {
              val: 5
            }
          }
        }
      }
    }
    const n = 2
    const output = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 5
          }
        }
      }
    }
    expect(removeNthFromEnd(input, n)).to.deep.equal(output)
  })
})