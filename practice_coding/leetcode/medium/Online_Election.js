/*
 *
 * @param {number[]} persons
 * @param {number[]} times
 */
var TopVotedCandidate = function (persons, times) {
  (this.db = {}), (p = {}), (m = 0);
  for (let i = 0; i < times.length; i++) {
    if (p[persons[i]] === undefined) {
      p[persons[i]] = 1;
    } else {
      p[persons[i]]++;
    }
    if (p[persons[i]] > m) {
      m = p[persons[i]];
    }
    let s = [];
    for (let j in p) {
      if (p[j] === m) {
        s.push(Number(j));
      }
    }
    if (s.length === 1) {
      p["v"] = s[0];
    } else {
      let get = false;
      for (let k of s) {
        if (k === persons[i]) {
          p["v"] = k;
          get = true;
          break;
        }
      }
      if (!get) {
        p["v"] = this.db[times[i - 1]]["v"];
      }
    }

    this.db[times[i]] = { ...p };
  }
  this.time = times;
};

/*
 *
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function (t) {
  let idx = this.time.length - 1;

  for (let i = 0; i < this.time.length; i++) {
    if (this.time[i] > t) {
      idx = i - 1;
      break;
    }
  }
  return this.db[this.time[idx]]["v"];
};

/*
 *
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */

// Runtime: 1135 ms, faster than 16.67% of JavaScript online submissions for Online Election.
// Memory Usage: 110.8 MB, less than 6.67% of JavaScript online submissions for Online Election.
