function solution(id_list, report, k) {
  let ans = [];
  let db = {},
    name = {};
  for (let i = 0; i < id_list.length; i++) {
    name[id_list[i]] = i;
    ans.push(0);
  }
  for (let i of report) {
    let [a, b] = i.split(" ");
    if (db[b] === undefined) {
      db[b] = [0, {}];
    }
    if (db[b][1][a] === undefined) {
      db[b][0]++;
      db[b][1][a] = true;
    }
  }
  for (let i in db) {
    if (db[i][0] >= k) {
      for (let j in db[i][1]) {
        ans[name[j]]++;
      }
    }
  }

  return ans;
}
let a = ["muzi", "frodo", "apeach", "neo"],
  b = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
  k = 2;

console.log(solution(a, b, k)); //[2,1,1,0]
