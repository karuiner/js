//외계인 사전
function solution(spell, dic) {
  let ans = 2,
    l = spell.length;
  for (let i of dic) {
    if (i.length === l) {
      let db = {},
        check = true;
      for (let j of i) {
        if (db[j] === undefined) {
          db[j] = true;
        } else {
          check = false;
        }
      }

      if (check) {
        let check2 = true;
        for (let k of spell) {
          if (!db[k]) {
            check2 = false;
            break;
          }
        }
        if (check2) {
          ans = 1;
        }
      }
    }
    if (ans === 1) {
      break;
    }
  }

  return ans;
}
