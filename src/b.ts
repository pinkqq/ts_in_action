class Person {}
namespace Person {
  export let id = 123123;
  export class Man {}
}
console.log(Person.id);
console.log(Person.Man);

function Func() {}
namespace Func {
  export let version = "1.0";
}
console.log(Func.version); // 1.0

enum Color {
  Red,
}
namespace Color {
  export let yellow = "yellow";
  export function func() {}
}
console.log(Color); // {0: "Red", Red: 0, yellow: "yellow", func: ƒ}
