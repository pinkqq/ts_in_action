// 继承 & 成员修饰符
class Dog {
  constructor(name: string, legs: number) {
    this.name = name;
    this.legs = legs;
    this.pri();
  }
  public name: string; // 类的属性
  run() {
    return this.name + " running!";
  }
  private pri() {}
  protected pro() {}
  readonly legs: number;
  static sta: number = 1;
}
let dog = new Dog("babe", 4);
// dog.legs = 4 // error!
// dog.pri(); // error!
// Dog.pri(); // error!
console.log(Dog.prototype); // {run: ƒ, constructor: ƒ}
console.log(dog); // Dog {name: "babe"}

class Husky extends Dog {
  constructor(name: string, legs: number, color: string) {
    super(name, legs);
    this.color = color;
    this.pro(); // ok
  }
  color: string;
}

// ----------------------------------------------------
// 抽象类 & 多态
abstract class Animal {
  constructor() {}
  abstract sleep(): void;
}
// let animal = new Animal(); // error!

class Cat extends Animal {
  constructor() {
    super();
  }
  sleep() {
    console.log("cat sleep!");
  }
}
let cat = new Cat();

class Bear extends Animal {
  constructor() {
    super();
  }
  sleep() {
    console.log("bear sleep!");
  }
}
let bear = new Bear();

let animals: Animal[] = [cat, bear];
animals.forEach((a) => a.sleep());
// cat sleep! bear sleep!

class WorkFlow {
  step1() {
    return this;
  }
  step2() {
    return this;
  }
}
new WorkFlow().step1().step2();

class MyWork extends WorkFlow {
  next() {
    return this;
  }
}
new MyWork().next().step1();
