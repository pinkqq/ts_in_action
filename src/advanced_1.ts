// - 基础类型推断
// let aa = 1;
// let b = "string";
// let c = [1, null];
// let d = [1, 2];

// - 函数默认参数
// let x = (a = 1) => {};

// - 函数返回值
// let x = (a = 1) => a + 1;

// - 上下文类型推断
// window.onkeydown = (event: KeyboardEvent) => {};

// - 类型断言
// interface Foo {
//   bar: number;
// }
// let foo: Foo = { bar: 1 };
// let foo = {} as Foo;
// foo.bar = 1;

// - 类型兼容性
// -- 基本类型和对象
// let aa = 1;
// let bb = null;
// aa = bb;

// let cc = { name: "" };
// let dd = { name: "string" };
// cc = dd;

// interface Named {
//   name: string;
// }
// let y = { name: "", age: 1 };
// function greet(n: Named) {
//   console.log("hello" + n.name);
// }
// greet(y);

// -- 接口
// interface X {
//   a: number;
//   b: number;
// }
// interface Y {
//   a: number;
//   b: number;
//   c: number;
// }
// let x: X = { a: 1, b: 2 };
// let y: Y = { a: 1, b: 2, c: 3 };
// x = y;
// y = x;

// -- 函数
type Handler = (a: number, b: number) => number;
function hof(handler: Handler) {
  return handler;
}
// 1) 参数个数
// let handler1 = (a: number) => number;
// hof(handler1);
// let handler2 = (a: number, b: number, c: number) => number;
// hof(handler2);

// ---- 剩余参数和可选参数
// let a = (a: number, b: number) => number;
// let b = (a?: number, b?: number) => number;
// let c = (...args: number[]) => number;

// a = b;
// a = c;
// b = a;
// b = c;
// c = a;
// c = b;

// 2）参数类型
// let handler3 = (a: string) => string;
// hof(handler3);

// 参数类型复杂
// interface point3D {
//   a: number;
//   b: number;
//   c: number;
// }
// interface point2D {
//   a: number;
//   b: number;
// }
// let p3d = (value: point3D) => {};
// let p2d = (value: point2D) => {};

// p3d = p2d;
// p2d = p3d;

// 3) 返回值类型
// let f = () => ({
//   a: number,
// });
// let g = () => ({ a: number, b: number });

// f = g;
// g = f;

// 函数重载
// function overload(a: number, b: number): number; // 目标函数
// function overload(a: string, b: string): string; // 目标函数
// function overload(a: any, b: any): any {} // 源函数

// 枚举类型
// enum Fruit {
//   Apple,
//   Banana = "banana",
// }
// enum Color {
//   Red,
//   Green,
// }
// let fruit1: Fruit.Apple = 1;
// let fruit2: Fruit.Banana = 1;
// let color1: Color = Color.Red;
// let color2: Color = Fruit.Apple;

// 类
// class Fruit {
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   name: string;
//   size: number = 0;
//   private age: number;
// }
// class Clothes {
//   static len: number = 100;
//   constructor(name: string) {
//     this.name = name;
//   }
//   name: string;
//   protected size: number = 0;
// }
// let f = new Fruit("apple", 12);
// let c = new Clothes("t-shirt");

// f = c;
// c = f;

// class Apple extends Fruit {
//   color: string = "red";
// }

// let a = new Apple("apple", 1);
// f = a;

// class Shoes extends Clothes {}
// let s = new Shoes("shoes");
// c = s;
// s = c;

// 泛型

// interface Empty<T> {
//   data: T;
// }
// let a: Empty<number>;
// let b: Empty<string>;

// a = b!; // OK, because y matches structure of x

// let identity = function <T>(x: T) {
//   return x;
// };

// let reverse = function <U>(y: U): U {
//   return y;
// };

// identity = reverse; // OK, because (x: any) => any matches (y: any) => any

// 