//가까운 수
function solution(array, n) {
  let ans = 0,
    min = n + 100;
  for (let i of array) {
    let k = Math.abs(i - n);
    if (k < min) {
      min = k;
      ans = i;
    } else if (k === min && i < ans) {
      ans = i;
    }
  }
  return ans;
}
