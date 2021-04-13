// 交叉类型
interface DogInterface {
  run(): void;
}
interface CatInterface {
  jump(): void;
}
let pet01: DogInterface & CatInterface = { run() {}, jump() {} };

// 联合类型
class Dog implements DogInterface {
  run() {}
  eat() {}
}
class Cat implements CatInterface {
  jump() {}
  eat() {}
}

// let a: number | string = "string";
// a = 1;
// let b: 1 | "2" | true = 1; // ok!
// b = false; // error!
enum Master {
  Boy,
  Girl,
}

function getPet(master: Master) {
  let pet = master === Master.Boy ? new Dog() : new Cat();
  pet.eat(); // ok!
  // pet.jump(); // error!
}

// 计算不同图形的面积

interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

interface Circle {
  kind: "circle";
  r: number;
}
type Shape = Square | Rectangle | Circle;
// function computedArea(shape: Shape): number {
//   switch (shape.kind) {
//     case "square":
//       return shape.size * shape.size;
//     case "rectangle":
//       return shape.width * shape.height;
//     case "circle":
//       return Math.PI * shape.r ** 2;
//   }
// }
function computedArea(shape: Shape) {
  switch (shape.kind) {
    case "square":
      return shape.size * shape.size;
    case "rectangle":
      return shape.width * shape.height;
    case "circle":
      return Math.PI * shape.r ** 2;
    default:
      ((e: never) => {
        throw new Error();
      })(shape); // 检查shape是否是never类型；当case完全覆盖时，shape是never类型；反之，需要补全分支。
  }
}
computedArea({ kind: "circle", r: 1 });
