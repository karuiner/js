//카운트 다운

// 풀이시도 중
function solution(target) {
  let ans = [0, 0],
    ans2 = [0, 0],
    arr = Array(target + 1).fill(-1);

  //  function f(x){
  //       if (x >=60){
  //           let k=x-60
  //           if (arr[k]<0){
  //               arr[k]=[arr[x][0]+1,arr[x][1]]
  //               f(k)
  //           }else if (){

  //           }

  //       }
  //  }

  function f(x) {
    ans[0]++;
    if (x > 20 && x <= 60 && x % 3 === 0) {
      return 0;
    } else if (x > 20 && x <= 40 && x % 2 === 0) {
      return 0;
    } else if (x >= 50) {
      ans[1]++;
      return x - 50;
    } else if (x > 20) {
      ans[1]++;
      return x - 20;
    } else {
      ans[1]++;
      return 0;
    }
  }

  function f2(x) {
    ans2[0]++;
    if (x >= 60 && x % 3 === 0) {
      return x - 60;
    } else if (x >= 40 && x % 2 === 0) {
      return x - 40;
    } else if (x > 20 && x <= 60 && x % 3 === 0) {
      return 0;
    } else if (x > 20 && x <= 40 && x % 2 === 0) {
      return 0;
    } else if (x >= 50) {
      ans2[1]++;
      return x - 50;
    } else if (x > 20) {
      ans2[1]++;
      return x - 20;
    } else {
      ans2[1]++;
      return 0;
    }
  }
  let a = target;
  while (target > 0) {
    target = f(target);
  }
  while (a > 0) {
    a = f2(a);
  }

  return ans2[0] < ans[0] ? ans2 : ans;
}

// 풀이 시도 2
function solution(target) {
  let ans = [0, 0],
    ans2 = [0, 0];
  function f(x) {
    ans[0]++;
    if (x > 20 && x <= 60 && x % 3 === 0) {
      return 0;
    } else if (x > 20 && x <= 40 && x % 2 === 0) {
      return 0;
    } else if (x >= 50) {
      ans[1]++;
      return x - 50;
    } else if (x > 20) {
      ans[1]++;
      return x - 20;
    } else {
      ans[1]++;
      return 0;
    }
  }

  function f2(x) {
    ans2[0]++;
    if (x >= 60 && x % 3 === 0) {
      return x - 60;
    } else if (x >= 40 && x % 2 === 0) {
      return x - 40;
    } else if (x > 20 && x <= 60 && x % 3 === 0) {
      return 0;
    } else if (x > 20 && x <= 40 && x % 2 === 0) {
      return 0;
    } else if (x >= 50) {
      ans2[1]++;
      return x - 50;
    } else if (x > 20) {
      ans2[1]++;
      return x - 20;
    } else {
      ans2[1]++;
      return 0;
    }
  }
  let a = target;
  while (target > 0) {
    target = f(target);
  }
  while (a > 0) {
    a = f2(a);
  }

  return ans2[0] < ans[0] ? ans2 : ans;
}

// 풀이 시도 1
function solution(target) {
  let ans = [0, 0];
  function f(x) {
    ans[0]++;
    if (x > 20 && x <= 60 && x % 3 === 0) {
      return 0;
    } else if (x > 20 && x <= 40 && x % 2 === 0) {
      return 0;
    } else if (x >= 50) {
      ans[1]++;
      return x - 50;
    } else if (x > 20) {
      ans[1]++;
      return x - 20;
    } else {
      ans[1]++;
      return 0;
    }
  }
  while (target > 0) {
    target = f(target);
  }

  return ans;
}
