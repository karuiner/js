// 큰 수 만들기 - 다시 시작

//풀이시도 2
function solution(number, k) {
  let idx = 0,
    c = 0,
    n = number.length,
    p = 0;
  let arr = [],
    check = [];

  function f(s, c) {
    let ans = "",
      n = s.length,
      x = "";

    for (let i = 0; i < n; i++) {
      let sub = s.slice(0, i) + s.slice(i + 1);

      if (x.length === 0) {
        x = sub[0];
      } else if (Number(x) < Number(sub[0])) {
        x = sub[0];
      }
      if (x === sub[0]) {
        if (c > 1) {
          sub = f(sub, c - 1);
        }
        if (ans.length === 0) {
          ans = sub;
        } else if (sub > ans) {
          ans = sub;
        }
      }
    }
    return ans;
  }

  return f(number, k);
}

// 풀이시도 1
function solution(number, k) {
  let i = 0,
    c = 0,
    n = number.length,
    p = 0;
  let sn = number.split("");
  sn.sort();
  sn.join("");
  while (c < k) {
    let z = n;
    for (let j = 0; j < n; j++) {
      if (number[i] === sn[j]) {
        number = number.slice(0, i) + number.slice(i + 1);
        sn = sn.slice(0, j) + sn.slice(j + 1);
        n--;
        c++;
        break;
      }
    }
    if (z === n) {
      i++;
    }
  }
  return number;
}
