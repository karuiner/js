let s = "1 * 2 + 3 / ( 4 + sin( 1 / 2 ) / 2 + ( 3 / 4 + 5 * ( 1 + 3.4 + cos( 0.5 ) * 2 ) ) ) + 3".split(" ");

function mk_Lmap(s) {
    let l = 0,
        lmap = [],
        ml = 0;
    for (let j of s) {
        if (j.indexOf("(") >= 0) {
            l += 1;
            lmap.push(l);
            ml = l > ml ? l : ml;
        } else if (j.indexOf(")") >= 0) {
            lmap.push(l);
            l -= 1;
        } else {
            lmap.push(l);
        }
    }
    return {
        map: function () {
            return lmap;
        },
        max: function () {
            return ml;
        },
    };
}

let lmap = mk_Lmap(s).map();
let ml = mk_Lmap(s).max();

function get_Level(arr, lmap, ml) {
    let i, j, k, v;
    for (let comb of lmap.entries()) {
        [k, v] = comb;
        if (v === ml) {
            i = i === undefined ? k : i;
            j = j === undefined ? k : k - j === 1 ? k : j;
        }
    }
    return {
        array: function () {
            return arr.slice(i, j + 1);
        },
        index: function () {
            return [i, j];
        },
    };
}

function calculate(n1, operator, n2) {
    let result = 0;
    // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
    // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
    if (operator === "+") {
        result = parseFloat(n1) + parseFloat(n2);
    } else if (operator === "-") {
        result = parseFloat(n1) - parseFloat(n2);
    } else if (operator === "X") {
        result = parseFloat(n1) * parseFloat(n2);
    } else if (operator === "/") {
        result = parseFloat(n1) / parseFloat(n2);
    }

    return String(result);
}

function new_Calculate(inp) {
    // 사칙 연산 우선 순위대로 계산하는 코드작성
    // 입력 inp는 arr을 가정
    //교환시 splice 활용
    let pI,
        mI,
        tI,
        dI,
        cI,
        cc = 0,
        cm = inp.length; // pulse index, minus index, times index, divide index
    while (inp.length > 1 && cc < cm) {
        pI = inp.indexOf("+");
        mI = inp.indexOf("-");
        tI = inp.indexOf("X");
        dI = inp.indexOf("/");
        if (tI >= 0 || dI >= 0) {
            cI = tI < dI ? (tI >= 0 ? tI : dI) : dI >= 0 ? dI : tI;
            [num1, intermediateOperator, num2] = inp.slice(cI - 1, cI + 2);
            inp.splice(cI - 1, 3, calculate(num1, intermediateOperator, num2));
        } else {
            cI = mI < pI ? (mI >= 0 ? mI : pI) : pI >= 0 ? pI : mI;
            [num1, intermediateOperator, num2] = inp.slice(cI - 1, cI + 2);
            inp.splice(cI - 1, 3, calculate(num1, intermediateOperator, num2));
        }
        cc++;
    }

    return cc < cm ? inp : "error";
}

// console.log(lmap);
// console.log(get_Level(s, lmap, ml).array());
// console.log(get_Level(s, lmap, ml).index());

let cal_Arr_Test = get_Level(s, lmap, ml).array();
let cal_Arr_Index = get_Level(s, lmap, ml).index();

function main_Calculation(arr) {
    let sin = Math.sin,
        cos = Math.cos,
        tan = Math.tan,
        ans = 0;
    let isSin = arr[0].indexOf("sin") >= 0,
        isCos = arr[0].indexOf("cos") >= 0,
        isTan = arr[0].indexOf("tan") >= 0,
        isAsin = arr[0].indexOf("asin") >= 0,
        isAcos = arr[0].indexOf("acos") >= 0,
        isAtan = arr[0].indexOf("atan") >= 0;

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

// console.log(main_Calculation(cal_Arr_Test));

let u = main_Calculation(cal_Arr_Test);
function put_Level(arr, lmap, index, v) {
    let [i, j] = index;
    arr.splice(i, j - i + 1, v);
    lmap.splice(i, j - i + 1, lmap[i] - 1);
    return [arr, lmap];
}
console.log(s.join(" "));
[s, lmap] = put_Level(s, lmap, cal_Arr_Index, u);
console.log(s.join(" "));
console.log(cal_Arr_Index);
console.log(lmap);

function string_Caculation_f(str_Arr) {
    let lmap = mk_Lmap(str_Arr).map(); // 주어진 수식의 레벨 맵을 작성
    let ml = mk_Lmap(str_Arr).max(); // 주어진 수식의 최대 연산 레벨을 결정
    let ps_Area,
        ps_Index,
        ps_Value,
        kk = 0; // ps: present_stage 현재 단계를 표현하기위한 약어
    while (ml >= 0 && kk < 100) {
        ps_Area = get_Level(str_Arr, lmap, ml).array();
        ps_Index = get_Level(str_Arr, lmap, ml).index();
        ps_Value = main_Calculation(ps_Area);
        [str_Arr, lmap] = put_Level(str_Arr, lmap, ps_Index, ps_Value);

        kk++;
    }
    console.log();
}
