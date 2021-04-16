import { name, a, b, c } from "./b"; // 批量导入
import { Person } from "./b"; // 导入接口
import { func as Func } from "./b"; // 导入时起别名
import * as All from "./b"; // 导出模块中的所有成员，绑定在 All 上
import Default from "./b"; // 不加{}，导入默认

let lily: Person = {
  name: "lily",
  age: 18,
};
console.log(name, a, b, c);
console.log("all", All);
Func();
Default();
