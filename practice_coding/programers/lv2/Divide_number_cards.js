//숫자 카드 나누기

//풀이 시도 1
function solution(arrayA, arrayB) {
  let ans = 0,
    max = Infinity;
  for (let i of arrayA) {
    if (i < max) {
      max = i;
    }
  }

  function f(x) {
    let sqrt = Math.floor(Math.sqrt(x)),
      ans = [];
    if (x <= max) {
      ans.push(x);
    }
    for (let i = 2; i <= sqrt; i++) {
      if (x % i === 0) {
        let a = x / i;
        if (a === i && a <= max) {
          ans.push(i);
        } else {
          if (a <= max) {
            ans.push(a);
          }

          if (i <= max) {
            ans.push(i);
          }
        }
      }
    }
    ans.sort((a, b) => b - a);
    return ans;
  }
  function check(x) {
    let check = true;
    for (let i of arrayA) {
      if (i % x !== 0) {
        check = false;
        break;
      }
    }
    if (check) {
      for (let j of arrayB) {
        if (j % x === 0) {
          check = false;
          break;
        }
      }
    }
    return check;
  }

  let key = f(max);
  for (let i of key) {
    if (check(i)) {
      ans = i;
      break;
    }
  }

  return ans;
}
