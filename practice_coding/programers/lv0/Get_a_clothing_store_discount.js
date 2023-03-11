// 옷가게 할인 받기

function solution(price) {
  function discount(v) {
    if (v >= 500000) {
      return 0.8 * v;
    } else if (v >= 300000) {
      return 0.9 * v;
    } else if (v >= 100000) {
      return 0.95 * v;
    } else {
      return v;
    }
  }
  return Math.floor(discount(price));
}
