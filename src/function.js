"use strict";
/*
 ** 定义
 */
function Add01(x, y) {
    return x + y;
}
var Add02 = function (x, y) { return number; };
/*
 ** 可选参数 & 默认参数
 */
function Add05(x, y, z) {
    if (y === void 0) { y = 1; }
    return z ? x + y + z : x + y;
}
console.log(Add05(1, 3, 4));
/*
 ** 剩余参数
 */
function Add06() {
    var resetOfNumber = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        resetOfNumber[_i] = arguments[_i];
    }
    return resetOfNumber.reduce(function (pre, cur) { return pre + cur; });
}
console.log(Add06(1, 2, 3, 4, 5, 6));
function add07() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var first = rest[0];
    if (typeof first === "string") {
        return rest.join("");
    }
    else if (typeof first === "number") {
        return rest.reduce(function (pre, cur) { return pre + cur; });
    }
}
console.log(add07(1, 2, 3, 4));
console.log(add07("1", "2", "3", "4"));
