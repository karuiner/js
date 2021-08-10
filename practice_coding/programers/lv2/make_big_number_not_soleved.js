function solution(number, k) {
  let n = number.length,
    ans = "",
    c = 9;
  while (c > 0) {
    let i = number.indexOf(c);
    if (i >= 0) {
      if (number.slice(i).length >= n - k) {
        number = number.slice(i);
        k = k - (n - number.length);
        n = number.length;
        break;
      }
    }
    c--;
  }
  c = 1;
  while (k > 0) {
    if (number[c - 1] > number[c] && number[c + 1] > number[c]) {
      number = number.slice(0, c) + number.slice(c + 1);
      k--;
      n--;
    } else {
      c++;
    }
  }

  return number;
}

function solution2(num, k) {
  let n = num.length,
    ans = "0";
  if (k > 0) {
    for (let i = 0; i < n - k; i++) {
      let sub = num.slice(0, i) + num.slice(i + 1);
      let x = solution2(sub, k - 1);
      if (Number(x) > Number(ans)) {
        ans = x;
      }
    }
  } else {
    ans = num;
  }
  return ans;
}

let a = "3331111111111111",
  b = 4;
console.log(solution2(a, b));
