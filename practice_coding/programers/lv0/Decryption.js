//암호 해독
function solution(cipher, code) {
  let ans = "",
    n = cipher.length;
  for (let i = code; i <= n; i += code) {
    ans += cipher[i - 1];
  }

  return ans;
}
