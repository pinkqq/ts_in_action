/*
 ** 定义
 */
function Add01(x: number, y: number): number {
  return x + y;
}

let Add02 = (x: number, y: number) => number;

interface Add03 {
  (x: number, y: number): number;
}

type Add04 = (x: number, y: number) => number;

/*
 ** 可选参数 & 默认参数
 */
function Add05(x: number, y = 1, z?: number) {
  return z ? x + y + z : x + y;
}
console.log(Add05(1, 3, 4));

/*
 ** 剩余参数
 */
function Add06(...resetOfNumber: number[]) {
  return resetOfNumber.reduce((pre, cur) => pre + cur);
}
console.log(Add06(1, 2, 3, 4, 5, 6));

/*
 **  重载
 */
function add07(...rest: number[]): number;
function add07(...rest: string[]): string;
function add07(...rest: any): any {
  let first = rest[0];
  if (typeof first === "string") {
    return rest.join("");
  } else if (typeof first === "number") {
    return rest.reduce((pre: number, cur: number) => pre + cur);
  }
}

console.log(add07(1, 2, 3, 4));
console.log(add07("1", "2", "3", "4"));
