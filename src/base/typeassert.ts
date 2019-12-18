namespace TypeAssert {

    // 类型断言
    interface Person {
        name: string;
        age: number;
    }

    const person = {} as Person;

    person.name = 'xiaomuzhu';
    person.age = 20;

    // 双重断言
    interface Person {
        name: string;
        age: number;
    }
    const person2 = 'xiaomuzhu' as any as Person; // ok

    // 类型守卫
    class Person {
        name = 'xiaomuzhu';
        age = 20;
    }

    class Animal {
        name = 'petty';
        color = 'pink';
    }

    function getSometing(arg: Person | Animal) {
        if (arg instanceof Animal) {
            console.log(arg.color); // ok
            // console.log(arg.age); // Error
        }
        if (arg instanceof Person) {
            console.log(arg.age); // ok
            // console.log(arg.color); // Error
        }
    }
}

namespace TypeAssert2 {
    // in
    class Person {
        name = 'xiaomuzhu';
        age = 20;
    }

    class Animal {
        name = 'petty';
        color = 'pink';
    }

    function getSometing(arg: Person | Animal) {
        if ('age' in arg) {
            // console.log(arg.color); // Error
            console.log(arg.age); // ok
        }
        if ('color' in arg) {
            // console.log(arg.age); // Error
            console.log(arg.color); // ok
        }
    }
    // 字面量守卫
    type Foo = {
        kind: 'foo'; // 字面量类型
        foo: number;
    };

    type Bar = {
        kind: 'bar'; // 字面量类型
        bar: number;
    };

    function doStuff(arg: Foo | Bar) {
        if (arg.kind === 'foo') {
            console.log(arg.foo); // ok
            //   console.log(arg.bar); // Error
        } else {
            //   console.log(arg.foo); // Error
            console.log(arg.bar); // ok
        }
    }
}