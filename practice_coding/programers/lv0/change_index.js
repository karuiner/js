//인덱스 바꾸기
function solution(my_string, num1, num2) {
  let a = "",
    b = "",
    c = "",
    d = "",
    e = "",
    n = my_string.length;
  for (let i = 0; i < n; i++) {
    let k = my_string[i];
    if (i < num1) {
      a += k;
    } else if (i === num1) {
      b = k;
    } else if (i < num2) {
      c += k;
    } else if (i === num2) {
      d = k;
    } else {
      e += k;
    }
  }
  return a + d + c + b + e;
  // return my_string.slice(0, num1)+my_string[num2] + my_string.slice(num1+1, num2)+my_string[num1]+my_string.slice(num2+1)
}
