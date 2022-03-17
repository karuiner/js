//이중우선순위큐
function solution(operations) {
  let q = [],
    l = 0;
  for (let i of operations) {
    if (i[0] === "I") {
      let s = Number(i.slice(2));
      q.push(s);
      q.sort((a, b) => a - b);
      l++;
    } else if (i === "D -1") {
      q = q.slice(1);
      l = l - 1 < 0 ? 0 : l - 1;
    } else {
      q = q.slice(0, -1);
      l = l - 1 < 0 ? 0 : l - 1;
    }
  }

  return l === 0 ? [0, 0] : [q[l - 1], q[0]];
}
let values = [
  [
    ["I 16", "D 1"],
    [0, 0],
  ],
  [
    ["I 7", "I 5", "I -5", "D -1"],
    [7, 5],
  ],
];
for (let [operations, expected_result] of values) {
  console.log(
    `calculated_result : ${solution(
      operations
    )}, expected_result : ${expected_result} `
  );
}
