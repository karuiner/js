// 7의 갯수

function solution(array) {
  let ans = 0;
  for (let i of array) {
    let s = `${i}`;
    for (let j of s) {
      if (j === "7") {
        ans++;
      }
    }
  }
  return ans;
}
