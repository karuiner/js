/*
 *
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
  let n = hand.length,
    ans = true;
  if (n % groupSize === 0) {
    let db = {},
      key = [],
      k = 0;
    for (let i of hand) {
      if (db[i] === undefined) {
        key[k] = i;
        k++;
        db[i] = 1;
      } else {
        db[i]++;
      }
    }
    key.sort((a, b) => a - b);
    while (n > 0) {
      let z = 0,
        p = -1,
        check = true;
      for (let i of key) {
        if (db[i] > 0) {
          if (p === -1) {
            p = i;
            db[i]--;
            z++;
            n--;
          } else if (p + 1 === i) {
            p = i;
            db[i]--;
            z++;
            n--;
          } else {
            check = false;
            break;
          }
        }
        if (z >= groupSize) {
          break;
        }
      }

      if (!check || z < groupSize) {
        ans = false;
        break;
      }
    }
  } else {
    ans = false;
  }

  return ans;
};

// Runtime: 577 ms, faster than 9.34% of JavaScript online submissions for Hand of Straights.
// Memory Usage: 51.5 MB, less than 57.33% of JavaScript online submissions for Hand of Straights.
