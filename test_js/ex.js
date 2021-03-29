//for roop
let a=0;
for (i=0;i<=10;i++){
    a+=i;
}
console.log(a);
//while roop
let a=0;
let i=0;
while(i <=10){
    a+=i;
    i++;
}
console.log(a);
// do while roop
a=0;
i=0;
do {
    a+=i;
    i++;
} while( i <=10);
console.log(a);
// while if break
a=0;
i=0;
while(true){
    a+=i;
    i++;
    if (i> 10){
        break;
    }
}
console.log(a);
// array?
let arr=[1,2,3,4,5];
for (i of arr ){
    console.log(i);
}