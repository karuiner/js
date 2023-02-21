//캐릭터의 좌표

function solution(keyinput, board) {
  let [xl, yl] = board,
    x = (xl - 1) / 2,
    y = (yl - 1) / 2,
    ans = [0, 0];
  for (let i of keyinput) {
    let [a, b] = ans;
    if (i === "up" && b + 1 <= y) {
      ans[1]++;
    } else if (i === "down" && b - 1 >= -y) {
      ans[1]--;
    } else if (i === "left" && a - 1 >= -x) {
      ans[0]--;
    } else if (i === "right" && a + 1 <= x) {
      ans[0]++;
    }
  }
  return ans;
}
