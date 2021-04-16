"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 继承 & 成员修饰符
var Dog = /** @class */ (function () {
    function Dog(name, legs) {
        this.name = name;
        this.legs = legs;
        this.pri();
    }
    Dog.prototype.run = function () {
        return this.name + " running!";
    };
    Dog.prototype.pri = function () { };
    Dog.prototype.pro = function () { };
    Dog.sta = 1;
    return Dog;
}());
var dog = new Dog("babe", 4);
// dog.legs = 4 // error!
// dog.pri(); // error!
// Dog.pri(); // error!
console.log(Dog.prototype); // {run: ƒ, constructor: ƒ}
console.log(dog); // Dog {name: "babe"}
var Husky = /** @class */ (function (_super) {
    __extends(Husky, _super);
    function Husky(name, legs, color) {
        var _this = _super.call(this, name, legs) || this;
        _this.color = color;
        _this.pro(); // ok
        return _this;
    }
    return Husky;
}(Dog));
// ----------------------------------------------------
// 抽象类 & 多态
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
// let animal = new Animal(); // error!
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super.call(this) || this;
    }
    Cat.prototype.sleep = function () {
        console.log("cat sleep!");
    };
    return Cat;
}(Animal));
var cat = new Cat();
var Bear = /** @class */ (function (_super) {
    __extends(Bear, _super);
    function Bear() {
        return _super.call(this) || this;
    }
    Bear.prototype.sleep = function () {
        console.log("bear sleep!");
    };
    return Bear;
}(Animal));
var bear = new Bear();
var animals = [cat, bear];
animals.forEach(function (a) { return a.sleep(); });
// cat sleep! bear sleep!
var WorkFlow = /** @class */ (function () {
    function WorkFlow() {
    }
    WorkFlow.prototype.step1 = function () {
        return this;
    };
    WorkFlow.prototype.step2 = function () {
        return this;
    };
    return WorkFlow;
}());
new WorkFlow().step1;
