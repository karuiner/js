//타겟 넘버
function solution(numbers, target) {
  var n = numbers.length;
  function f(i, x) {
    let ans = 0;
    if (i < n) {
      ans += f(i + 1, x + numbers[i]);
      ans += f(i + 1, x - numbers[i]);
    } else if (x === target) {
      ans++;
    }
    return ans;
  }
  return f(0, 0);
}
let numbers = [1, 1, 1, 1, 1],
  target = 3;
console.log(`Calculated : ${solution(numbers, target)}\nExpected : 5`); //5
