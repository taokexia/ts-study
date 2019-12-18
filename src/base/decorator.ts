// 类装饰器
function addAge(constructor: Function) {
    constructor.prototype.age = 18;
  }
  
  @addAge
  class Person{
    name: string;
    age?: number;
    constructor() {
      this.name = 'xiaomuzhu';
    }
  }
  
  let person = new Person();
  
  console.log(person.age); // 18

  // 方法装饰器
  // 声明装饰器修饰方法/属性
function method(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(target);
    console.log("prop " + propertyKey);
    console.log("desc " + JSON.stringify(descriptor) + "\n\n");
    descriptor.writable = false;
 };
 
 class Person2{
   name: string;
   constructor() {
     this.name = 'xiaomuzhu';
   }
 
   @method
   say(){
     return 'instance method';
   }
 
   @method
   static run(){
     return 'static method';
   }
 }
 
 const xmz = new Person2();
 
 // 修改实例方法say
 xmz.say = function() {
   return 'edit'
 }
 
 // 打印结果,检查是否成功修改实例方法
 console.log(xmz.say());

 // 参数装饰器
 function logParameter(target: Object, propertyKey: string, index: number) {
    console.log(target, propertyKey, index);
}
class Person3 {
    greet(@logParameter message: string,@logParameter name: string): string {
        return `${message} ${name}`;
    }
}
const p = new Person3();
p.greet('hello', 'xiaomuzhu');

// Person { greet: [Function] } greet 1
// Person { greet: [Function] } greet 0