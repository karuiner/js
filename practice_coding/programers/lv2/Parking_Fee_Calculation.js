// 주차 요금 계산
function solution(fees, records) {
  let ans = [],
    db = {},
    etime = 1439;
  let [btime, bfee, utime, ufee] = fees;
  for (let i of records) {
    let [time, key, type] = i.split(" ");
    time = time.split(":").reduce((acc, x, i) => {
      if (i === 0) {
        x = Number(x) * 60;
      } else {
        x = Number(x);
      }
      return acc + x;
    }, 0);
    if (type === "IN") {
      if (db[key] === undefined) {
        db[key] = [[time, etime]];
      } else {
        db[key].push([time, etime]);
      }
    } else {
      let n = db[key].length;
      db[key][n - 1][1] = time;
    }
  }
  let key = Object.keys(db);
  key.sort((a, b) => a - b);
  for (let i of key) {
    let time = db[i].reduce((acc, [it, ot]) => acc + (ot - it), 0);
    let sub = Math.ceil((time - btime) / utime) * ufee;
    let fee = bfee + (sub < 0 ? 0 : sub);
    ans.push(fee);
  }

  return ans;
}

let values = [
  [
    [180, 5000, 10, 600],
    [
      "05:34 5961 IN",
      "06:00 0000 IN",
      "06:34 0000 OUT",
      "07:59 5961 OUT",
      "07:59 0148 IN",
      "18:59 0000 IN",
      "19:09 0148 OUT",
      "22:59 5961 IN",
      "23:00 5961 OUT",
    ],
    [14600, 34400, 5000],
  ],
  [
    [120, 0, 60, 591],
    [
      "16:00 3961 IN",
      "16:00 0202 IN",
      "18:00 3961 OUT",
      "18:00 0202 OUT",
      "23:58 3961 IN",
    ],
    [0, 591],
  ],
  [[1, 461, 1, 10], ["00:00 1234 IN"], [14841]],
];
for (let [fees, records, expected_result] of values) {
  console.log(
    `calculated_result : ${solution(
      fees,
      records
    )}, expected_result : ${expected_result} `
  );
}
