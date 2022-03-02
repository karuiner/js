//괄호 변환
function solution(p) {
  function check(s) {
    let l = 0,
      ans = true;
    for (let i of s) {
      if (i === "(") {
        l++;
      } else {
        l--;
      }
      if (l < 0) {
        ans = false;
        break;
      }
    }
    return ans;
  }
  function rp(p) {
    if (p.length === 0) {
      return p;
    }
    let l = 0,
      u = "",
      v = "";
    for (let i = 0; i < p.length; i++) {
      if (p[i] === "(") {
        l++;
      } else {
        l--;
      }
      if (l === 0) {
        u = p.slice(0, i + 1);
        v = p.slice(i + 1);
        break;
      }
    }
    if (check(u)) {
      v = rp(v);
      u += v;
    } else {
      let q = "(";
      q = q + rp(v) + ")";
      u = u.slice(1, u.length - 1);
      for (let i of u) {
        if (i === "(") {
          q += ")";
        } else {
          q += "(";
        }
      }
      u = q;
    }
    return u;
  }

  return rp(p);
}
let values = [
  ["(()())()", "(()())()"],
  [")(", "()"],
  ["()))((()", "()(())()"],
];
for (let [s, expected_result] of values) {
  console.log(
    `calculated_result : ${solution(s)}, expected_result : ${expected_result} `
  );
}
