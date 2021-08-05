// 부족한 금액 계산하기
function solution(price, money, count) {
  let v = count * (count + 1) * 0.5 * price;
  var answer = money >= v ? 0 : v - money;
  return answer;
}
let price = 3,
  money = 20,
  count = 4;
let ans = solution(price, money, count);
console.log(ans);
