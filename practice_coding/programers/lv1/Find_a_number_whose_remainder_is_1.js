//나머지가 1이 되는 수 찾기

function solution(n) {
  let k = n - 1,
    m = Math.floor(Math.sqrt(k)),
    ans = k;
  for (let i = 2; i <= m; i++) {
    if (k % i === 0) {
      ans = i;
      break;
    }
  }

  return ans;
}

let ex = [
  [10, 3],
  [12, 11],
];
for (let i of ex) {
  console.log(`n=${i[0]}, ${i[1]}  실행 결과 = ${solution(i[0])}`);
}
