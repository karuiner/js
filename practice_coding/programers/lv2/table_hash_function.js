//테이블 해시 함수
// 주어진 조건에 따라 정렬한뒤
// 조건에 맞는 대상을
// 조건에 맞추어 계산 한뒤
// 결과를 돌려줌

function solution(data, col, row_begin, row_end) {
  let ans = -1;
  data.sort((a, b) => {
    let x = a[col - 1],
      y = b[col - 1];
    if (x < y) {
      return -1;
    } else if (x > y) {
      return 1;
    } else {
      return b[0] - a[0];
    }
  });

  for (let i = row_begin - 1; i < row_end; i++) {
    let k = 0;
    for (let j of data[i]) {
      k += j % (i + 1);
    }

    if (ans < 0) {
      ans = k;
    } else {
      ans = ans ^ k;
    }
  }

  return ans;
}
