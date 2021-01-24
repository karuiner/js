function modulo(num1, num2) {
    if (num2 === 0) {return  'Error: cannot divide by zero'}
    return (num1 >= num2 ? modulo(num1-num2,num2): num1);
}

//console.log(modulo(123456789,67))
k=modulo(5,2)
console.log(k)


// 큰숫자 커버가 안됨 방법 찾을것