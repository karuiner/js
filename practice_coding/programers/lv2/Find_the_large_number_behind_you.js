//뒤에 있는 큰 수 찾기

//풀이시도 3 실패
// 더나쁜 결과
function solution(numbers) {
  // 뒤에서 부터 확인하는 경우
  // 1. 해당 값이 마지막일경우 - -1 을 부여
  // 2. 뒷값이 현재 값보다 큰경우 뒷값을 부여
  //

  let ans = [-1],
    n = numbers.length,
    position = Array(n).fill(-1),
    k = -1;

  function check(a, b) {
    if (b === undefined) {
      return ans[0];
    } else if (a >= b) {
      let s = ans[ans.length - 1],
        check = false;
      for (let i of ans) {
        if (i > a) {
          s = i;
          ans = [s, ...ans];
          check = true;
          break;
        }
      }
      if (!check) {
        ans = [s, ...ans];
      }
      return s;
    } else {
      ans = [b, ...ans];
      return b;
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    let a = numbers[i],
      b = numbers[i + 1];
    check(a, b, ans);
  }
  return ans;
}

//  풀이 시도 2 실패

function solution(numbers) {
  let ans = [],
    n = numbers.length,
    position = Array(n).fill(-1);
  for (let i = n - 1; i >= 0; i--) {
    let a = numbers[i],
      b = numbers[i + 1];
    if (b === undefined) {
      ans[i] = -1;
    } else if (a < b) {
      ans[i] = b;
      position[i] = i + 1;
    } else {
      let k = position[i + 1];
      while (k > 0 && a > numbers[k]) {
        k = position[k];
      }
      if (k < 0) {
        position[i] = -1;
        ans[i] = -1;
      } else {
        position[i] = k;
        ans[i] = numbers[k];
      }
    }
  }
  return ans;
}

// 풀이 시도 1 실패
// 긴 예제의경우 시간 초과 가 생김
// 계산 단축 방법을 고민할것

function solution(numbers) {
  let ans = [],
    n = numbers.length;
  for (let i = 0; i < n; i++) {
    let k = numbers[i],
      sub = -1;
    for (let j = i + 1; j < n; j++) {
      if (numbers[j] > k) {
        sub = numbers[j];
        break;
      }
    }
    ans[i] = sub;
  }

  return ans;
}
