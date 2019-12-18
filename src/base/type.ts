// TypeScript 类型

// 布尔类型
let bool: boolean = true
let bool1: boolean = false

// 数字
let num: number = 0
let num1: number = 0b01 // 二进制
let num2: number = 0o76 // 八进制
let num3: number = 0xAA // 十六进制

// 字符串
let str: string = 'hello'

// 空值
let no: void = undefined
let no1: null = null
// let no2: null = undefined 不行
let no2: undefined = undefined
// let no3: undefined = null 不行
let cc = null

// Symbol
let s: symbol = Symbol()
let s1: symbol = Symbol()
console.log(s === s1) // false

// BigInt
// let big: bigint = 10n
// let big2 = 20n
const max = Number.MAX_SAFE_INTEGER

// any
let noSure: any = 4

// unknown
let nokn: unknown = 0
let nokn2: unknown
// nokn2.eat(); 不行
noSure.eat();

// never
function newError(msg: string): never {
    throw new Error(msg)
}

// 数组
const list:Array<number> = [1, 2, 3]
const list1: number[] = [2, 3, 4]

// 元组
const tuple: [string, number] = ['hello', 11]
tuple.push(0)

// object
let obj: object = {}

// 交叉类型
function mixin<T extends object, U extends object>(first: T, second: U): T & U {
    const result = <T & U>{};
    for (let id in first) {
      (<T>result)[id] = first[id];
    }
    for (let id in second) {
      if (!result.hasOwnProperty(id)) {
        (<U>result)[id] = second[id];
      }
    }
  
    return result;
  }
  
  const x = mixin({ a: 'hello' }, { b: 42 });
  
  // 现在 x 拥有了 a 属性与 b 属性
  const aa = x.a;
  const bb = x.b;