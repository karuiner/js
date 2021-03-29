function solution(n, number) {
    let answer = 0,
        l = 0,
        k = "",
        list = [],
        a,
        b,
        c = `${n}`;
    let db = { 1: 0 };
    db[c] = 0;
    while (number > 0) {
        l = String(number).length;
        k = `${n}`.repeat(l);
        a = parseInt(k) >= number ? parseInt(k) - number : number - parseInt(k);
        b = parseInt(k) / n >= number ? parseInt(k) / n - number : number - parseInt(k) / n;
        console.log(l, k, a, b);
        if (a > b) {
            number = b;
            list.push(String(parseInt(k) / n));
        } else {
            number = a;
            list.push(String(parseInt(k) / n));
        }
    }

    console.log(list);

    //    answer += db[c];
    //    answer += db["1"] > 0 ? db["1"] + 1 : 0;
    console.log(db);
    return answer > 8 ? -1 : answer;
}
//아직 미 해결
//사칙연산이라  누락된 부분이 존재 한다. 그 부분을 보강할것
let n = 5,
    number = 12;
console.log(solution(n, number), 4);

n = 5;
number = 5;
console.log(solution(n, number), 1);

n = 4;
number = 16;
console.log(solution(n, number), 2);
