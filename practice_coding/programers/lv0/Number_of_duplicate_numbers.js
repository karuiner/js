//중복된 숫자 개수
function solution(array, n) {
  let ans = 0;
  for (let i of array) {
    if (i === n) {
      ans++;
    }
  }
  return ans;
}
