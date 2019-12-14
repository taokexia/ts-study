// 数字枚举
enum Num {
    One,
    Two,
    Three
}

console.log(Num.One === 0) // true

// 字符串枚举
enum Str {
    Up = 'up',
    Down = 'down'
}

console.log(Str.Up, Str.Down) // up down

// 异构枚举
enum Enum {
    Num = 1,
    Str = 'test'
}

// 反向映射
enum BackReflect {
    Up,
    Down,
    Left,
    Right = 'right'
}

console.log(BackReflect[0]) // Up
console.log(BackReflect['Right'])

// 常量枚举
const enum Enu {
    Up = 'up',
    Down = 'down'
}

const down = Enu.Down

// 枚举成员类型
enum Direction {
    Up,
    Down,
    Left,
    Right
}
const a = 0

console.log(a === Direction.Up) // true
type c = 0
declare let b: c
// b = 1 // 不能将类型“1”分配给类型“0”
b = Direction.Up // ok
declare let c:Direction

c = Direction.Down

// 给枚举添加方法
enum Week {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

namespace Week {
    export function isWork(day: Week) {
        switch (day) {
            case Week.Monday:
            case Week.Tuesday:
            case Week.Wednesday:
            case Week.Thursday:
            case Week.Friday:
                return true;
            default:
                return false
        }
    }
}