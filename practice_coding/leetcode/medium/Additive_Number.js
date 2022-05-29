/*
 *
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function (num) {
  let n = num.length,
    mx = n % 2 === 0 ? n / 3 : (n - 1) / 2,
    k = 0,
    l = 1,
    ans = false;
  function check(n) {
    let s = `${n}`;
    return !(s.length > 1 && s[0] === "0");
  }

  for (let i = 1; i <= mx; i++) {
    for (let j = 1; j <= mx; j++) {
      let a = num.slice(0, i),
        b = num.slice(i, i + j);
      if (check(a) && check(b)) {
        a = Number(a);
        b = Number(b);
        k = i + j;
        l = `${a + b}`.length;
        let z = num.slice(k, k + l);

        while (k < n && n - k >= l && a + b === Number(z)) {
          [a, b] = [b, a + b];
          k += l;
          l = `${a + b}`.length;
          z = num.slice(k, k + l);

          if (!check(z)) {
            break;
          }
        }
        if (n === k) {
          ans = true;
          break;
        }
      }
    }
    if (ans) {
      break;
    }
  }

  return ans;
};

// Runtime: 97 ms, faster than 32.00% of JavaScript online submissions for Additive Number.
// Memory Usage: 42.2 MB, less than 61.33% of JavaScript online submissions for Additive Number.
