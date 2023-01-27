//대문자와 소문자
function solution(my_string) {
  let ans = "";
  function change(s) {
    let k = s.toLowerCase();
    if (s === s.toLowerCase()) {
      return s.toUpperCase();
    } else {
      return k;
    }
  }

  for (let i of my_string) {
    ans += change(i);
  }

  return ans;
}
