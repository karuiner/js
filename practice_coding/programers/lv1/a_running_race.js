// 달리기 경주
// 해당선수가 앞의 선수를 제칠때 마다 선수의 이름부르므로
// 선수의 순서를 담은 객체를 구성하고
// 선수 이름이 불리울때마다 앞선수와  위치를 스왑 한다.
// 최종 결과 까지 반복하면 문제 풀이 완료
function solution(players, callings) {
  var db = {};
  for (let i = 0; i < players.length; i++) {
    db[players[i]] = i;
  }

  function swap(s) {
    let i = db[s];
    let k = players[i];
    db[s] = i - 1;
    db[players[i - 1]] = i;
    players[i] = players[i - 1];
    players[i - 1] = k;
  }

  for (let i of callings) {
    swap(i);
  }

  return players;
}
