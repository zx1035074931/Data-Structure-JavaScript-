/*
碰撞处理
方法2：开放寻址散列之线性探测法
当发生碰撞时，检测散列表的下一个位置是否为空，如果为空则存入，不为空则检查下一个位置
*/
function HashTable() {
    this.table = new Array(137)  //  table记录了散列表的键
    this.value = []  //  value记录了散列表的值
    this.simpleHash = simpleHash  //  散列函数，生成散列值
    this.betterHash = betterHash  //  更好的散列函数，有效避免碰撞
    this.show = show  //  显示散列表中的内容
    this.add = add  //  向散列表中存入数据
    this.get = get  //  利用键值，从散列表中取值

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

function add(key, data) {
    var pos = this.simpleHash(data)
    if (this.table[pos] == undefined) {
        this.table[pos] = key
        this.value[pos] = data
    } else {
        while (this.table[pos] != undefined) {
            pos++
        }
        this.table[pos] = key
        this.value[pos] = data
    }
}

function get(key) {
    var hash = this.simpleHash(key)
    if (hash >= 0) {
        //  该值有可能因为碰撞而向后寻址找空位存储，所以从此位置向后找
        for (let i = hash; this.table[hash] != undefined; i++) {
            if (this.table[hash] == key) {
                return this.value[hash]
            } else {
                console.log('未查询到此数据');
                return undefined
            }
        }
    } else {
        console.log('hash值计算有误，查询数据出问题了');
    }
}

function show() {
    for (let i = 0; i < this.table.length; i++) {
        if (this.table[i] != undefined) {
            console.log(i + ' : ' + this.table[i]);
        }
    }
}

var hTable = new HashTable()  //  新建类
//  增添数据
hTable.add('Hello world0', 'Hello world0')
hTable.add('Hello worldas', 'Hello worldas')
hTable.add('Hello worldds', 'Hello worldds')

//  展示哈希表
hTable.show()

//  查询数据
let record1 = hTable.get('Hello worldds')
console.log(record1);

