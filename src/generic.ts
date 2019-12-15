// 泛型
function returnItem<T>(para: T): T {
    return para
}
returnItem(1)
returnItem('String')

// 定义多个类型参数
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}
swap([7, 'seven']); // ['seven', 7]

// 泛型变量
function getArrayLength<T>(arg: Array<T>) {
    console.log(arg.length)
    return arg
}

// 泛型接口
interface returnItemFn<T> {
    (para: T): T
}
const fn: returnItemFn<number> = para => para

// 泛型类
class Stack<T> {
    private arr: T[] = []
    public push(item: T) {
        this.arr.push(item)
    }
    public pop() {
        this.arr.pop()
    }
}

// 泛型约束
type Params = string | number
class Stack1<T extends Params> {
    private arr: T[] = []
    public push(item: T) {
        this.arr.push(item)
    }
    public pop() {
        this.arr.pop()
    }
}

// 索引类型
function getValue<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key]
}
const testA = {
    id: '1',
    name: 'Tom'
}
getValue(testA, 'id')

// 多重类型泛型约束
interface FirstInterface {
    doSomething(): number
}
interface SecondInterface {
    doSomethingElse(): string
}
interface ChildInterface extends FirstInterface, SecondInterface {
}
class Demo<T extends ChildInterface> {
    private genericProperty!: T;
    Demo(val: T) {
        this.genericProperty = val
    }
    useT() {
        this.genericProperty.doSomething()
        this.genericProperty.doSomethingElse()
    }
}

// 泛型与new
// 可被构造的
function factory<T>(type: { new(): T }): T {
    return new type();
}

function factory2<T>(type: new () => T): T {
    return new type();
}

// 接口描述函数原型
interface NewFnInterface<T> {
    new(): T;
}

function factory3<T>(type: NewFnInterface<T>): T {
    return new type();
}