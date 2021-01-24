// 이것은 객체 연습 파일 입니다.
let o={}; // 기본적인  빈 객체 정의 입니다.

o['test']='sample';
o[1]='number 1';
console.log(o);
console.log(o[1]);
o['arr']=[1,2,3,4,5];
console.log(o['arr']);
for (let i in o) {
    console.log(i);
}
a='This is sample text. but maybe  to be long text. As i made can as, It is more longer. I decide to ended write the text.'
let no={};
for ( let i of a.match(/[a-z]/gi)){
    if (i in  no) {
        no[i]+=1
    } else {
        no[i]=1
    }
}
let no2={};
for (let i in no) {
    let k=String(no[i]);
    if (k in no2){
        no2[k].push(i)
    } else {
        no2[k]=[i]
    }
}
console.log(no2)

