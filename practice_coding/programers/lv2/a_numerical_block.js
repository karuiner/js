// 숫바 블록

//풀이 완료
function solution(begin, end) {
  let ans = [];
  function f(x) {
    if (x === 1) return 0;
    let ans = 1,
      s = 2;
    let z = Math.floor(Math.sqrt(x));
    for (let i = s; i <= z; i++) {
      if (x % i === 0 && Math.floor(x / i) <= 10000000) {
        ans = x / i;
        break;
      }
    }
    return ans;
  }
  for (let i = begin; i <= end; i++) {
    ans.push(f(i));
  }

  return ans;
}

// 풀이 시도2
function solution(begin, end) {
  let ans = [];
  function f(x) {
    if (x === 1) return 0;
    let ans = 1,
      s = 2;
    let z = Math.floor(Math.sqrt(x));
    if (x >= 20000000) {
      s = Math.floor(x / 10000000);
    }

    for (let i = s; i <= z; i++) {
      if (x % i === 0) {
        ans = x / i;
        break;
      }
    }
    return ans;
  }
  for (let i = begin; i <= end; i++) {
    ans.push(f(i));
  }

  return ans;
}

// 풀이 시도 1
function solution(begin, end) {
  let ans = [];
  function f(x) {
    if (x === 1) return 0;
    let ans = 1;
    let z = Math.floor(Math.sqrt(x));
    for (let i = 2; i <= z; i++) {
      if (x % i === 0) {
        ans = x / i;
        break;
      }
    }
    // let z=Math.floor(x/2);
    // for (let i=z ; i >=1 ;i--){
    //     if (x%i===0){
    //         let [a,b]=[i,x/i];
    //         [a,b]=a <b?[a,b]:[b,a];
    //         if (x >=b*2){
    //             ans=b
    //         }else{
    //             ans=a
    //         }
    //         break
    //     }
    // }
    return ans;
  }
  for (let i = begin; i <= end; i++) {
    ans.push(f(i));
  }

  return ans;
}
