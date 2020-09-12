/*
碰撞处理
方法1：开链法
将哈希表中的每一个存储单元变成数组等可存储多个元素的数据结构。
遇到冲突时就存在同一位置，而不会覆盖
*/
function HashTable() {
    this.table = new Array(137)  //  table记录了散列表的内容
    this.simpleHash = simpleHash  //  散列函数，生成散列值
    this.betterHash = betterHash  //  更好的散列函数，有效避免碰撞
    this.show = show  //  显示散列表中的内容
    this.add = add  //  向散列表中存入数据

    //  
    this.buildChains = function () {
        for (let i = 0; i < this.table.length; i++) {
            this.table[i] = new Array()
        }
    }
    this.buildChains()
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

// add函数用于在哈希表中添加数据，两个参数分别是数据的键与值
function add(key, data) {
    var pos = this.simpleHash(data)
    var index = 0
    if (this.table[pos][index] == undefined) {
        this.table[pos][index] = data
        // index++
    } else {
        while (this.table[pos][index] != undefined) {
            index++
        }
        this.table[pos][index] = data
    }
}

function show() {
    for (let i = 0; i < this.table.length; i++) {
        if (this.table[i][0] != undefined) {
            console.log(i + ' : ' + this.table[i]);
        }
    }
}

var hTable = new HashTable()
// hTable.buildChains()
hTable.add('Hello worldcs', 'Hello worldcs')
hTable.add('Hello worldas', 'Hello worldas')
hTable.add('Hello worldds', 'Hello worldds')
hTable.show()