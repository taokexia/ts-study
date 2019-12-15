namespace FunctionTest {
    // 函数
    // 函数定义
    const add = (a:number, b:number) => a + b
    
    // 参数定义
    // 可选参数
    const add1 = (a:number, b?:number) => a + (b?b:0)
    // 参数默认值
    const add2 = (a:number, b=10) => a + b
    // 剩余参数
    const add3 = (a:number, ...res: number[]) => res.reduce((a, b) => a + b, a)
    
    // 函数重载
    interface Direction {
        top: number,
        bottom?: number,
        left?: number,
        right?: number
    }
    function assigned(all: number): Direction
    function assigned(topAndBottom: number, leftAndRight: number): Direction
    function assigned(top: number, right: number, bottom: number, left: number): Direction

    function assigned (a: number, b?: number, c?: number, d?: number) {
        if (b === undefined && c === undefined && d === undefined) {
          b = c = d = a
        } else if (c === undefined && d === undefined) {
          c = a
          d = b
        }
        return {
          top: a,
          right: b,
          bottom: c,
          left: d
        }
    }
}
