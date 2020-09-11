/*
radioSort函数功能：
基数排序：从低位开始，按照该位的大小将待排的数字进行排序，依次对每一位进行重复的操作
*/
Array.prototype.radioSort = function() {
    let len = this.length
    if (len < 2) {
        return
    }
    let counter = [] //  该数组用于存储buckets
    let mod = 10, dev = 1 //  这两个数用于提取数字的每一位

    let maxNum
	// 找出最大数 maxNum
    for (let i = 0; i < len-1; i++) {
        if (this[i] > this[i+1]) {
            maxNum = this[i]
        } else {
            maxNum = this[i+1]
        }
    }
    let maxDigit = 0
	// 找出最大位数 maxDigit
    while (maxNum != 0) {
        maxNum = parseInt(maxNum/10)
        maxDigit++;
    }
     
    //  核心排序语句
    //  从低位开始，按照每一位的排序对整个数字进行排序
    for (let i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
        // 根据本次循环的最低位的数字，将该数this[j]放入到对应的（0~9）的bucket中
        // 所有的bucket组成了counter
        for(let j = 0; j < this.length; j++) {
            let bucket = parseInt((this[j] % mod) / dev)  //计算出该数的本次循环最低位的数字
            if(counter[bucket]==null) {
                counter[bucket] = []
            }
            counter[bucket].push(this[j])
        }

        //  从counter中读取出所有的数字并排好
        let pos = 0
        for(let j = 0; j < counter.length; j++) {
            let value = null
            if(counter[j]!=null) {
                while ((value = counter[j].shift()) != null) {
                      this[pos++] = value
                }
          }
        }
    }
}
let arr = [2,9,5,7,1,1,6,50,3,100]
arr.radioSort()
console.log("排序后：", arr.toString())
// 1,1,2,3,3,4,5,6,7,9