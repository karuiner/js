//OX퀴즈
function solution(quiz) {
  let ans = [];
  function cal(s) {
    let [a, b, c, d, e] = s.split(" ");
    if (b === "+") {
      return Number(e) === Number(a) + Number(c);
    } else {
      return Number(e) === Number(a) - Number(c);
    }
  }
  for (let i of quiz) {
    let k = cal(i) ? "O" : "X";
    ans.push(k);
  }

  return ans;
}
