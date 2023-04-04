//가위 바위 보
function solution(rsp) {
  let win = { 2: "0", 0: "5", 5: "2" };
  let ans = "";
  for (let i of rsp) {
    ans += win[i];
  }
  return ans;
}
