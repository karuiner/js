function range(a, b, c) {
    let i,
        j,
        k,
        ans = [];
    if (b === undefined && c === undefined) {
        [i, j, k] = [0, a, 1];
    } else if (c === undefined) {
        [i, j, k] = [a, b, 1];
    } else {
        [i, j, k] = [a, b, c];
    }
    for (; i < j; i += k) {
        ans.push(i);
    }
    return ans;
}

console.log(range(10));
console.log(range(1, 10));
console.log(range(0, 10, 3));

function enumerate(arr) {
    let ans = [];
    let j = 0;
    for (let i of arr) {
        ans.push([j, i]);
        j++;
    }
    return ans;
}
console.log(enumerate(range(10, 20)));
let i, j;
for ([i, j] of enumerate(range(10, 20))) {
    console.log(i, j);
}

function enumerate2(arr) {
    let ans = [];
    let index = range(arr.length);
    for (let i of index) {
        ans.push([i, arr[i]]);
    }
    return ans;
}

console.log(enumerate2(range(10, 20)));

exports.range = range;
exports.enumerate = enumerate;
