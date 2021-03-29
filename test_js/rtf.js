// return function 을 이해하자
function returnFunction() {
    return function() {
       console.log( "hello world!");
    };
 };
 //returnFunction()();
function a(x){
    return x
}
function b(x){
    return x*2
}
function c(x){
    return x**2
}
function test( ...args) {
    ss=arguments
    return function(x) {
        for (let i of ss) {
            x=i(x)
        }  
        return x
    }
} 
let yy= test(a,b,c);
console.log(yy(1))