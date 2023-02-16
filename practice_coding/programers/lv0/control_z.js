//컨트롤 제트

function solution(s) {
  let ans = 0,
    z = 0;
  s = s.split(" ");
  for (let i of s) {
    if (i === "Z") {
      ans -= z;
    } else {
      ans += Number(i);
      z = Number(i);
    }
  }
  return ans;
}
