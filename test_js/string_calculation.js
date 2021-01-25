let s = "1 * 2 + 3 / ( 4 + sin( 1 / 2 ) / 2 + ( 3 / 4 + 5 * ( 1 + 3.4 + cos( 0.5 ) * 2 ) ) ) + 3".split(" ");
let l = 0,
    lmap = [],
    imap = [],
    i = 0;
for (let j of s) {
    if (j.indexOf("(") >= 0) {
        l += 1;
        lmap.push(l);
        imap.push(i);
    } else if (j.indexOf(")") >= 0) {
        lmap.push(l);
        imap.push(i);
        l -= 1;
    } else {
        lmap.push(l);
        imap.push(i);
    }
    i++;
}

function zip(arr1, arr2) {
    let ans = [];
    if (arr1.length !== arr2.length) {
        return "not a same length";
    }
    for (let i = 0; i < arr1.length; i++) {
        ans.push([arr1[i], arr2[i]]);
    }

    return ans;
}

function unzip(arr1) {
    let ans1 = [],
        ans2 = [];
    for (let i = 0; i < arr1.length; i++) {
        ans1.push(arr1[i][0]);
        ans2.push(arr1[i][1]);
    }

    return [ans1, ans2];
}

function get_Level(arr, lmap, imap) {
    let mxl = lmap.reduce((x, y) => (x > y ? x : y));
    let amap = zip(imap, lmap);
    let area = amap.filter(([x, y]) => (y === mxl ? x : false));
    let [si, sl] = unzip(area);
    let i = si[0],
        j = si[si.length - 1];
    console.log(si);
    return {
        array: function () {
            return arr.slice(i, j + 1);
        },
        index: function () {
            return [i, j];
        },
    };
}

console.log(lmap, imap);
console.log(get_Level(s, lmap, imap).array());
console.log(get_Level(s, lmap, imap).index());

let cal_Arr_Test = get_Level(s, lmap, imap).array();
function main_Calculation(arr) {
    let sin = Math.sin,
        cos = Math.cos,
        tan = Math.tan,
        ans = 0;
    let isSin = arr[0].indexOf("sin") >= 0,
        isCos = arr[0].indexOf("cos") >= 0,
        isTan = arr[0].indexOf("tan") >= 0;
    if (isSin || isCos || isTan) {
        in_Arr = arr.slice(1, arr.length - 1);
        if (in_Arr.length == 1) {
            if (isSin) {
                ans = sin(parseFloat(in_Arr));
            } else if (isCos) {
                ans = cos(parseFloat(in_Arr));
            } else {
                ans = tan(parseFloat(in_Arr));
            }
        } else if (in_Arr.leanth % 2) {
        } else {
            return "error";
        }
    }

    return ans;
}

console.log(main_Calculation(cal_Arr_Test));

function put_Level(arr, lmap, imap, index, v) {}
