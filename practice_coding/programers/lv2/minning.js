//광석 캐기

// 풀이 시도 1 실패
function solution(picks, minerals) {
  let ans = 0,
    idx = 0;
  function check(idx) {
    let ans = [0, 0, 0];
    for (let i = idx; i < idx + 5; i++) {
      if (minerals[i]) {
        if (picks[0] > 0) {
          ans[0]++;
        }
        if (picks[1] > 0) {
          ans[1] += minerals[i] !== "diamond" ? 1 : 5;
        }
        if (picks[2] > 0) {
          if (minerals[i] === "diamond") {
            ans[2] += 25;
          } else if (minerals[i] === "iron") {
            ans[2] += 5;
          } else {
            ans[2]++;
          }
        }
      } else {
        break;
      }
    }
    return ans;
  }

  while (idx < minerals.length) {
    let k = check(idx);
    let min = 125,
      p = -1;
    for (let i = 0; i < 3; i++) {
      if (k[i] > 0 && k[i] < min) {
        min = k[i];
        p = i;
      }
    }
    if (p >= 0) {
      ans += k[p];
      picks[p]--;
    }
    idx += 5;
  }

  return ans;
}
