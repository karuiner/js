let s = "1 X 2 + 3 / ( 4 + sin( 1 / 2 ) / 2 + ( 3 / 4 + 5 X ( 1 + 3.4 + cos( 0.5 ) X 2 ) ) ) + 3".split(" ");

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
    return lmap;
}

let lmap = mk_Lmap(s);
let ml = lmap.reduce((x, y) => (x > y ? x : y));
function get_Level(arr, lmap, ml) {
    let i, j, k, v;
    for (let comb of lmap.entries()) {
        [k, v] = comb;
        if (v === ml) {
            i = i === undefined ? k : i;
            j = j === undefined ? k : k - j === 1 ? k : j;
        }
    }
    return [arr.slice(i, j + 1), [i, j]];
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

let [cal_Arr_Test, cal_Arr_Index] = get_Level(s, lmap, ml);

function angle_function(arr) {
    let identifier = arr[0].slice(0, arr[0].length - 1),
        in_Arr = arr.slice(1, arr.length - 1),
        ans;
    let angle_obj = { sin: Math.sin, cos: Math.cos, tan: Math.cos };
    if (in_Arr.length === 1) {
        ans = angle_obj[identifier](parseFloat(in_Arr));
    } else if (in_Arr.leanth % 2) {
        ans = angle_obj[identifier](new_Calculate(in_Arr));
    } else {
        return "error";
    }
    return ans;
}

function main_Calculation(arr) {
    let ans = 0;
    let isAngle = arr[0].indexOf("(") >= 0,
        isParen = arr[0] === "(";

    if (isAngle) {
        ans = angle_function(arr);
    }

    if (isParen) {
        in_Arr = arr.slice(1, arr.length - 1);
        ans = new_Calculate(in_Arr);
    } else {
        ans = new_Calculate(arr);
    }

    return String(ans);
}

// console.log(main_Calculation(cal_Arr_Test));

let u = main_Calculation(cal_Arr_Test);
function put_Level(arr, lmap, index, v) {
    let [i, j] = index;
    arr.splice(i, j - i + 1, v);
    lmap.splice(i, j - i + 1, lmap[i] - 1);
    return [arr, lmap];
}
// console.log(s.join(" "));
// [s, lmap] = put_Level(s, lmap, cal_Arr_Index, u);
// console.log(s.join(" "));
// console.log(cal_Arr_Index);
// console.log(lmap);
// ml = lmap.reduce((x, y) => (x > y ? x : y));
// cal_Arr_Test = get_Level(s, lmap, ml).array();
// cal_Arr_Index = get_Level(s, lmap, ml).index();
// console.log(cal_Arr_Test);
// console.log(new_Calculate(cal_Arr_Test.slice(1, cal_Arr_Test.length - 1)));

function string_Caculation_f(str_Arr) {
    let lmap = mk_Lmap(str_Arr); // 주어진 수식의 레벨 맵을 작성
    let ml = lmap.reduce((x, y) => (x > y ? x : y));
    let ps_Area, ps_Index, ps_Value; // ps: present_stage 현재 단계를 표현하기위한 약어
    while (ml >= 0) {
        [ps_Area, ps_Index] = get_Level(str_Arr, lmap, ml);
        ps_Value = main_Calculation(ps_Area);
        [str_Arr, lmap] = put_Level(str_Arr, lmap, ps_Index, ps_Value);
        ml = lmap.reduce((x, y) => (x > y ? x : y));
    }
    return ps_Area;
}
console.log(string_Caculation_f(s));
