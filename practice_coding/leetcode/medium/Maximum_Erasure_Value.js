/*
 *
 * @param {number[]} nums
 * @return {number}
 */
// 시도 2
var maximumUniqueSubarray = function (nums) {
  let ans = 0,
    n = nums.length,
    db = {},
    max = 0;
  for (let i = 0; i < n; i++) {
    let k = nums[i];
    if (db[k] === undefined) {
      ans += k;
      db[k] = i;
      if (ans > max) {
        max = ans;
      }
    } else {
      let j = db[k],
        s = 0;
      for (let i in db) {
        if (db[i] <= j) {
          s += Number(i);
          delete db[i];
        }
      }
      ans = ans - s + k;
      db[k] = i;
    }
  }

  //     for (let i =0; i <n;i++){
  //         let k=nums[i]
  //         if (db[k]===undefined){
  //             ans+=k
  //             db[k]=ans
  //             if (ans>max){
  //                 max=ans
  //             }
  //         }else{
  //             ans-=db[k]
  //             ans+=k
  //             db[k]=ans
  //         }

  //     }

  return ans > max ? ans : max;
};

// 시도 1
var maximumUniqueSubarray = function (nums) {
  let ans = 0,
    n = nums.length,
    db = {},
    max = 0;
  for (let i = 0; i < n; i++) {
    let k = nums[i];
    if (db[k] === undefined) {
      ans += k;
      db[k] = ans;
      if (ans > max) {
        max = ans;
      }
    } else {
      ans -= db[k];
      ans += k;
      db[k] = ans;
    }
    console.log(ans, max, k, db[k]);
  }

  return max;
};
