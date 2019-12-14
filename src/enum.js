// 数字枚举
var Num;
(function (Num) {
    Num[Num["One"] = 0] = "One";
    Num[Num["Two"] = 1] = "Two";
    Num[Num["Three"] = 2] = "Three";
})(Num || (Num = {}));
console.log(Num.One === 1);
// 字符串枚举
var Str;
(function (Str) {
    Str["Up"] = "up";
    Str["Down"] = "down";
})(Str || (Str = {}));
console.log(Str.Up, Str.Down);
// 异构枚举
var Enum;
(function (Enum) {
    Enum[Enum["Num"] = 1] = "Num";
    Enum["Str"] = "test";
})(Enum || (Enum = {}));
// 反向映射
var BackReflect;
(function (BackReflect) {
    BackReflect[BackReflect["Up"] = 0] = "Up";
    BackReflect[BackReflect["Down"] = 1] = "Down";
    BackReflect[BackReflect["Left"] = 2] = "Left";
    BackReflect[BackReflect["Right"] = 3] = "Right";
})(BackReflect || (BackReflect = {}));
console.log(BackReflect[0]);
