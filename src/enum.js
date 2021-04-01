"use strict";
// -----------------------------------------------------------------
// 数字枚举
var Role;
(function (Role) {
    Role[Role["Reporter"] = 0] = "Reporter";
    Role[Role["Developer"] = 3] = "Developer";
    Role[Role["Maintainer"] = 4] = "Maintainer";
    Role[Role["Owner"] = 5] = "Owner";
    Role[Role["Guest"] = 6] = "Guest";
})(Role || (Role = {}));
console.log(Role);
/*
  {
    0: "Reporter",
    3: "Developer",
    4: "Maintainer",
    5: "Owner",
    6: "Guest",
    Reporter: 0,
    Developer: 3,
    Maintainer: 4,
    Owner: 5,
    Guest: 6
  }
 */
// -----------------------------------------------------------------
// 字符串枚举
var Message;
(function (Message) {
    Message["Success"] = "\u606D\u559C\u4F60\uFF0C\u6210\u529F\u4E86";
    Message["Fail"] = "\u5F88\u9057\u61BE\uFF0C\u5931\u8D25\u4E86";
})(Message || (Message = {}));
console.log(Message);
/*
  {Success: "恭喜你，成功了", Fail: "很遗憾，失败了"}
 */
// -----------------------------------------------------------------
// 异构枚举（容易混淆，不推荐使用）
var Answer;
(function (Answer) {
    Answer[Answer["N"] = 0] = "N";
    Answer["Y"] = "yes";
})(Answer || (Answer = {}));
// -----------------------------------------------------------------
// 枚举成员
var Char;
(function (Char) {
    // const member: 在编译过程中计算结果
    Char[Char["a"] = 0] = "a";
    Char[Char["b"] = 0] = "b";
    Char[Char["c"] = 4] = "c";
    // computed member: 在执行过程中计算结果
    Char[Char["d"] = [1, 2, 3].length] = "d";
    Char[Char["e"] = Math.random()] = "e";
    // computed member 后的成员，必须要有初始值。
    Char[Char["f"] = 4] = "f";
})(Char || (Char = {}));
var month = [0 /* Jan */, 1 /* Feb */, 2 /* Web */];
// -----------------------------------------------------------------
// 枚举类型
var E;
(function (E) {
    E[E["a"] = 0] = "a";
    E[E["b"] = 1] = "b";
})(E || (E = {}));
var F;
(function (F) {
    F[F["a"] = 1] = "a";
    F[F["b"] = 3] = "b";
})(F || (F = {}));
var G;
(function (G) {
    G["a"] = "hello";
    G["b"] = "ts";
})(G || (G = {}));
var e1 = 3;
var e2 = 3;
/* e1 === e2; error! */
var f1 = 5;
var f2 = 5;
/* f1 === f2; error! */
var g1 = G.a;
var g2 = G.a; /* G.a类型 只能是 G.a */
