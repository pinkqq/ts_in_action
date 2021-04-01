// -----------------------------------------------------------------
// 数字枚举
enum Role {
  Reporter, // 默认从 0 开始
  Developer = 3, // 3
  Maintainer, // 4
  Owner,
  Guest,
}

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
enum Message {
  Success = "恭喜你，成功了",
  Fail = "很遗憾，失败了",
}
console.log(Message);
/*
  {Success: "恭喜你，成功了", Fail: "很遗憾，失败了"}
 */

// -----------------------------------------------------------------
// 异构枚举（容易混淆，不推荐使用）
enum Answer {
  N, // 0
  Y = "yes",
}

// -----------------------------------------------------------------
// 枚举成员
enum Char {
  // const member: 在编译过程中计算结果
  a,
  b = Char.a,
  c = 1 + 3,
  // computed member: 在执行过程中计算结果
  d = [1, 2, 3].length,
  e = Math.random(),
  // computed member 后的成员，必须要有初始值。
  f = 4,
}

// -----------------------------------------------------------------
// 常量枚举
const enum Month {
  Jan,
  Feb,
  Web,
}
let month = [Month.Jan, Month.Feb, Month.Web];

// -----------------------------------------------------------------
// 枚举类型
enum E {
  a,
  b,
}
enum F {
  a = 1,
  b = 3,
}
enum G {
  a = "hello",
  b = "ts",
}

let e1: E = 3;
let e2: E.a = 3;
/* e1 === e2; error! */

let f1: F = 5;
let f2: F.b = 5;
/* f1 === f2; error! */

let g1: G = G.a;
let g2: G.a = G.a; /* G.a类型 只能是 G.a */
