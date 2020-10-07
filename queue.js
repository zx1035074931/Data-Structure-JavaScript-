/*队列*/
function Queue() {
    this.dataStore = []
    this.enqueue = enqueue  //向队尾增加元素
    this.dequeue = dequeue  //在队首删除元素
    this.front = front      //读取队首元素
    this.back = back        //读取队尾元素
    this.toString = toString//显示队列中的所有元素
    this.empty = empty// 判读队列是否为空
}
function enqueue(element) {
    this.dataStore.push(element)
}
function dequeue() {
    return this.dataStore.shift()
}
function front() {
    return this.dataStore[0]
}
function back() {
    return this.dataStore[this.dataStore.length - 1]
}
function toString() {
    dataStore2 = this.dataStore.slice(0)
    return dataStore2
}
function empty() {
    if (this.dataStore.length == 0) {
        return true
    } else {
        return false
    }
}

var q = new Queue()
q.enqueue('1')
q.enqueue('2')

console.log(q.toString());
console.log(q.empty());

/*
实例:
将male和female舞者的信息分别存入栈中，栈顶元素一一匹配
*/

function Dancer(name, sex) {
    this.name = name
    this.sex = sex
}

function getDancers(males, females) {
    var fs = require('fs')
    fs.readFile('./material/a.txt', 'utf-8', function (err, data) {
        if (err) {
            console.log(err);
        } else {
            var dancers = data.split('\n')
            // console.log(dancers);

            for (let i = 0; i < dancers.length; i++) {
                dancers[i] = dancers[i].trim();   //去除掉每条记录的首尾空格
                var dancer = dancers[i].split(" ")
                // console.log(dancer);

                var sex = dancer[0]
                var name = dancer[1]
                if (sex == 'F') {
                    females.enqueue(new Dancer(name, sex))
                } else if (sex == 'M') {
                    males.enqueue(new Dancer(name, sex))
                } else {
                    continue
                }
            }
            console.log('male dancers:');
            console.log(males.toString());
            console.log('female dancers:');
            console.log(females.toString());
            match(males, females)
        }
    })

}

function match(males, females) {
    console.log('The dance partners are:');
    while (!females.empty() && !males.empty()) {
        var female = females.dequeue()
        var male = males.dequeue()
        console.log(`male:${male.name} and female:${female.name}`);
    }
    while(!females.empty()){
        console.log(`female:${females.front().name} is wating for partner`);
        females.dequeue()
    }
    while(!males.empty()){
        console.log(`male:${male.front().name} is wating for partner`);
        females.dequeue()
    }

}

var maleDancers = new Queue()
var femaleDancers = new Queue()
getDancers(maleDancers, femaleDancers)
// match(maleDancers, femaleDancers)