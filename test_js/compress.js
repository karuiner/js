function compressString(str) {
    let ans='',d='',k=0,j;
    for (let i of str) {
      if (j === undefined) {
        j=i
        k+=1
        d+=i
      } else if (i === j) {
        k+=1
        d+=i
      } else {
        if (k >= 3) {
          ans+=`${k}${j}`
        } else {
          ans+=d
        }
        j=i
        k=1
        d=i
      }
      console.log(i,j,k,d,ans)
    }

    return ans+d
    // TODO: 여기에 코드를 작성합니다.
}

console.log(compressString('wwwggopp'))