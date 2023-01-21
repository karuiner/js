//가장 큰 수 찾기
function solution(array) {
  let ans = [-1, -1];
  for (let i = 0; i < array.length; i++) {
    let x = array[i];
    if (x > ans[0]) {
      ans = [x, i];
    }
  }
  return ans;
}
