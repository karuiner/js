//카운트 다운

// 풀이 시도 2
function solution(target) {
  let ans = [0, 0],
    ans2 = [0, 0];
  function f(x) {
    ans[0]++;
    if (x > 20 && x <= 60 && x % 3 === 0) {
      return 0;
    } else if (x > 20 && x <= 40 && x % 2 === 0) {
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
  }

  function f2(x) {
    ans2[0]++;
    if (x >= 60 && x % 3 === 0) {
      return x - 60;
    } else if (x >= 40 && x % 2 === 0) {
      return x - 40;
    } else if (x > 20 && x <= 60 && x % 3 === 0) {
      return 0;
    } else if (x > 20 && x <= 40 && x % 2 === 0) {
      return 0;
    } else if (x >= 50) {
      ans2[1]++;
      return x - 50;
    } else if (x > 20) {
      ans2[1]++;
      return x - 20;
    } else {
      ans2[1]++;
      return 0;
    }
  }
  let a = target;
  while (target > 0) {
    target = f(target);
  }
  while (a > 0) {
    a = f2(a);
  }

  return ans2[0] < ans[0] ? ans2 : ans;
}

// 풀이 시도 1
function solution(target) {
  let ans = [0, 0];
  function f(x) {
    ans[0]++;
    if (x > 20 && x <= 60 && x % 3 === 0) {
      return 0;
    } else if (x > 20 && x <= 40 && x % 2 === 0) {
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
  }
  while (target > 0) {
    target = f(target);
  }

  return ans;
}
