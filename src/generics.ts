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
/*
 ************* 泛型类
 */
class Gen<T> {
  constructor() {}
  run(value: T): T {
    console.log(value);
    return value;
  }
}
let gen1 = new Gen<number>();
gen1.run(1);
// gen1.run("1");
let gen2 = new Gen(); // 默认 any
gen2.run(1);
gen2.run("1");
/*
 ************** 泛型约束
 */
interface Length {
  length: number;
}
function log2<T extends Length>(value: T) {
  console.log(value.length);
  return value;
}

log2("1");
log2([1, 2, 3]);
log2({ length: 1 });
// log2(2);
