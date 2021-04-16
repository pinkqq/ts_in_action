"use strict";
// -----------------------------------------------------------------
// 原始类型
var bool = true;
var string = "123";
var number = 23;
// -----------------------------------------------------------------
// 数组
var arr01 = [1, 2, 3];
var arr02 = [1, 2, 3];
var arr03 = [1, 2, 3];
// -----------------------------------------------------------------
// 元组：限定了数组元素的类型和个数
var tuple = [0, "1"];
console.log(tuple.length); // 2
tuple.push(2);
console.log(tuple); // [0, "1", 2]
console.log(tuple.length); // 3
/*
 **  元组的越界问题
 **
 **  console.log(tuple)
 **  console.log(tuple[2]);
 **  error: Tuple type '[number,string]' of length '2' has no element at index '2'.
 **  原则上不可以改变，允许 push 应该是一个TypeScript 的一个缺陷
 */
// -----------------------------------------------------------------
// 函数
/*
 ** 类型推断：函数的类型可以省略
 */
var add01 = function (x, y) { return x + y; };
var add02 = function (x, y) { return x + y; };
/* 定义函数类型 */
var compute;
compute = function (a, b) { return a + b; };
// -----------------------------------------------------------------
// 对象
var objError = { x: 1, y: "2" };
/* objError.x; */
var obj = { x: 1, y: "2" };
obj.x;
// -----------------------------------------------------------------
// symbol
var s1 = Symbol();
var s2 = Symbol();
console.log(s1 === s2); // false
// -----------------------------------------------------------------
//undefined, null
/*
 ** 默认情况下null和undefined是所有类型的子类型。
 ** 就是说你可以把 null和undefined赋值给number类型的变量。
 ** 然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。
 */
var u = undefined;
var n = null;
// -----------------------------------------------------------------
// void：表示没有任何类型。
var noReturn = function () { };
// -----------------------------------------------------------------
// any: 默认类型，表示任何类型，与js没有区别
var a;
// -----------------------------------------------------------------
// never
var error = function () {
    throw new Error("Something failed");
};
var endless = function () {
    while (true) { }
};
