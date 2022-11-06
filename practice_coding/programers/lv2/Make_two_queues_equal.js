//두 큐 합 같게 만들기

// 풀이 고민중
function solution(queue1, queue2) {
  let ans = 0,
    sum = 0,
    s1 = 0,
    s2 = 0,
    max = 0,
    min = Infinity,
    n = queue1.length;
  for (let i = 0; i < n; i++) {
    let a = queue1[i],
      b = queue2[i];
    s1 += a;
    s2 += b;
    max = Math.max(a, b, max);
    min = Math.min(a, b, min);
    sum += a + b;
  }
  let hf = sum / 2;
  if (sum % 2 === 0 && hf >= max) {
    let arr = [],
      i = 0,
      j = 0,
      ie = 0;
    if (s1 < s2) {
      arr = [...queue1, ...queue2];
      j = queue1.length;
      i = j - 1;
    } else if (s2 < s1) {
      arr = [...queue2, ...queue1];
      j = queue2.length;
      i = j - 1;
    }

    while (s1 !== s2) {
      if (s1 < s2) {
      } else {
      }
    }

    //         while (s1 !== s2){
    //             if (s1 <s2){
    //                 let k=queue2[0]
    //                 queue2=queue2.slice(1)
    //                 s2-=k
    //                 s1+=k
    //                 queue1.push(k)
    //             }else{
    //                 let k=queue1[0]
    //                 queue1=queue1.slice(1)
    //                 s1-=k
    //                 s2+=k
    //                 queue2.push(k)
    //             }

    //             if (s1 ===0 ||s2===0){
    //                 ans=-1
    //                 break
    //             }else{
    //                 ans++
    //             }
    //         }
  } else {
    ans = -1;
  }

  return ans;
}

// 풀이 시도 2
function solution(queue1, queue2) {
  let ans = 0,
    sum = 0,
    s1 = 0,
    s2 = 0,
    max = 0,
    min = Infinity,
    n = queue1.length;
  for (let i = 0; i < n; i++) {
    let a = queue1[i],
      b = queue2[i];
    s1 += a;
    s2 += b;
    max = Math.max(a, b, max);
    min = Math.min(a, b, min);
    sum += a + b;
  }
  let hf = sum / 2;
  if (sum % 2 === 0 && hf >= max) {
    while (s1 !== s2) {
      if (s1 < s2) {
        let k = queue2[0];
        queue2 = queue2.slice(1);
        s2 -= k;
        s1 += k;
        queue1.push(k);
      } else {
        let k = queue1[0];
        queue1 = queue1.slice(1);
        s1 -= k;
        s2 += k;
        queue2.push(k);
      }

      if (s1 === 0 || s2 === 0) {
        ans = -1;
        break;
      } else {
        ans++;
      }
    }
  } else {
    ans = -1;
  }

  return ans;
}

// 풀이 시도 1
function solution(queue1, queue2) {
  let ans = 0,
    sum = 0,
    s1 = 0,
    s2 = 0,
    max = 0,
    min = Infinity,
    n = queue1.length;
  for (let i = 0; i < n; i++) {
    let a = queue1[i],
      b = queue2[i];
    s1 += a;
    s2 += b;
    max = Math.max(a, b, max);
    min = Math.min(a, b, min);
    sum += a + b;
  }
  let hf = sum / 2;
  if (sum % 2 === 0 && hf >= max) {
  } else {
    ans = -1;
  }

  return ans;
}
