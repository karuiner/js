//카운트 다운

// 풀이 시도 1
function solution(target) {
  let ans = [0, 0];
  function f(x) {
    ans[0]++;
    if (ans[0] === 1 && x <= 60 && x % 3 === 0) {
      return 0;
    } else if (ans[0] === 1 && x <= 40 && x % 2 === 0) {
      return 0;
    } else if (x >= 50) {
      ans[1]++;
      return x - 50;
    } else if (x > 20) {
      ans[1]++;
      return x - 20;
    } else {
      ans[1]++;
      return 0;
    }

    if (x > 60) {
    }
  }
  while (target > 0) {
    target = f(target);
  }

  return ans;
}
