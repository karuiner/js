// 풀이중
/*
 *
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function (s, words) {
  function f(s) {
    let ans = "",
      c = "",
      k = 0;
    for (let i of s) {
      if (c === "") {
        k = 1;
        c = i;
      } else if (c !== i) {
        if (ans.length > 1) {
          ans += `-${c}:${k}`;
        } else {
          ans += `${c}:${k}`;
        }

        c = i;
        k = 1;
      } else {
        k++;
      }
    }
    ans += `-${c}:${k}`;
    return ans;
  }
  function check(a, b) {
    let sa = a.split("-"),
      sb = b.split("-"),
      ans = true;
    if (sa.length === sb.length) {
      for (let i = 0; i < sa.length; i++) {
        let [c1, c2] = sa[i].split(":"),
          [d1, d2] = sb[i].split(":");
        if (
          c1 !== d1 ||
          Number(c2) < Number(d2) ||
          Number(c2) - Number(d2) === 1
        ) {
          ans = false;
          break;
        }
      }
    } else {
      ans = false;
    }
    return ans;
  }

  let sam = f(s),
    ans = 0;
  for (let i of words) {
    if (check(sam, f(i))) {
      ans++;
    }
  }
  return ans;
};
