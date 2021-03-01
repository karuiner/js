// Shape - 상위클래스
function Shape() {
    this.x = 0;
    this.y = 0;
}
// 상위클래스 메서드
Shape.prototype.move = function (x, y) {
    this.x += x;
    this.y += y;
    console.info("Shape moved.");
};
// Rectangle - 하위클래스
function Rectangle() {
    Shape.call(this); // super 생성자 호출.
}
// 하위클래스는 상위클래스를 확장
// console.log("1.", Shape.prototype);
// console.log("2.", Rectangle.prototype);
// console.log("3.", Rectangle.prototype.constructor);
console.log(Rectangle.prototype);
Rectangle.prototype = Object.create(Shape.prototype);
// console.log("4.", Rectangle.prototype);
// console.log("4.1", new Shape());
// console.log("4.2", new Rectangle());
console.log("5.", Rectangle.prototype.constructor);
console.log(Rectangle.prototype);
Rectangle.prototype.constructor = Rectangle;
console.log("6.", Rectangle.prototype.constructor);
console.log(Rectangle.prototype);
