//롤케이크 자르기
function solution(topping) {
  let max = {},
    ans = 0,
    sub = {},
    c = 0,
    k = 0;
  for (let i of topping) {
    if (max[i] === undefined) {
      max[i] = 0;
      c++;
    }
    max[i]++;
  }

  for (let i of topping) {
    if (sub[i] === undefined) {
      sub[i] = true;
      k++;
    }
    if (max[i] === 1) {
      delete max[i];
      c--;
    } else {
      max[i]--;
    }

    if (k === c) {
      ans++;
    } else if (c < k) {
      break;
    }
  }

  return ans;
}
