//문자열 계산하기
function solution(my_string) {
  let arr = my_string.split(" ");

  function cal(a, b, c) {
    if (b === "+") {
      return Number(a) + Number(c);
    } else {
      return Number(a) - Number(c);
    }
  }
  function f(arr) {
    if (arr.length > 3) {
      let [a, b, c] = [arr[0], arr[1], arr[2]];
      let d = cal(a, b, c);
      return f([d, ...arr.slice(3)]);
    } else {
      let [a, b, c] = [arr[0], arr[1], arr[2]];
      return cal(a, b, c);
    }
  }

  return f(arr);
}
