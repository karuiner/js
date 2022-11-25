//명예의 전당 (1)

//풀이 완료
function solution(k, score) {
  let ans = [],
    arr = [];

  for (let i of score) {
    arr.push(i);
    arr.sort((a, b) => a - b);
    if (arr.length > k) {
      arr = arr.slice(1);
    }
    ans.push(arr[0]);
  }

  return ans;
}
