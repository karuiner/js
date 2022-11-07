// 숫바 블록

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
