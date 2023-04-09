//대충 만든 자판
// 풀이 방식
// 자판 입력은 어느 버튼이든해당 문자까지 클릭후 초기화 된다.
// 따라서 해당문자까지 걸리는 최소클륵수를 주어진 자판에 따라 계산한뒤  객체에 저장한다.
// 이후 입력해야할 문자열을 주어진 최소 클릭수 객체를 사용하여 소요되는 최소 클릭수를 계산한다.
// 이때 객체에 없는 문자열을 필요로 할경우 해당 문자의 결과는 -1을 제공하고 다음 문자열로 넘어간다.
// 이러한 과정으로 문제풀이를 마무리하였다.
function solution(keymap, targets) {
  let ans = [],
    db = {};
  for (let i of keymap) {
    let c = 0;
    for (let j of i) {
      c++;
      if (db[j] === undefined) {
        db[j] = c;
      } else if (c < db[j]) {
        db[j] = c;
      }
    }
  }
  for (let i of targets) {
    let k = 0;
    for (let j of i) {
      if (db[j]) {
        k += db[j];
      } else {
        k = -1;
        break;
      }
    }

    ans.push(k);
  }

  return ans;
}
