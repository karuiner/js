function calculator() {
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.setPrompt(">");
    rl.prompt();
    rl.on("line", function (line) {
        if (line === "exit") {
            rl.close();
        }
        console.log(line);
        rl.prompt();
    });
    rl.on("close", function () {
        process.exit();
    });
}
// 뼈대... 구성은 아직 안됨
calculator();
