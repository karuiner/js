function solution(weights, head2head) {
  var data = [],
    n = weights.length;
  for (let i = 0; i < n; i++) {
    let p = head2head[i],
      rn = 0,
      rw = 0,
      c = 0,
      r = 0;
    for (let j = 0; j < n; j++) {
      if (p[j] === "W") {
        c += weights[j] > weights[i] ? 1 : 0;
        rw += 1;
      } else if (p[j] === "L") {
        rn += 1;
      }
    }
    if (rw > 0) {
      r = (rw / (rw + rn)) * 100;
    }
    data.push([i + 1, r, c, weights[i]]);
  }
  data.sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] > b[1] ? -1 : 1;
    } else if (a[2] !== b[2]) {
      return a[2] > b[2] ? -1 : 1;
    } else if (a[3] !== b[3]) {
      return a[3] > b[3] ? -1 : 1;
    } else {
      return a[0] < b[0] ? -1 : 1;
    }
  });

  let ans = data.map((x) => x[0]);

  return ans;
}
let weights = [50, 82, 75, 120],
  head2head = ["NLWL", "WNLL", "LWNW", "WWLN"];
console.log(solution(weights, head2head)); //[3,4,1,2]
