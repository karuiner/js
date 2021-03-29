function qgauss(func, a, b) {
    // const x = [-0.97390653, -0.86506337, -0.67940957, -0.43339539, -0.14887434, 0.14887434, 0.43339539, 0.67940957, 0.86506337, 0.97390653];
    // const w = [0.06667134, 0.14945135, 0.21908636, 0.26926672, 0.29552422, 0.29552422, 0.26926672, 0.21908636, 0.14945135, 0.06667134];
    const w = [0.2955242247, 0.2692667193, 0.2190863625, 0.1494513491, 0.0666713443];
    const x = [0.1488743389, 0.4333953941, 0.6794095682, 0.8650633666, 0.9739065285];
    let xm = 0.5 * (b + a);
    let xr = 0.5 * (b - a),
        ss = 0,
        dx = 0;
    for (let i = 0; i < x.length; i++) {
        dx = xr * x[i];
        ss += w[i] * (func(xm + dx) + func(xm - dx));
    }
    return xr * ss;
}

function gamma(z) {
    function inner_gamma(x) {
        const a = ((1 - x) / x) ** (z - 1);
        const b = Math.exp(-(1 - x) / x);
        const c = x ** 2;
        return (a * b) / c;
    }
    return qgauss(inner_gamma, 0, 1);
}

function factorial(x) {
    return gamma(x + 1);
}
function simple_facto(x) {
    return x > 1 ? x * simple_facto(x - 1) : 1;
}

function f(x) {
    return x;
}

// console.log(qgauss(f, 0, 2));
for (let i = 0; i < 10; i++) {
    console.log(factorial(i), simple_facto(i));
}
console.log(gamma(0.5) * gamma(0.5));
console.log(qgauss(f, 0, 1));

//Lanczos approximation

const p = [676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
const epsilon = 1e-7;
function drop_imag(z) {}

// stirling's approximation
function factorial_b(n) {
    return Math.sqrt(2 * Math.PI * n) * Math.pow(n / Math.E, n);
}
for (let i = 0; i < 10; i++) {
    console.log(factorial_b(i), simple_facto(i));
}
console.log(factorial(8.9), factorial_b(8.9));
