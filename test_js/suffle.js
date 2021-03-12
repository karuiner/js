function suffle(n) {
    let arr = Array(n).fill(0),
        result = [];
    arr = arr.map((x, i) => i);
    let k = 0;
    while (k < n) {
        if (result.length === 0) {
            arr.forEach((x) => result.push([x]));
        } else {
            result = result.reduce((acc, x) => {
                let sub = arr.filter((xx) => !x.includes(xx));
                let p = sub.map((xx) => x.concat(xx));
                return [].concat(acc, p);
            }, []);
        }
        k++;
    }
    return result;
}

function suffle2(n) {
    let arr = Array(n).fill(0),
        result = [];
    arr = arr.map((x, i) => i);
    let k = 0;
    while (k < n) {
        if (result.length === 0) {
            arr.forEach((x) => result.push([x]));
        } else {
            result = result.reduce((acc, x) => {
                let sub = arr.filter((xx) => !x.includes(xx) && Math.abs(x[k - 1] - xx) > 1);
                let p = sub.map((xx) => x.concat(xx));

                return [].concat(acc, p);
            }, []);
        }
        k++;
    }
    return result;
}

// console.log(suffle(1));
// console.log(suffle(2));
console.log(suffle2(9));
// console.log(suffle(4));
// console.log(suffle(5));
// console.log(suffle(6));
// console.log(suffle(7));
