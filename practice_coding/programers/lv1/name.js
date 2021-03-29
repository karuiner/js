//이름 추천
function solution(new_id) {
    let snum = "1234567890".split("");
    let nnum = "abcdefghijklmnopqrstuvwxyz-_.".split("");
    let db = snum.concat(nnum);
    // 1단계
    new_id = new_id.toLowerCase();
    // 2단계
    new_id = new_id
        .split("")
        .filter((x) => db.includes(x))
        .join("");
    // 3단계
    new_id = new_id.split("").reduce((x, y) => (x[x.length - 1] === "." && y === "." ? x : x + y));
    // 4단계
    new_id = new_id[0] === "." ? new_id.slice(1) : new_id;
    new_id = new_id[new_id.length - 1] === "." ? new_id.slice(0, new_id.length - 1) : new_id;
    // 5단계
    new_id = new_id.length === 0 ? "a" : new_id;
    // 6단계
    new_id = new_id.length >= 16 ? new_id.slice(0, 15) : new_id;
    new_id = new_id[new_id.length - 1] === "." ? new_id.slice(0, new_id.length - 1) : new_id;
    //7단계

    while (new_id.length <= 2) {
        new_id = new_id + new_id.slice(new_id.length - 1);
    }

    return new_id;
}
let str = "...!@BaT#*..y.abcdefghijklm";
console.log(solution(str), "bat.y.abcdefghi");
