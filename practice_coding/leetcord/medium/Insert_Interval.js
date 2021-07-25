/*
 *
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let a = [],
    b = [...newInterval],
    c = [],
    n = intervals.length,
    k = 0;
  while (k < n) {
    if (intervals[k][1] < b[0]) {
      a.push(intervals[k]);
    } else if (intervals[k][0] < b[0]) {
      b[0] = intervals[k][0];
    }
    if (intervals[k][0] > b[1]) {
      c.push(intervals[k]);
    } else if (intervals[k][1] > b[1]) {
      b[1] = intervals[k][1];
    }

    k++;
  }

  return [...a, b, ...c];
};

// Runtime: 80 ms, faster than 93.25% of JavaScript online submissions for Insert Interval.
// Memory Usage: 41.2 MB, less than 45.69% of JavaScript online submissions for Insert Interval.
