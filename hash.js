/*
Hash，一般翻译做散列、杂凑，或音译为哈希，
是把任意长度的输入（又叫做预映射pre-image）通过散列算法变换成固定长度的输出，该输出就是散列值。
这种转换是一种压缩映射，也就是，散列值的空间通常远小于输入的空间，
不同的输入可能会散列成相同的输出，所以不能从散列值来确定唯一的输入值。
简单的说就是一种将任意长度的消息压缩到某一固定长度的消息摘要的函数。
*/
function HashTable() {
    this.table = new Array(137)  //  table记录了散列表的内容
    this.simpleHash = simpleHash  //  散列函数，生成散列值
    this.betterHash = betterHash  //  更好的散列函数，有效避免碰撞
    this.show = show  //  显示散列表中的内容
    this.add = add  //  向散列表中存入数据
}

//  散列表的生成规则
//  散列值=所有字符的ASCII值之和除以数组长度的余数
function simpleHash(data) {
    var total = 0
    for (let i = 0; i < data.length; i++) {
        total += data.charCodeAt(i)
    }
    return total % this.table.length
}

//  更好的散列表的生成规则
//  每次求所有字符的ASCII值之和时，都要乘以一个质数
function betterHash(data) {
    const H = 37 //  该质数用于避免碰撞
    var total = 0
    for (let i = 0; i < data.length; i++) {
        total += total * H + data.charCodeAt(i)
    }
    total = total % this.table.length
    if (total < 0) {
        total += this.table.length - 1
    }
    return parseInt(total)
}

function add(data) {
    var pos = this.simpleHash(data)
    this.table[pos] = data
}

function show() {
    for (let i = 0; i < this.table.length; i++) {
        if (this.table[i] != undefined) {
            console.log(i + ' : ' + this.table[i]);
        }
    }
}

var hTable = new HashTable()
hTable.add('Hello world0')
hTable.add('Hello worldas')
hTable.add('Hello worldds')
hTable.show()