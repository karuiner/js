// 마법의 엘레베이터
// 풀이 완료
// 풀이 방식은 1의 자리수 부터 10이나 0을 맞춰 가능 식으로
// 최고 자리수 까지 진행하는 것이다.
// 다만 수에 따라 5 인 부분을 처리하는 방식이 달라질 것이다.
// 따라서 두경우 모두 계산하고 최소가 되는 것을 결과로 돌려주게 구성하였다.
function solution(storey) {
  function f(n, t = false) {
    let c = 0;
    while (n > 0) {
      let s = `${n}`,
        l = s.length,
        i = Number(s[l - 1]);
      if (i > 5) {
        c += 10 - i;
        n = Math.floor((n + 10 - i) / 10);
      } else if (i < 5) {
        c += i;
        n = Math.floor((n - i) / 10);
      } else if (t) {
        c += 10 - i;
        n = Math.floor((n + 10 - i) / 10);
      } else {
        c += i;
        n = Math.floor((n - i) / 10);
      }
    }
    return c;
  }

  return Math.min(f(storey), f(storey, true));
}

// 풀이 시도 3
function solution(storey) {
  // 646
  // 1000 - 354
  // 300 + 54 9
  // 100 - 46
  // 40
  // 10 + 4

  function f(n) {
    let s = `${n}`,
      l = s.length,
      k = Number(s[0]),
      check = true,
      p = 0;

    if (l > 1) {
      let p = 10 ** (l - 1),
        h = 5 * p;
      if (n < h) {
        let x = Math.floor(n / p);
        return x + f(n - x * p);
      } else {
        return 1 + f(2 * h - n);
      }
    } else {
      let h = 5;
      if (n > 5) {
        return 1 + (10 - n);
      } else {
        return n;
      }
    }
  }

  return f(storey);
}

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
