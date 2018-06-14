/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function (intervals) {
  if (!intervals.length) return []

  function factory(interval) {
    return new Interval(interval.start, interval.end)
  }

  intervals.sort((a, b) => a.start - b.start)
  let temp = factory(intervals[0])
  let result = [temp]
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].start > temp.end) {
      temp = factory(intervals[i])
      result.push(temp)
    } else if (intervals[i].end > temp.end) {
      temp.end = intervals[i].end
    }
  }
  return result
};

function Interval(start, end) {
  this.start = start;
  this.end = end;
}

function convertToIntervals (arrs) {
 return arrs.map(item=>new Interval(item[0], item[1])) 
}

module.exports = { merge, convertToIntervals}