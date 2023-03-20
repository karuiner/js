//머쓱이보다 키 큰 사람
function solution(array, height) {
  let ans = 0;
  for (let i of array) {
    if (i > height) {
      ans++;
    }
  }
  return ans;
}
