// 类实现接口
interface Human {
  name: string;
  eat(): void;
}

class Man implements Human {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  eat() {}
  sleep() {}
}

// interface I {
//   new (): void;
// }
// class C implements I {
//   constructor() {}
// }

interface Child {
  cry(): void;
}

interface Boy extends Human, Child {}

let boy: Boy = {
  name: "",
  eat() {},
  cry() {},
};

class Auto {
  private state: number = 0;
}

interface AutoInterface extends Auto {}
/*
  ** Class 'C' incorrectly implements interface 'AutoInterface'.
  ** Property 'state' is private in type 'AutoInterface' but not in type 'C'.
  
class C implements AutoInterface {
  state: number = 1;
}
*/
class MyAuto extends Auto implements AutoInterface {}
