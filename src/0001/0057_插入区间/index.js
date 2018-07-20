/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */

var insert = function(intervals, newInterval) {
  if (!intervals || !intervals.length) return [newInterval]
  
  let meger = false
  for (let i = 0; i < intervals.length; i++){
    let item = intervals[i]

    if (!meger && item.end >= newInterval.start) {
      newInterval.start = Math.min(newInterval.start, item.start)
      intervals.splice(i, 0, newInterval)
      meger = true
    }else if (meger) {
      if (item.start > newInterval.end) {
        break
      } else {
        intervals.splice(i, 1)
        i--
        if (item.end >= newInterval.end) {
          newInterval.end = item.end
          break
        }
       
      }
    }

  }
  if (!meger) {
    intervals.push(newInterval)
  }
  return intervals
};

module.exports = insert