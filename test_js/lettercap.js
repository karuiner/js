function letterCapitalize(str) {
    let ans=[]
    for (let i of str.split(' ')){
      let sub=[];
      for (let j=0 ; j < i.length;j++){
        if (!j) {
          sub.push(i[j].toUpperCase())
        } else {
          sub.push(i[j].toLowerCase())
        }
      }
      ans.push(sub.join(''))
    }
    return ans.join(' ')
  }

console.log(letterCapitalize('You Have A Idea'))