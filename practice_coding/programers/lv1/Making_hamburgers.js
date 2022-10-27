//햄버거 만들기

// 풀이 시도 1
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
