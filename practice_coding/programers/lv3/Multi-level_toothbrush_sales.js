//다단계 칫솔 판매

function solution(enroll, referral, seller, amount) {
  let db = {},
    ans = [];
  for (let i = 0; i < enroll.length; i++) {
    db[enroll[i]] = { index: i, top: referral[i] };
    ans[i] = 0;
  }
  function f(s, v) {
    let v1 = Math.floor(v * 0.1),
      v2 = v - v1;
    ans[db[s].index] += v2;
    if (db[s].top !== "-" && v1 > 0) {
      f(db[s].top, v1);
    }
  }

  for (let i = 0; i < seller.length; i++) {
    f(seller[i], amount[i] * 100);
  }

  return ans;
}

let values = [
  [
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["young", "john", "tod", "emily", "mary"],
    [12, 4, 2, 5, 10],
    [360, 958, 108, 0, 450, 18, 180, 1080],
  ],
  [
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["sam", "emily", "jaimie", "edward"],
    [2, 3, 5, 4],
    [0, 110, 378, 180, 270, 450, 0, 0],
  ],
];
for (let [enroll, referral, seller, amount, expected_result] of values) {
  console.log(
    `calculated_result : ${solution(
      enroll,
      referral,
      seller,
      amount
    )}, expected_result : ${expected_result} `
  );
}
