//오픈 채팅방

// 풀이 완료

function solution(record) {
  let db = {},
    ans = [];
  for (let i of record) {
    let [cmd, id, name] = i.split(" ");
    if (cmd === "Change") {
      db[id] = name;
    } else if (cmd === "Enter") {
      db[id] = name;
      ans.push([id, "님이 들어왔습니다."]);
    } else {
      ans.push([id, "님이 나갔습니다."]);
    }
  }
  for (let i = 0; i < ans.length; i++) {
    let [id, s] = ans[i];
    ans[i] = db[id] + s;
  }

  return ans;
}
