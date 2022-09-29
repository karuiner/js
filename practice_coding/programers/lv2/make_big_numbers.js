// 큰 수 만들기 - 다시 시작

// 풀이시도 1
function solution(number, k) {
  let i = 0,
    c = 0,
    n = number.length,
    p = 0;
  let sn = number.split("");
  sn.sort();
  sn.join("");
  while (c < k) {
    let z = n;
    for (let j = 0; j < n; j++) {
      if (number[i] === sn[j]) {
        number = number.slice(0, i) + number.slice(i + 1);
        sn = sn.slice(0, j) + sn.slice(j + 1);
        n--;
        c++;
        break;
      }
    }
    if (z === n) {
      i++;
    }
  }
  return number;
}
