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
interface Obj {
  a: number;
  b: number;
  c: number;
  d: number;
}
let obj01: Obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};
function getValues<T, K extends keyof T>(obj: T, keys: K[]) {
  return keys.map((key) => obj[key]);
}
getValues(obj01, ["a", "b"]);
// getValues(obj01, ["e", "f"]);

let objProps: keyof Obj;
let type: Obj["a"];

// 映射类型
interface Flags {
  option1: boolean;
  option2: boolean;
}

type ReadonlyFlags = Readonly<Flags>;
type PartialFlags = Partial<Flags>;
type PickFlags = Pick<Flags, "option1" | "option2">;

type twoStringProps = Record<"prop1" | "prop2", string>;

// 条件类型
// T extends U ? X : Y
type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends any[]
  ? "array"
  : "object";

type T1 = TypeName<string[]>;

// 分布式条件类型
type T2 = TypeName<string | number>;

// Diff
type Diff<T, U> = T extends U ? never : T;

type T3 = Diff<"a" | "b" | "c", "a" | "e">;
// Diff<"a", "a" | "e"> |  Diff<"b", "a" | "e"> |  Diff<"c", "a" | "e">
// never | "b" | "c"
// "b" | "c"

// NotNull
type NotNull<T> = Diff<T, undefined | null>;
type T4 = NotNull<number | string | null>;

// Exculde
type T5 = Exclude<"a" | "b" | "c", "a" | "e">;

// Extract
type T6 = Extract<"a" | "b" | "c", "a" | "e">;

// ReturnType
type T7 = ReturnType<() => number>;
