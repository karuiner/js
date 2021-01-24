// test string
let ts='abcdef';
let l=ts.length;
let h=parseInt((l-1)/2)
if (l%2){
    ans=ts[h]
} else {
    ans=ts.substr(h,2)
}
console.log(ans,l%2)


