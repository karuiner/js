/*
 *
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function (expression) {
  let ans = "0/1",
    k = "";
  function get(v) {
    let a = [],
      b = [];
    for (let i = 1; i <= Math.floor(Math.sqrt(v)); i++) {
      if (v % i === 0) {
        a.push(v / i);
        b = [i, ...b];
      }
    }
    return a.concat(b);
  }

  function cal(a, b) {
    if (b.length === 0) {
      return a;
    }
    let [as, am] = a.split("/"),
      [bs, bm] = b.split("/");
    let k = Number(am) * Number(bm),
      ak = Number(as) * Number(bm),
      bk = Number(bs) * Number(am);
    let s = ak + bk;
    if (s === 0) {
      k = 1;
    } else if (Math.abs(s) < k) {
      let us = get(Math.abs(s));
      for (let u of us) {
        if (s % u === 0 && k % u === 0) {
          s = s / u;
          k = k / u;
          break;
        }
      }
    } else if (Math.abs(s) >= k) {
      let us = get(k);
      for (let u of us) {
        if (s % u === 0 && k % u === 0) {
          s = s / u;
          k = k / u;
          break;
        }
      }
    }
    return `${s}/${k}`;
  }

  for (let i of expression) {
    if (i === "+" || i === "-") {
      ans = cal(ans, k);
      k = i;
    } else {
      k += i;
    }
  }
  ans = cal(ans, k);
  return ans;
};

// Runtime: 92 ms, faster than 44.26% of JavaScript online submissions for Fraction Addition and Subtraction.
// Memory Usage: 42.2 MB, less than 6.56% of JavaScript online submissions for Fraction Addition and Subtraction.
