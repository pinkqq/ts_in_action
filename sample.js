var Shape;
(function (Shape) {
    var pi = Math.PI;
    function circle(r) {
        return pi * Math.pow(r, 2);
    }
    Shape.circle = circle;
})(Shape || (Shape = {}));
/// <reference path='a.ts'/>
var Shape;
(function (Shape) {
    function square(w) {
        return w * w;
    }
    Shape.square = square;
    var PersonClass = /** @class */ (function () {
        function PersonClass() {
            this.age = 18;
            this.name = "Bob";
        }
        return PersonClass;
    }());
    Shape.PersonClass = PersonClass;
})(Shape || (Shape = {}));
console.log();
console.log(Shape.square(2));
