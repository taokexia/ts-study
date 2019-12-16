namespace literal {
    // 字面量类型
    const a: 2333 = 2333 // ok
    const ab: 0b10 = 2 // ok
    const ao: 0o114 = 0b1001100 // ok
    const ax: 0x514 = 0x514 // ok
    // const b: 0x1919n = 6425n // ok
    const c: 'xiaomuzhu' = 'xiaomuzhu' // ok
    const d: false = false // ok

    // const g: 'github' = 'pronhub' // 不能将类型“"pronhub"”分配给类型“"github"”

    // 类型字面量
    type Foo = {
        baz: [
            number,
            'xiaomuzhu'
        ];
        toString(): string;
        readonly [Symbol.iterator]: 'github';
        0x1: 'foo';
        "bar": 12n;
    };

    // 可辨识的联合类型
    interface Info {
        username: string
    }
    type UserAction = | {
        id: number
        action: 'delete'
        info: Info
    } |
    {
        action: 'create'
        info: Info
    }
    // const UserReducer = (userAction: UserAction) => {
    //     // console.log(userAction.id) Error
    //     // ...
    // }
    const UserReducer = (userAction: UserAction) => {
        switch (userAction.action) {
            case 'delete':
                console.log(userAction.id);
                break;
            default:
                break;
        }
    }
}