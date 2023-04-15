//공원 산책
// 풀이 방법
// 주어진 명령을 수행하는 경우는
// 문제에서 제시한
// 공원 범위내에서의 이동일 것
// 이동중에 장애물이 존재하지 않는 경로 일것 이다.
// 따라서 주어진 이동 명령중
// 이동 범위내에 공원 외부 영역이 확인되거나
// 장애물이 존재하는 경우 이동을 진행하지 않게
// 함수를 구성하여
// 주어진 이동명령을 수행하고
// 해당 결과를 돌려주는 방식으로 문제 풀이를 마무리 할수 있다.

function solution(park, routes) {
  function check(x, y) {
    return park[y] && park[y][x] && park[y][x] !== "X";
  }

  function move(x, y, d, l) {
    let i = 1,
      type = 0;
    if (d === "N" || d === "W") {
      i = -1;
    }

    if (d === "E" || d === "W") {
      type = 1;
    }

    if (type) {
      let ck = true,
        [ix, iy] = [x, y];
      while (ix != x + i * l) {
        ix += i;
        if (!check(ix, iy)) {
          ck = false;
          break;
        }
      }
      if (ck) {
        [x, y] = [ix, iy];
      }
    } else {
      let ck = true,
        [ix, iy] = [x, y];
      while (iy != y + i * l) {
        iy += i;
        if (!check(ix, iy)) {
          ck = false;
          break;
        }
      }
      if (ck) {
        [x, y] = [ix, iy];
      }
    }
    return [x, y];
  }
  let [x, y] = [0, 0];
  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[0].length; j++) {
      if (park[i][j] === "S") {
        [x, y] = [j, i];
      }
    }
  }
  for (let i of routes) {
    let [d, l] = i.split(" ");
    [x, y] = move(x, y, d, Number(l));
  }

  return [y, x];
}
