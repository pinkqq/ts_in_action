"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var A = function A() {
  _classCallCheck(this, A);

  _defineProperty(this, "a", 1);
};

new A(); // let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4, c: 5 };
// let obj = { x, y, ...z };

var Shape;

(function (_Shape) {
  var pi = Math.PI;

  function circle(r) {
    return pi * Math.pow(r, 2);
  }

  _Shape.circle = circle;
})(Shape || (Shape = {}));

var x = {};
x.a = 2; // const enum B {
//   X,
// }
// export = x;