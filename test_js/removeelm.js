function removeExtremes(arr) {
    let lw,sw;
    for (let i of arr){
      if (lw === undefined) { lw=i}
      if (sw === undefined) { sw=i}
      if (i.length >= lw.length) {lw=i }
      if (i.length <= sw.length) {sw=i } 
      console.log(lw,sw)
  
    }
    arr.splice(arr.indexOf(lw),1)
    arr.splice(arr.indexOf(sw),1)
    // TODO: 여기에 코드를 작성합니다.
    return arr
}


console.log(removeExtremes(['where', 'is', 'the', 'longest', 'word'] ))