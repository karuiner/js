//잘라서 배열로 저장하기
function solution(my_str, n) {
  let ans = [],
    i = 0,
    s = "";
  for (let w of my_str) {
    s += w;
    i++;
    if (i === n) {
      ans.push(s);
      s = "";
      i = 0;
    }
  }
  if (i > 0) {
    ans.push(s);
  }
  return ans;
}
