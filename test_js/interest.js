function geti(s) {
    let ans=1,yr=0;
    while (ans <2) {
        ans= ans*(1+s);
        yr+=1
    }
    return yr
}
let zs=0.01
console.log(`이자율 ${zs*100}% 일때 , 원금의 두배가 되려면 ${geti(zs)}년이 걸린다. `)