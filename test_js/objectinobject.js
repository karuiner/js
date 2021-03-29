let a = {};
let k = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 6],
];
k.forEach(function (ik) {
    let b = a;
    ik.forEach(function (x, i, collec) {
        if (i < 3) {
            if (b[x] === undefined) {
                b[x] = {};
                b = b[x];
            } else {
                b = b[x];
            }
        } else if (i < ik.length - 1) {
            if (b[x] === undefined) {
                b[x] = [collec[i + 1]];
            } else {
                b[x] = b[x].concat(collec[i + 1]);
            }
        }
        console.log(x, i, b);
    });
});

console.log(a["1"], a["1"]["2"], a["1"]["2"]["3"]);
