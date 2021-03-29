const fs = require("fs");
let data = "test string";
let dir = process.cwd();
console.log(dir);
fs.writeFile("./test_js/db/test.txt", data, "utf8", function (err) {
    console.log("비동기적 파일 쓰기 완료");
});
fs.writeFileSync("./test_js/db/test.txt", data, "utf8");
