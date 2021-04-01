// -----------------------------------------------------------------
// 1.对象类型接口

/*
 ** 添加一个字符串索引
interface List {
  id: number;
  name: string;
  [x: string]: any; // 用任意字符串索引List，可以得到任意结果
}
*/
interface List {
  readonly id: number;
  name: string;
  age?: number;
}
interface Result {
  data: List[];
}

function render(result: Result) {
  result.data.forEach((item) => {
    console.log(item.id, item.name);
    if (item.age) console.log(item.age);
  });
}

const result = {
  data: [
    { id: 0, name: "js", sex: "male" },
    { id: 1, name: "ts", age: 10 },
  ],
};

/*
 ** 类型断言
render(<Result>{
  data: [
    { id: 0, name: "xqq", sex: "male" },
    { id: 1, name: "ts" },
  ],
});
render({
  data: [
    { id: 0, name: "xqq", sex: "male" },
    { id: 1, name: "ts" },
  ],
} as Result);
*/

render(result);

/*
 ** 可索引属性
 */
interface StringArray {
  [index: number]: string;
}
interface Names {
  [x: string]: string;
}
interface MixNames {
  [x: string]: string;
  // name: number; error!
}

// readonly
interface ReadonlyStringArray {
  readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["a", "b"];
// myArray[0] = "v"; error!

// -----------------------------------------------------------------
// 2.函数类型接口
interface Add {
  (a: number, b: number): number;
}
// let Add = (a: number, b: number) => number;
// type Add = (a: number, b: number) => number;

// -----------------------------------------------------------------
// 3.混合类型接口
interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}
function getLib(version: string) {
  let lib = (() => {}) as Lib;
  lib.version = version || "1.0";
  lib.doSomething = () => {
    console.log("do something");
  };
  return lib;
}

let lib01 = getLib("2.0");
lib01();
lib01.version;
lib01.doSomething();
