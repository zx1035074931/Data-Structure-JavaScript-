function Sort(numElements) {
    this.dataStore = []
    this.numElements = numElements
}

// 产生随机数数组
Sort.prototype.setData = function () {
    for (let i = 0; i < this.numElements; i++) {
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1))
    }
}

// 显示产生的随机数组
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

// 两数交换
function swap(arr, index1, index2) {
    var temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}

// 输出一个数组
function showArr(arr) {
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
                swap(dataStore2, j, j + 1)
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
        swap(dataStore2, outer, minIndex)
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
    while (h >= 1) {
        for (let i = h; i < len; i++) {
            for (let j = i; dataStore2[j] < dataStore2[j - h]; j -= h) {
                swap(dataStore2, j, j - h)
            }
        }
        h = (h - 1) / 3
    }
    return dataStore2
}

// 快速排序
function quickSort(arr) {
    if (arr.length == 0) {
        return []
    }
    var left = [], right = [], pivot = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(pivot, quickSort(right))
}

/* 堆排序 ********************************************************************
思想归纳：首先先进行大顶堆调整，之后将最大堆的顶部与尾部进行互换。堆的大小缩小1，继续重复上面的步骤。*/
Sort.prototype.heapSort=function() {
    var dataStore2 = []
    for (let i = 0; i < this.dataStore.length; i++) {
        dataStore2[i] = this.dataStore[i];
    }
    let heapSize = dataStore2.length;
    
    /*构造一个父节点>子节点的堆，来使值最大的节点换到根节点*/
    buildHeap(dataStore2);

    while (heapSize > 1) {
        /*在当前树中，交换根节点和最后一个节点的值,这样就排好了最大值*/
        swap(dataStore2, 0, heapSize - 1)

        heapSize--;//当前树中最后一个节点已经排好了值，故后面就不用再考虑这个节点

        if (heapSize > 1) {
            heapify(dataStore2, heapSize, 0);
            /*上面的交换使得根节点发生了变化，新的根节点的值不一定>它的两个子节点的值，所以要对根节点进行一次调整*/
        }
    }
    return dataStore2
}

/**
 * @description 构造一个所有节点都满足arr[parent[i]] > arr[i]的堆结构数组
 * @param {Array} arr 待排序数组
 */
function buildHeap(arr) {
    const heapSize = arr.length;
    /*从树的倒数第二层的最后一个有子节点的节点开始进行heapify处理。
    Math.floor(heapSize/2-1)就是这个最后一个有子节点的节点索引。*/
    const firstHeapifyIndex = Math.floor(heapSize / 2 - 1);

    //从0到firstHeapifyIndex都要进行heapify处理，才能把最大的那个节点换到顶端
    for (let i = firstHeapifyIndex; i >= 0; i--) {
        heapify(arr, heapSize, i);
    }
}

/* @description heapify 调整堆
 * 对以索引i为父节点，i的两个子节点构成的小树，进行调整，使得最大值调整到父节点
 * @param {*} i 利用i的不断更新变化，调整整个堆*/
function heapify(arr, heapSize, i) {
    const leftIndex = i * 2 + 1;//索引i的节点的左子节点索引
    const rightIndex = i * 2 + 2;//索引i的节点的右子节点索引

    let biggestValueIndex = i;
    if (leftIndex < heapSize && arr[leftIndex] > arr[biggestValueIndex]) {
        //节点的最大index为heapSize-1
        //注意：这两次比较要跟arr[biggestValueIndex]比较，不能跟arr[i]比较，因为biggestValueIndex可能会是左右左右节点
        //如果左子节点的值大于biggestValueIndex的值（此时就是根节点的值），那么更新biggestValueIndex为左子节点索引
        biggestValueIndex = leftIndex;
    }
    if (rightIndex < heapSize && arr[rightIndex] > arr[biggestValueIndex]) {
        //如果右子节点的值大于biggestValueIndex的值(此时可能是根节点的值，也可能是左子节点的值)，那么更新biggestValueIndex为右子节点索引
        biggestValueIndex = rightIndex;
    }
     //交换根节点与biggestValueIndex节点的值
    if (biggestValueIndex !== i) {
        swap(arr,i,biggestValueIndex);

        //继续对biggestValueIndex进行heaify处理，直到树的这个分支到叶子节点都满足arr[parent[i]]>=arr[i]
        heapify(arr, heapSize, biggestValueIndex);
    }
}
// ****************************************************************************************


/************************************ 效果测试 ****************************************/
var arrSort = new Sort(100) // 声明对象
arrSort.setData()           // 为对象赋上数值
console.log('original array:')
arrSort.show()

console.time('bubbleSort')
var arr1 = arrSort.bubbleSort()
console.timeEnd('bubbleSort')
// showArr(arr1)

console.time('insertSort')
var arr2 = arrSort.insertSort()
console.timeEnd('insertSort')
// showArr(arr2)

console.time('selectSort')
var arr3 = arrSort.selectSort()
console.timeEnd('selectSort')
// showArr(arr3)

console.time('shellSort')
var arr4 = arrSort.shellSort()
console.timeEnd('shellSort')
// showArr(arr4)

console.time('quickSort')
var quickArr = quickSort(arrSort.dataStore)
console.timeEnd('quickSort')

console.time('heapSort')
var heapArr = arrSort.heapSort()
console.timeEnd('heapSort')
showArr(heapArr);

module.exports = { Sort, showArr }