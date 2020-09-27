function Sort(numElements) {
    this.dataStore = []
    this.numElements = numElements
}

// 设置随机数组
Sort.prototype.setData = function () {
    for (let i = 0; i < this.numElements; i++) {
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1))
    }
}

// 两数交换
Sort.prototype.swap = function (arr, index1, index2) {
    var temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}

// 显示产生的随机数
Sort.prototype.show = function () {
    var temp = ""
    for (let i = 0; i < this.dataStore.length; i++) {
        temp += this.dataStore[i] + " "
        if (i > 0 && i % 10 == 9) {
            temp += '\n'
        }
    }
    console.log(temp);
}

Sort.prototype.showArr = function (arr) {
    var temp = ""
    for (let i = 0; i < arr.length; i++) {
        temp += arr[i] + " "
        if (i > 0 && i % 10 == 9) {
            temp += '\n'
        }
    }
    console.log(temp);
}

/*冒泡排序*/
Sort.prototype.bubbleSort = function () {
    var dataStore2 = []
    for (let i = 0; i < this.dataStore.length; i++) {
        dataStore2[i] = this.dataStore[i];
    }
    var len = dataStore2.length
    for (let i = len; i > 1; i--) {
        // 每一轮冒泡，最大值会跑到最后面
        for (let j = 0; j < i; j++) {
            if (dataStore2[j] > dataStore2[j + 1]) {
                this.swap(dataStore2, j, j + 1)
            }
        }
    }
    return dataStore2
}

/*选择排序*/
Sort.prototype.selectSort = function () {
    var dataStore2 = []
    for (let i = 0; i < this.dataStore.length; i++) {
        dataStore2[i] = this.dataStore[i];
    }
    var minIndex, temp
    for (let outer = 0; outer < dataStore2.length - 1; outer++) {
        minIndex = outer
        for (let inner = outer + 1; inner < dataStore2.length; inner++) {
            if (dataStore2[minIndex] > dataStore2[inner]) {
                minIndex = inner
            }
        }
        this.swap(dataStore2, outer, minIndex)
    }
    return dataStore2
}

/*插入排序*/
Sort.prototype.insertSort = function () {
    var dataStore2 = []
    for (let i = 0; i < this.dataStore.length; i++) {
        dataStore2[i] = this.dataStore[i];
    }
    var temp, inner
    for (let outer = 1; outer < dataStore2.length; outer++) {
        temp = dataStore2[outer]
        inner = outer
        // 将待插入的数dataStore[outer]与inner最右边的数开始一一比较
        while (temp <= dataStore2[inner - 1]) {
            // temp找到了插入位置，inner控制的所有数向右移动
            dataStore2[inner] = dataStore2[inner - 1]
            inner--
        }
        dataStore2[inner] = temp
    }
    return dataStore2
}

/*希尔排序，改进的插入排序*/
Sort.prototype.shellSort = function () {
    var dataStore2 = []
    for (let i = 0; i < this.dataStore.length; i++) {
        dataStore2[i] = this.dataStore[i];
    }
    var h = 1, len = dataStore2.length
    while (h < len / 3) {
        h = h * 3 + 1
    }
    while(h>=1){
        for (let i = h; i < len; i++) {
            for (let j = i; dataStore2[j]<dataStore2[j-h]; j-=h) {
                this.swap(dataStore2,j,j-h)
            } 
        }
        h=(h-1)/3
    }
    return dataStore2
}

/*快速排序*/
// Sort.prototype.quickSort = function () {
//     var dataStore2 = []
//     for (let i = 0; i < this.dataStore.length; i++) {
//         dataStore2[i] = this.dataStore[i];
//     }

//     return dataStore2
// }

function quickSort(arr) {
    if(arr.length==0){
        return []
    }
    var left =[],right=[],pivot=arr[0]
    for (let i = 1; i < arr.length; i++) {
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(pivot,quickSort(right))
}

var arrSort = new Sort(100)
arrSort.setData()
console.log('original array:')
arrSort.show()

console.time('bubbleSort')
var arr1 = arrSort.bubbleSort()
console.timeEnd('bubbleSort')
// arrSort.showArr(arr1)

console.time('insertSort')
var arr2 = arrSort.insertSort()
console.timeEnd('insertSort')
// arrSort.showArr(arr2)

console.time('selectSort')
var arr3 = arrSort.selectSort()
console.timeEnd('selectSort')
// arrSort.showArr(arr3)

console.time('shellSort')
var arr4 = arrSort.shellSort()
console.timeEnd('shellSort')
// arrSort.showArr(arr4)

console.time('quickSort')
var quickArr = quickSort(arrSort.dataStore)
console.log();
console.timeEnd('quickSort')
