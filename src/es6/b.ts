// 单独导出
export const name = "i am b.";
export let a = "i am a";

// 批量导出
let b = "b";
let c = "c";
export { b, c };

// 导出方法
export function func() {
  console.log("i am func");
}

// 导出时，起别名
function d() {
  console.log("i am d");
}
export { d as D };

// 导出接口
export interface Person {
  name: string;
  age: number;
}

// 默认导出，无需函数名
export default () => {
  console.log("i am default");
};

// 引入外部模块，重新导出
export { src as hello } from "./a";
