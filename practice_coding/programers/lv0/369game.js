//369 게임
function solution(order) {
  let ans = 0;
  for (let i of `${order}`) {
    if (Number(i) > 0 && Number(i) % 3 === 0) {
      ans++;
    }
  }

  return ans;
}
