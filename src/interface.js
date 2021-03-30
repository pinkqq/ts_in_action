"use strict";
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
// myArray[0] = "v"; error!
