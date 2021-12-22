// 풀이중
/*
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let db = {};
  function f(arr, x, com) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
      if (x - arr[i] === 0) {
        let sub = [...com, arr[i]];
        sub.sort((a, b) => a - b);
        if (db[sub] === undefined) {
          ans.push(sub);
          db[sub] = true;
        }
      } else if (x - arr[i] > 0) {
        let sub = f([...arr.slice(0, i), ...arr.slice(i + 1)], x - arr[i], [
          ...com,
          arr[i],
        ]);
        ans = ans.concat(sub);
      }
    }
    return ans;
  }

  function f2(arr, x, t) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
      if (x - arr[i] === t) {
        let sub = [...arr.slice(0, i), ...arr.slice(i + 1)];
        sub.sort((a, b) => a - b);
        if (db[sub] === undefined) {
          ans.push(sub);
          db[sub] = true;
        }
      } else if (x - arr[i] > t) {
        let sub = f2([...arr.slice(0, i), ...arr.slice(i + 1)], x - arr[i], t);
        ans = ans.concat(sub);
      }
    }
    return ans;
  }
  let p = candidates.reduce((acc, x) => acc + x, 0);
  console.log(p);
  // if (p ===target){
  //     return [candidates]
  // }else if (p <target){
  //     return []
  // }
  // return f(candidates,target,[])
  //    return f2(candidates,p,target)
};
