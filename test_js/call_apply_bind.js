// call
function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.call(this, name, price);
    this.category = "food";
}

console.log(new Food("cheese", 5).name);
// expected output: "cheese"

function Product(name, price) {
    this.name = name;
    this.price = price;

    if (price < 0) {
        throw RangeError("Cannot create product " + this.name + " with a negative price");
    }
}

function Food(name, price) {
    Product.call(this, name, price);
    this.category = "food";
}

function Toy(name, price) {
    Product.call(this, name, price);
    this.category = "toy";
}

var cheese = new Food("feta", 5);
var fun = new Toy("robot", 40);

var animals = [
    { species: "Lion", name: "King" },
    { species: "Whale", name: "Fail" },
];

for (var i = 0; i < animals.length; i++) {
    (function (i) {
        this.print = function () {
            console.log("#" + i + " " + this.species + ": " + this.name);
        };
        this.print();
    }.call(animals[i], i));
}
function greet() {
    var reply = [this.animal, "typically sleep between", this.sleepDuration].join(" ");
    console.log(reply);
}

var obj = {
    animal: "cats",
    sleepDuration: "12 and 16 hours",
};

greet.call(obj); // cats typically sleep between 12 and 16 hours

//apply

const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2
var array = ["a", "b"];
var elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]

// min/max number in an array
var numbers2 = [5, 6, 2, 3, 7];

// using Math.min/Math.max apply
var max2 = Math.max.apply(null, numbers2);
// 이는 Math.max(numbers[0], ...) 또는 Math.max(5, 6, ...)
// 와 거의 같음

var min2 = Math.min.apply(null, numbers2);

// vs. simple loop based algorithm
(max2 = -Infinity), (min2 = +Infinity);

for (var i = 0; i < numbers2.length; i++) {
    if (numbers2[i] > max2) {
        max2 = numbers2[i];
    }
    if (numbers2[i] < min2) {
        min2 = numbers2[i];
    }
}

function minOfArray(arr) {
    var min = Infinity;
    var QUANTUM = 32768;

    for (var i = 0, len = arr.length; i < len; i += QUANTUM) {
        var submin = Math.min.apply(null, arr.slice(i, Math.min(i + QUANTUM, len)));
        min = Math.min(submin, min);
    }

    return min;
}

var min3 = minOfArray([5, 6, 2, 3, 7]);

Function.prototype.construct = function (aArgs) {
    var oNew = Object.create(this.prototype);
    this.apply(oNew, aArgs);
    return oNew;
};

Function.prototype.construct = function (aArgs) {
    var oNew = {};
    oNew.__proto__ = this.prototype;
    this.apply(oNew, aArgs);
    return oNew;
};

Function.prototype.construct = function (aArgs) {
    var fNewConstr = new Function("");
    fNewConstr.prototype = this.prototype;
    var oNew = new fNewConstr();
    this.apply(oNew, aArgs);
    return oNew;
};

function MyConstructor() {
    for (var nProp = 0; nProp < arguments.length; nProp++) {
        this["property" + nProp] = arguments[nProp];
    }
}

var myArray = [4, "Hello world!", false];
var myInstance = MyConstructor.construct(myArray);

console.log(myInstance.property1); // logs 'Hello world!'
console.log(myInstance instanceof MyConstructor); // logs 'true'
console.log(myInstance.constructor); // logs 'MyConstructor'

// bind

const module1 = {
    x: 42,
    getX: function () {
        return this.x;
    },
};

const unboundGetX = module1.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module1);
console.log(boundGetX());
// expected output: 42

this.x = 9;
var module2 = {
    x: 81,
    getX: function () {
        return this.x;
    },
};

module2.getX(); // 81

var retrieveX = module2.getX;
retrieveX();
// 9 반환 - 함수가 전역 스코프에서 호출됐음

// module과 바인딩된 'this'가 있는 새로운 함수 생성
// 신입 프로그래머는 전역 변수 x와
// module의 속성 x를 혼동할 수 있음
var boundGetX2 = retrieveX.bind(module2);
boundGetX2(); // 81

function list() {
    return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]

// 선행될 인수를 설정하여 함수를 생성합니다.
var leadingThirtysevenList = list.bind(null, 37);

var list2 = leadingThirtysevenList(); // [37]

var list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]

function addArguments(arg1, arg2) {
    return arg1 + arg2;
}

var result1 = addArguments(1, 2); // 3

// 첫 번째 인수를 지정하여 함수를 생성합니다.
var addThirtySeven = addArguments.bind(null, 37);

var result2 = addThirtySeven(5); // 37 + 5 = 42

// 두 번째 인수는 무시됩니다.
var result3 = addThirtySeven(5, 10); // 37 + 5 = 42

function LateBloomer() {
    this.petalCount = Math.ceil(Math.random() * 12) + 1;
}

// 1초 지체 후 bloom 선언
LateBloomer.prototype.bloom = function () {
    setTimeout(this.declare.bind(this), 1000);
};

LateBloomer.prototype.declare = function () {
    console.log("I am a beautiful flower with " + this.petalCount + " petals!");
};

var flower = new LateBloomer();
flower.bloom();
// 1초 뒤, 'declare' 메소드 유발

function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function () {
    return this.x + "," + this.y;
};

var p = new Point(1, 2);
p.toString(); // '1,2'

// 아래 폴리필에서는 지원되지 않음,

// 원 bind와는 잘 작동:

var YAxisPoint = Point.bind(null, 0 /*x*/);

var emptyObj = {};
var YAxisPoint = Point.bind(emptyObj, 0 /*x*/);

var axisPoint = new YAxisPoint(5);
axisPoint.toString(); // '0,5'

axisPoint instanceof Point; // true
axisPoint instanceof YAxisPoint; // true
new Point(17, 42) instanceof YAxisPoint; // true
