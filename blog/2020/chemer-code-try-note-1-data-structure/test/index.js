const test = {
    title: '了解 ECMAScript 标准中的数据类型'
}
console.log(test.title)

console.log('!注意，这里得到的数据类型是指使用typeof操作得到的。\n\n')
console.log('001-让我们分别来看看true和false的类型：', typeof(true), typeof(false))
console.log('002-让我们来看看null的数据类型：', typeof(null))

var a
console.log('003-我来用var声明一个变量a,但不对其进行赋值，看看a的类型：', typeof(a))
console.log('004-0.1+0.2：', 0.1 + 0.2)

