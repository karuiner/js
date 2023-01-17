//n의 배수 고르기

function solution(n, numlist) {
  let ans = numlist.filter((x) => x % n === 0);
  return ans;
}
