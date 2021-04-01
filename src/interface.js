"use strict";
// -----------------------------------------------------------------
// 1.对象类型接口
function render(result) {
    result.data.forEach(function (item) {
        console.log(item.id, item.name);
        if (item.age)
            console.log(item.age);
    });
}
var result = {
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
var myArray = ["a", "b"];
function getLib(version) {
    var lib = (function () { });
    lib.version = version || "1.0";
    lib.doSomething = function () {
        console.log("do something");
    };
    return lib;
}
var lib01 = getLib("2.0");
lib01();
lib01.version;
lib01.doSomething();
