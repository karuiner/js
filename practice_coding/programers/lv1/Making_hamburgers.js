//햄버거 만들기

// 풀이 완료
function solution(ingredient) {
  let ans = 0,
    i = 0,
    arr = [],
    n = ingredient.length,
    narr = 0;

  function check(arr) {
    let [a, b, c, d] = arr;
    return a === 1 && b === 2 && c === 3 && d === 1;
  }
  while (i < n) {
    let [a, b, c, d] = ingredient.slice(i, i + 4);
    let [e, f, g] = [arr[narr - 1], arr[narr - 2], arr[narr - 3]];
    if (check([f, e, a, b])) {
      arr = arr.slice(0, narr - 2);
      narr -= 2;
      i += 2;
      ans++;
    } else if (check([e, a, b, c])) {
      arr = arr.slice(0, narr - 1);
      narr -= 1;
      i += 3;
      ans++;
    } else if (check([a, b, c, d])) {
      i += 4;
      ans++;
    } else if (check([g, f, e, a])) {
      arr = arr.slice(0, narr - 3);
      narr -= 3;
      i++;
      ans++;
    } else {
      arr[narr] = a;
      narr++;
      i++;
    }
  }

  return ans;
}

// 풀이 시도 2 (1,2,3, 10,11, 13,14,15,16,17 풀이 완료)
function solution(ingredient) {
  let ans = 0,
    i = 0,
    arr = [],
    n = ingredient.length,
    narr = 0,
    k = 0;

  function check(arr, n) {
    let [a, b, c, d] = [arr[n - 4], arr[n - 3], arr[n - 2], arr[n - 1]];
    return a === 1 && b === 2 && c === 3 && d === 1;
  }
  arr = ingredient.slice(0, 4);
  i = 4;
  narr = 4;

  while (k !== narr) {
    k = narr;
    if (narr > 3 && check(arr, narr)) {
      arr = arr.slice(0, n - 4);
      ans++;
      narr -= 4;
    } else if (i < n) {
      arr[narr] = ingredient[i];
      i++;
      narr++;
    }
  }

  return ans;
}

// 풀이 시도 1 (1,2, 10, 13,14,15,16,17 풀이 완료)
function solution(ingredient) {
  let ans = 0,
    i = 0,
    arr = [],
    n = ingredient.length,
    narr = 0;

  function check(arr) {
    let [a, b, c, d] = arr;
    return a === 1 && b === 2 && c === 3 && d === 1;
  }
  while (i < n) {
    let [a, b, c, d] = ingredient.slice(i, i + 4);
    let [e, f, g] = [arr[narr - 1], arr[narr - 2], arr[narr - 3]];
    if (check([f, e, a, b])) {
      arr = arr.slice(0, narr - 2);
      i += 2;
      ans++;
    } else if (check([e, a, b, c])) {
      arr = arr.slice(0, narr - 1);
      i += 3;
      ans++;
    } else if (check([a, b, c, d])) {
      i += 4;
      ans++;
    } else if (check([g, f, e, a])) {
      arr = arr.slice(0, narr - 3);
      i++;
      ans++;
    } else {
      arr[narr] = a;
      narr++;
      i++;
    }
  }

  return ans;
}
