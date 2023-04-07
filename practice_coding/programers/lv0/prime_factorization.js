//소인수 분해
function solution(n) {
  let ans = [],
    c = 2,
    check = true;
  while (n > 1) {
    if (n % c === 0) {
      n /= c;
      if (check) {
        ans.push(c);
        check = false;
      }
    } else {
      c++;
      check = true;
    }
  }

  return ans;
}
