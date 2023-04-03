//배열 뒤집기

function solution(num_list) {
  let ans = [],
    n = num_list.length;
  for (let i = 0; i < n; i++) {
    ans[i] = num_list[n - 1 - i];
  }
  return ans;
}
