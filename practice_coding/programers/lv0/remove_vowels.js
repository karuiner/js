//모음 제거
function solution(my_string) {
  let ans = "",
    db = { a: true, e: true, i: true, o: true, u: true };
  for (let i of my_string) {
    if (!db[i]) {
      ans += i;
    }
  }

  return ans;
}
