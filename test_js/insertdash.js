function insertDash(str) {
    let k=0,j=0,ck=0,ans=[];
    for (i of str){
        console.log(i,Number(i)%2,Number(i)!==0)
        if (!(Number(i)%2)){
            if (!k){
                ans.push(i)
                k+=1
            } else {
                ans.push('-')
                ans.push(i)
                k+=1
            }
        }else{
            ans.push(i)
            k=0
        }

    }
    return ans.join('')
}

function tinsertDash(str) {
    let ans=[],k=0;
    for (let i of str) {
        if (Number(i)%2) {
            if (!k){
                ans.push(i)
                k+=1    
            } else{
                ans.push('-'+i)
                k+=1
            }
            console.log(i,k)
        } else {
            ans.push(i)
            k=0
        }

    }
    return ans.join('')
}
let pp='0364649584527734248497490956436424513856401903589';
//let pp='135';
console.log(tinsertDash(pp))