/*
集合(set)是一种包含不同元素的数据结构
两个重要性质：元素的无序性与唯一性
 */
function Set() {
    this.dataStore = []
    this.add = add  //  向集合中添加数据
    this.remove = remove  //  从集合中删除数据
    this.show = show  //  展示集合中的元素
    this.contains = contains  //  检查集合是否包含该元素
    this.union = union  //  求并集
    this.intersect = intersect  //  求交集
    this.subSet = subSet  //  判断是否为子集
    this.difference = difference  //  找到集合1独有，集合2没有的元素
}

function add(data) {
    //  检查集合中是否存在该元素
    if (this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data)
        return true
    } else {
        return false
    }
}

function remove(data) {
    var pos = this.dataStore.indexOf(data)
    if (pos >= 0) {
        this.dataStore.splice(pos, 1)
        return true
    } else {
        return false
    }
}

function show() {
    return this.dataStore
}

function contains(data) {
    var pos = this.dataStore.indexOf(data)
    if (pos >= 0) {
        return true
    } else {
        return false
    }
}

function union(set) {
    var temSet = new Set()
    for (let i = 0; i < this.dataStore.length; i++) {
        temSet.add(this.dataStore[i])
    }
    for (let i = 0; i < this.dataStore.length; i++) {
        if (!temSet.contains(set.dataStore[i])) {
            temSet.dataStore.push(set.dataStore[i])
        }
    }
    return temSet
}

function intersect(set) {
    var temSet = new Set()
    for (let i = 0; i < this.dataStore.length; i++) {
        if (set.contains(this.dataStore[i])) {
            temSet.add(this.dataStore[i])
        }
    }
    return temSet
}

function subSet(set) {
    if (this.dataStore.length > set.dataStore.length) {
        return false
    } else {
        for (var member of this.dataStore) {
            if (!set.contains(member)) {
                return false
            }
        }
    }
    return true
}

function difference(set) {
    var temSet = new Set()
    for (let i = 0; i < this.dataStore.length; i++) {
        if (!set.contains(this.dataStore[i])) {
            temSet.add(this.dataStore[i])
        }
    }
    return temSet
}

//  集合效果测试
var set1 = new Set()
var set2 = new Set()
var set3 = new Set()

set1.add('abc')
set1.add('123')
set1.add('集合元素')

set2.add('456')
set2.add('123')
set2.add('789')

set3.add('abc')
set3.add('123')

console.log('set1 ：' + set1.show());
console.log('set2 ：' + set2.show());
console.log('set3 ：' + set3.show());
console.log('----------------------------');

// set1.remove('这是集合元素')
// console.log('删除元素后：' + set1.show())

temSet = set1.union(set2)
temSet2 = set1.intersect(set2)
temSet3 = set1.difference(set2)

console.log('1 2求并集后：' + temSet.show())
console.log('1 2求交集后：' + temSet2.show())
console.log('1 独有的元素有：' + temSet3.show())

// 判断set3是否是set1的子集
console.log('set3是否是set1的子集:' + set3.subSet(set1));
