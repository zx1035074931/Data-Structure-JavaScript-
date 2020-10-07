/*栈*/
function Stack() {
    this.dataStore = []
    this.top = 0
    this.push = push      //向栈顶压入元素
    this.pop = pop        //弹出栈顶元素
    this.peek = peek      //查看栈顶元素
    this.length = length  //获取栈内元素个数
    this.toString = toString  //输出栈的所有元素
    this.clear = clear    //清空栈
}

function push(element) {
    this.dataStore.push(element)
}
function pop() {
    return this.dataStore.pop()
}
function peek() {
    return this.dataStore[this.dataStore.length - 1]
}
function length() {
    return this.dataStore.length
}
function toString() {
    dataStore2 = this.dataStore.slice(0)
    return dataStore2
}
function clear() {
    this.dataStore.splice(0, this.dataStore.length)
}

// var s = new Stack()
// s.push('a')
// console.log(s.dataStore)
// console.log(s.length())
// s.clear()
// console.log(s.dataStore)

//实例
// 实例1：进制的转换
function mulBase(num, base) {
    var s = new Stack()
    while (num > 0) {
        s.push(num % base)
        num = Math.floor(num /= base)
    }
    var newNum = ""
    while (s.length() > 0) {
        newNum += s.pop()
    }
    return newNum
}
console.log(mulBase(100, 2));
