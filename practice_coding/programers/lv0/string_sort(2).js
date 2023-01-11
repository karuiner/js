//문자열 정렬하기(2)
function solution(my_string) {
  let ans = "",
    s = my_string.toLowerCase();
  let p = s.split("");
  p.sort();
  return p.join("");
}
