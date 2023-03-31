//문자열 정렬하기 (1)
function solution(my_string) {
  let ans = [];
  for (let i of my_string) {
    let k = Number(i);
    if (!Number.isNaN(k)) {
      ans.push(k);
    }
  }
  ans.sort((a, b) => a - b);
  return ans;
}
