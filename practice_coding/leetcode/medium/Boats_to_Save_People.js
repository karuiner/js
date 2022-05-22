/*
 *
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  let s = [],
    r = [],
    hlimit = 0.5 * limit,
    ans = 0,
    ri = 0,
    si = 0,
    rn = 0,
    sn = 0;

  for (let i of people) {
    if (i > hlimit) {
      r.push(i);
      rn++;
    } else {
      s.push(i);
      sn++;
    }
  }
  r.sort((a, b) => b - a);
  s.sort((a, b) => a - b);

  while (ri < rn && si < sn) {
    if (r[ri] + s[si] <= limit) {
      ri++;
      si++;
    } else {
      ri++;
    }
    ans++;
  }

  return ans + (rn - ri) + Math.ceil(0.5 * (sn - si));
};

// Runtime: 222 ms, faster than 44.75% of JavaScript online submissions for Boats to Save People.
// Memory Usage: 56.2 MB, less than 5.08% of JavaScript online submissions for Boats to Save People.
