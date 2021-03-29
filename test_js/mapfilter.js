let a=[1,2,3,4,5];

let p=a.filter((x) => (x>2));
console.log(p);

p=a.map((x) => String(x));
console.log(p);

p=a.reduce((b,c) => b+c)
console.log(p);
