// 마법의 엘레베이터

// 풀이 시도 2
function solution(storey) {
  function f(n) {
    let s = `${n}`,
      l = s.length,
      k = Number(s[0]);
    if (l > 2) {
      let p = 10 ** (l - 1);
      let a = k + f(n - k * p),
        b = k + 1 + f((k + 1) * p - n);
      return a < b ? a : b;
    } else {
      let a = n - k * 10 + k,
        b = (k + 1) * 10 - n + k + 1;
      return a < b ? a : b;
    }
  }

  function f2(x) {
    // x= 한자리수
  }
  // 45 9
  // 54 60 60 -6 11 , 50 +4 =9

  //100 1
  // -20 2
  // -5 5

  // 16
  // 1: 10 + 6  1 + 6 = 7
  // 2: 20 - 4  2 + 4 = 6
  // 2554
  // 2000 + 500 + 50 + 4
  // 2000 + 1000 - 446

  return f(storey);
}

// 풀이 시도 1
function solution(storey) {
  function f(n) {
    let s = `${n}`,
      l = s.length,
      k = Number(s[0]);

    if (l > 2) {
      let p = 10 ** (l - 1);
      let a = k + f(n - k * p),
        b = k + 1 + f((k + 1) * p - n);
      return a < b ? a : b;
    } else {
      let a = n - k * 10 + k,
        b = (k + 1) * 10 - n + k + 1;
      return a < b ? a : b;
    }
  }
  //100 1
  // -20 2
  // -5 5

  return f(storey);
}
