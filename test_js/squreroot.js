function sqrt(n) {
    let x=1;
    let fp=[1,0.1,0.01,0.001];
    for (let i of fp ){
        while ((x+i)**2 <= n) {
            x+=i
        }
    
    }
    return x
}


console.log(sqrt(3))
