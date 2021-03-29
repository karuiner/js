function geteven(n){
    let i=1;
    let sarr=[];
    for (i;i<=n; i++){
        if (!(i%2)) {
            sarr.push(i)
        }
    }
    return sarr
}
let arr=[];
arr=geteven(10)
console.log(arr)