let a = [1, 2, 3];

let arr = [1, 2];

function permu(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        return arr.reduce(function (accx, x, i, narr) {
            let narr2 = [...narr];
            narr2.splice(i, 1);
            return accx.concat(
                permu(narr2).reduce(function (acc, v) {
                    if (Array.isArray(v)) {
                        acc.push([].concat(x, ...v));
                    } else {
                        acc.push([x, v]);
                    }
                    return acc;
                }, [])
            );
        }, []);
    }
}
// 2개 짜리 베열일때
// 1 이 들어오고
//      남은 배열을 만들면 2가 남는다.  2는 하나다 돌려준다.
// 2 가 들어온다
console.log(permu(a));

var permute = function (nums) {
    if (nums.length < 2) {
        return [nums];
    } else {
        return nums.reduce(function (accx, x, i, narr) {
            let narr2 = [...narr];
            narr2.splice(i, 1);
            return accx.concat(
                permute(narr2).reduce(function (acc, v) {
                    acc.push([].concat(x, ...v));
                    return acc;
                }, [])
            );
        }, []);
    }
};
