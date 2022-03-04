// 가장 큰 수
function solution(numbers) {
  //실패 1
  // numbers.sort((a,b)=>{
  //     let[ca,cb]=[`${a}`,`${b}`]
  //     if (ca[0]> cb[0]){
  //         return -1
  //     }else if (ca[0]< cb[0]){
  //         return 1
  //     }else{
  //         let l=Math.max(ca.length,cb.length)
  //         let pa=ca.padEnd(l,ca[0]),pb=cb.padEnd(l,cb[0])
  //         return Number(pa)< Number(pb)?1:-1
  //     }
  // }   )
  // console.log(numbers)
  // return numbers.join('')
  // 실패 2
  // function f(arr,s){
  //     let ans=''
  //     if (arr.length ===1){
  //         return `${s}${arr[0]}`
  //     }else{
  //         for (let i=0; i <arr.length;i++){
  //             let sub=f([...arr.slice(0,i), ...arr.slice(i+1)],`${s}${arr[i]}`)
  //             if (ans===''){
  //                 ans=sub
  //             }else{
  //                 ans=ans>sub?ans:sub
  //             }
  //         }
  //     }
  //     return ans
  // }
  // return f(numbers,'')

  numbers.sort((a, b) => (`${a}${b}` > `${b}${a}` ? -1 : 1));
  let ans = numbers.join("");
  let k = ans.length,
    sub = "".padStart(k, "0");
  return ans === sub ? "0" : ans;
}
let values = [
  [[6, 10, 2], "6210"],
  [[3, 30, 34, 5, 9], "9534330"],
];
for (let [s, expected_result] of values) {
  console.log(
    `calculated_result : ${solution(s)}, expected_result : ${expected_result} `
  );
}
