/* greedy algorithm 贪心算法
贪心算法：选择当下/局部最优解，而不去考虑这一次的选择会不会对未来造成影响
*/
/*
贪心算法案例1：找零钱问题
问题描述：用25,10,5,1美分的货币，对0-100美分的零钱进行找零
解决方案：从25美分开始，尽量先用大面值货币
*/
function makeChange(change) {
    var oriChange = change
    var change_left = 0 // 剩余还未找的零钱
    var coins = [] // 用来记录货币的选择方案
    if (change % 25 < change) {
        coins[3] = parseInt(change / 25)
        change_left = change % 25
        change = change_left
    }
    if (change % 10 < change) {
        coins[2] = parseInt(change / 10)
        change_left = change % 10
        change = change_left
    }
    if (change % 5 < change) {
        coins[1] = parseInt(change / 5)
        change_left = change % 5
        change = change_left
    }
    coins[0] = parseInt(change)

    // 显示找零方案
    console.log(oriChange + '美分的找零方案为：');
    if (coins[3] > 0) {
        console.log(coins[3] + '张25美分');
    }
    if (coins[2] > 0) {
        console.log(coins[2] + '张10美分');
    }
    if (coins[1] > 0) {
        console.log(coins[1] + '张5美分');
    }
    if (coins[0] > 0) {
        console.log(coins[0] + '张1美分');
    }
}

makeChange(63)

/*
贪心算法案例2：背包问题
问题描述：
    背包有一定的容量大小，每个物品有体积和价值，问如何选择物品装包，使得价值最大。
    注：此处的物品是连续的（即可分的）
解决方案：
    用物体的价值/体积，得到不同物体的单位价值，选取单位价值最大的优先装包
    此处假设的是背包容量30，
    物体A（价值50，体积5，单位价值10），物体B（价值140，体积20，单位价值7），
    物体C（价值60，体积10，单位价值6），物体D（价值60，体积12，单位价值5），
*/
console.log('\n背包问题:');
function bag(capacity, values, weights) {
    var load = 0 // 已经占据的空间
    var i = 0
    var totalValue = 0  // 最大价值
    while (load < capacity && i < values.length) {
        if (weights[i] <= capacity - load) {
            // 当物品可以全部放入时
            totalValue += values[i]
            load += weights[i]
            console.log('放入' + item[i] + '物品');
        } else {
            // 当物品不能全部放入，只能放入部分时
            var r = (capacity - load) / weights[i]
            totalValue += r * values[i]
            load += weights[i]
            console.log(`放入${r}个${item[i]}物品`);
        }
        i++
    }
    return totalValue
}

var item = ["A", "B", "C", "D"]
var values = [50, 140, 60, 60]
var weights = [5, 20, 10, 12]
var capacity = 30
var totalV = bag(capacity, values, weights)
console.log(`最后总价值为${totalV}`);
