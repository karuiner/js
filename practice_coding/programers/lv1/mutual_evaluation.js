function solution(scores) {
  function score(v) {
    let ans = "F";
    if (v >= 90) {
      ans = "A";
    } else if (v >= 80) {
      ans = "B";
    } else if (v >= 70) {
      ans = "C";
    } else if (v >= 50) {
      ans = "D";
    }
    return ans;
  }
  let ans = "";

  for (let i = 0; i < scores.length; i++) {
    let ts = 0,
      n = scores.length,
      min = [100, 0, 0],
      max = [0, 0, 0];
    for (let j = 0; j < n; j++) {
      let c = scores[j][i];

      if (c < min[0]) {
        min = [c, 1, j];
      } else if (c === min[0]) {
        min[1]++;
      }
      if (c > max[0]) {
        max = [c, 1, j];
      } else if (c === max[0]) {
        max[1]++;
      }
      ts += c;
    }
    if (min[2] === i && min[1] === 1) {
      ts -= min[0];
      n--;
    }
    if (max[2] === i && max[1] === 1) {
      ts -= max[0];
      n--;
    }
    ans += score(ts / n);
  }
  return ans;
}
let score = [
  [100, 90, 98, 88, 65],
  [50, 45, 99, 85, 77],
  [47, 88, 95, 80, 67],
  [61, 57, 100, 80, 65],
  [24, 90, 94, 75, 65],
];
console.log(solution(score)); //"FBABD"
