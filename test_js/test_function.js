function push(a) {
    return function (x) {
        let l = a.length;
        a[l] = x;
        return a.length;
    };
}
let k = [];
push(k)(0);
push(k)(123);
console.log(k);

function unshift(a) {
    return function (x) {
        let b = [...a];
        a[0] = x;
        for (let i = 0; i < b.length; i++) {
            a[i + 1] = b[i];
        }
        return a.length;
    };
}
k = [];
unshift(k)(0);
unshift(k)(123);
console.log(k);
