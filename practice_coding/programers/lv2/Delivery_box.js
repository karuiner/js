// 택배 상자
function solution(order) {
  let ans = 0,
    c = 1,
    arr = [],
    n = order.length;

  for (let i of order) {
    if ((i < c || c === -1) && arr[0][0] !== i) {
      break;
    } else {
      if (arr.length === 0) {
        arr = [[i - 1, c], ...arr];
        c = i + 1 <= n ? i + 1 : -1;
      } else {
        if (c >= 0 && i >= c) {
          if (i > c) {
            if (i - 1 === c) {
              arr = [[i - 1, -1], ...arr];
            } else {
              arr = [[i - 1, c], ...arr];
            }
          }
          c = i + 1 <= n ? i + 1 : -1;
        } else {
          if (arr[0][1] === -1) {
            arr = arr.slice(1);
          } else {
            if (arr[0][0] - 1 === arr[0][1]) {
              arr[0] = [arr[0][1], -1];
            } else {
              arr[0][0]--;
            }
          }
        }
      }
      ans++;
    }
  }

  return ans;
}
