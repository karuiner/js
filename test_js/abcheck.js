function ABCheck(str) {
    let lstr=str.toLowerCase(),ai=0,bi=0;
    while (ai >=0) {
        if (!ai ){
            ai=lstr.indexOf('a',ai)
        } else{
            ai=lstr.indexOf('a',ai+1)
        }
        if (ai >=0) {
            while (bi >=0){
                if (!bi ){
                    bi=lstr.indexOf('b',bi)
                } else{
                    bi=lstr.indexOf('b',bi+1)
                }
                if ((((ai-bi) === 4) || ((bi-ai) === 4))&&(bi>=0) ){
                  return true
                }
          
            }

        }
        
    }
    return false
}

//console.log(ABCheck('lane Borrowed'))
// 실행 시간 초과 다시 수행할 것

function ABCheck2(str) {
    let lstr=str.toLowerCase(),ai=[],bi=[];
    for (let i =0 ; i <lstr.length; i++){
      if (lstr[i] === 'a') {
        ai.push(i)
      }
      if (lstr[i] === 'b') {
        bi.push(i)
      }
    }
    for (let i of ai){
      for (let j of bi){
        if (((j-i)==4) || ((i-j)==4) ){
          return true
        }
      }
    }  
  
    return false
  }
console.log(ABCheck2('lane Borrowed'))
  