//모음 사전

//풀이 시도 1 -  완전 탐색을 구현해봄.
function solution(word) {
  let ans = 1,
    s = "A",
    next = { A: "E", E: "I", I: "O", O: "U", U: "" };

  function f(s) {
    if (s.length < 5) {
      s += "A";
    } else {
      let ns = "",
        up = false;
      if (s[4] === "U") {
        for (let i = 4; i >= 0; i--) {
          if (s[i] === "U") {
            up = true;
            ns = next[s[i]] + ns;
          } else if (up) {
            ns = next[s[i]] + ns;
            up = false;
          } else {
            ns = s[i] + ns;
          }
        }
        s = ns;
      } else {
        s = s.slice(0, 4) + next[s[4]];
      }
    }
    return s;
  }
  while (s !== word) {
    s = f(s);
    ans++;
  }

  return ans;
}
