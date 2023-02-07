//로그인 성공?
function solution(id_pw, db) {
  let ans = "fail",
    [pid, ppw] = id_pw;
  for (let [id, pw] of db) {
    if (id === pid) {
      ans = ppw === pw ? "login" : "wrong pw";
    }
  }

  return ans;
}
