//문자열안에 문자열

function solution(str1, str2) {
  let n = str1.length,
    n2 = str2.length;
  let ans = 2;
  for (let i = 0; i <= n - n2; i++) {
    if (str2 === str1.slice(i, i + n2)) {
      ans = 1;
      break;
    }
  }
  return ans;
}
