document.addEventListener("keydown", function (event) {
    let key = event.key;
    document.querySelector(".display").textContent += key;
});
