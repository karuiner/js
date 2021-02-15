const board = document.querySelector("canvas");
const ctx = board.getContext("2d");
let ww = ctx.canvas.clientWidth,
    wh = ctx.canvas.clientHeight,
    start,
    present;

function resize(canvas) {
    // Lookup the size the browser is displaying the canvas in CSS pixels.
    const displayWidth = canvas.clientWidth;
    const displayHeight = canvas.clientHeight;

    // Check if the canvas is not the same size.
    const needResize = canvas.width !== displayWidth || canvas.height !== displayHeight;

    if (needResize) {
        // Make the canvas the same size
        canvas.width = displayWidth;
        canvas.height = displayHeight;
    }

    return needResize;
}
resize(ctx.canvas);

function mk_dot(x, y, r, color) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI, false);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

function frame(timestamp) {
    if (start === undefined) start = timestamp;
    present = timestamp;
    resize(ctx.canvas);
    ww = ctx.canvas.clientWidth;
    wh = ctx.canvas.clientHeight;

    window.requestAnimationFrame(frame);
}

window.requestAnimationFrame(frame);
