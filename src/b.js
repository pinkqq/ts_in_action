var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
(function (Person) {
    Person.id = 123123;
    var Man = /** @class */ (function () {
        function Man() {
        }
        return Man;
    }());
    Person.Man = Man;
})(Person || (Person = {}));
console.log(Person.id);
console.log(Person.Man);
function Func() { }
(function (Func) {
    Func.version = "1.0";
})(Func || (Func = {}));
console.log(Func.version); // 1.0
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
})(Color || (Color = {}));
(function (Color) {
    Color.yellow = "yellow";
    function func() { }
    Color.func = func;
})(Color || (Color = {}));
console.log(Color); // {0: "Red", Red: 0, yellow: "yellow", func: ƒ}
