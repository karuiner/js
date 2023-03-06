//2차원으로 만들기
function solution(num_list, n) {
  let ans = [[]],
    l = num_list.length;
  for (let i = 0; i < l; i++) {
    let [j, k] = [Math.floor(i / n), i % n];
    if (!ans[j]) {
      ans[j] = [];
    }
    ans[j][k] = num_list[i];
  }

  return ans;
}
