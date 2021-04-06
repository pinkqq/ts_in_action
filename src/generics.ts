function log<T>(value: T): T {
  console.log(value);
  return value;
}
console.log(
  typeof log<number[]>([1, 2, 3])
);

type MyLog = <T>(value: T) => T;
let myLog: MyLog = log;

// 可以使用不同的参数名
type ULog = <U>(value: U) => U;

// 带有调用签名的对象字面量
type OLog = { <T>(value: T): T };

interface ILog<T = string> {
  (value: T): T;
}

let ilog: ILog<number> = log;
ilog(1);
