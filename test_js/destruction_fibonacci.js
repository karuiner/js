function fibonacci() {
    let x = 0;
    let y = 1;
    let z = 0;
    return function getNext() {
        [z, x, y] = [x, y, x + y];
        // let a=x, b=y, c=x+y
        // z=a, x=b, y=c
        // z=fibo(n-2), x=fibo(n-1), y=fibo(n-2)+fibo(n-1)
        return z;
    };
}
let fun = fibonacci();
for (let i = 0; i < 10; i++) {
    console.log(fun());
}
