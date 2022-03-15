//방금 그곡
function solution(m, musicinfos) {
  function convert(s) {
    let db = {
      C: "A",
      "C#": "B",
      D: "C",
      "D#": "D",
      E: "E",
      F: "F",
      "F#": "G",
      G: "H",
      "G#": "I",
      A: "J",
      "A#": "K",
      B: "L",
    };
    let i = 0,
      l = s.length,
      ns = "";
    while (i < l) {
      if (s[i + 1] !== "#") {
        ns += db[s[i]];
        i++;
      } else {
        ns += db[s.slice(i, i + 2)];
        i += 2;
      }
    }
    return ns;
  }

  let ans = []; //name,time
  function getmin(s, e) {
    let [a, b] = s.split(":"),
      [c, d] = e.split(":");
    a = Number(a) * 60 + Number(b);
    c = Number(c) * 60 + Number(d);
    return c - a;
  }
  m = convert(m);
  for (let i of musicinfos) {
    let [s, e, name, mel] = i.split(",");
    mel = convert(mel);
    let t = getmin(s, e),
      l = mel.length;
    let tm = "",
      r = Math.floor(t / l),
      c = t % l;
    for (let j = 0; j < r; j++) {
      tm += mel;
    }
    tm += mel.slice(0, c);

    if (tm.includes(m)) {
      if (ans.length === 0) {
        ans.push([name, t]);
      } else if (ans[0][1] < t) {
        ans = [[name, t]];
      } else if (ans[0][1] === t) {
        ans.push([name, t]);
      }
    }
  }

  return ans.length === 0 ? "(None)" : ans[0][0];
}
let values = [
  [
    "ABCDEFG",
    ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"],
    "HELLO",
  ],
  [
    "CC#BCC#BCC#BCC#B",
    ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"],
    "FOO",
  ],
  ["ABC", ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"], "WORLD"],
];

for (let [m, musicinfos, expected_result] of values) {
  console.log(
    `calculated_result : ${solution(
      m,
      musicinfos
    )}, expected_result : ${expected_result} `
  );
}
