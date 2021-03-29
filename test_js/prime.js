function check(n){
    let i=2;
    for (i;i<=Math.floor(n**0.5);i++)
        if (n%i == 0){
            return false
        }
    return true
}
let i=2;
let arr=[];
for (i ; i<= 100; i++){
    if (check(i)){
        arr.push(i)
    }
    
}
console.log(arr)