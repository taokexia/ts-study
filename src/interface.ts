// 接口使用
// const getUserName = (user) => user.name
interface User {
    name:string,
    age:number
}
const getUserName = (user:User) => user.name

// 可选属性
interface User1 {
    name?:string,
    age: number
}

// 只读属性
interface User2 {
    readonly name2:string,
    age: number
}

// 函数类型
// 方式1
interface User3 {
    name:string,
    say:(word:string) => string
}
// 方式2
interface Say {
    (word:string):string
}
interface User4 {
    name:string,
    say:Say
}

// 可索引类型
interface Phone {
    [name: string]: string
}
interface User5 {
    name: string,
    phone: Phone
}
const user1:User5 = {
    name: 'Tom',
    phone: {
        qq: '123456',
        wechat: '123456'
    }
}
const user2:User5 = {
    name: 'John',
    phone: {
        qq: '123456',
        wechat: '123456',
        email: '123456'
    }
}

// 接口继承
interface Animate {
    work: () => void
}
interface People extends Animate {
    
}