var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// 类装饰器
function addAge(constructor) {
    constructor.prototype.age = 18;
}
var Person = /** @class */ (function () {
    function Person() {
        this.name = 'xiaomuzhu';
    }
    Person = __decorate([
        addAge
    ], Person);
    return Person;
}());
var person = new Person();
console.log(person.age); // 18
// 方法装饰器
// 声明装饰器修饰方法/属性
function method(target, propertyKey, descriptor) {
    console.log(target);
    console.log("prop " + propertyKey);
    console.log("desc " + JSON.stringify(descriptor) + "\n\n");
    // descriptor.writable = false;
}
;
var Person2 = /** @class */ (function () {
    function Person2() {
        this.name = 'xiaomuzhu';
    }
    Person2.prototype.say = function () {
        return 'instance method';
    };
    Person2.run = function () {
        return 'static method';
    };
    __decorate([
        method
    ], Person2.prototype, "say");
    __decorate([
        method
    ], Person2, "run");
    return Person2;
}());
var xmz = new Person2();
// 修改实例方法say
xmz.say = function () {
    return 'edit';
};
// 打印结果,检查是否成功修改实例方法
console.log(xmz.say());
// 参数装饰器
function logParameter(target, propertyKey, index) {
    console.log(target, propertyKey, index);
}
var Person3 = /** @class */ (function () {
    function Person3() {
    }
    Person3.prototype.greet = function (message, name) {
        return message + " " + name;
    };
    __decorate([
        __param(0, logParameter), __param(1, logParameter)
    ], Person3.prototype, "greet");
    return Person3;
}());
var p = new Person3();
p.greet('hello', 'xiaomuzhu');
// Person { greet: [Function] } greet 1
// Person { greet: [Function] } greet 0
