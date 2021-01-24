function f(p) {
    if (['+','/','-','*'].includes(p)) {
        return false
    }
    return true

}

let a='12+4/6+*456/---'.split("");
let b=a.map((x) => f(x));

console.log(a,b)
for (let i=0;i< a.length;i++){
    console.log(a[i],b[i])
}
console.log(f(undefined))