//호텔 대실
//풀이 완료
// 시작 시간 순서대로 정렬
// 현재 채워진 방의 사용가능시간 이상인 시작시간을 가진 방이 존재하면
// 해당 방을 사용하여 새로이 시간을 갱신
// 사용가능한 방이 없으면 새로 방을 추가
// 하는 방식으로 문제 풀이

function solution(book_time) {
  let ans = 0,
    arr = [];
  function getTime(t) {
    let [h, m] = t.split(":");
    return Number(h) * 60 + Number(m);
  }
  let times = book_time.map(([a, b]) => [getTime(a), getTime(b)]);
  times.sort((a, b) => a[0] - b[0]);
  for (let [a, b] of times) {
    let check = false;
    for (let j = 0; j < ans; j++) {
      if (a >= arr[j]) {
        arr[j] = b + 10;
        check = true;
        break;
      }
    }
    if (!check) {
      arr[ans] = b + 10;
      ans++;
    }
  }

  return ans;
}
