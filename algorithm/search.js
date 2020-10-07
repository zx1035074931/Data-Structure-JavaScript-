/*自组织：在一次次查找中，将被频繁查找的元素置于数据集的起始位置
Pareto分布：对某一数据集80%的查找都发生在了其中20%的数据元素上
*/
var SortFile = require('./Sort.js')
const readline = require('readline-sync');

function swap(arr, index1, index2) {
    var temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}

//包含自组织的顺序查找
function seqSearch(arr, data) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == data) {
            if (i > 0) {
                swap(arr, i, i - 1)
            }
            return true
        }
    }
    return false
}

/*二分查找：只对有序的数据集有效 */
function binSearch(arr, data) {
    var upperBound = arr.length - 1
    var lowerBound = 0
    while (lowerBound <= upperBound) {
        var mid = Math.floor((lowerBound + upperBound) / 2)
        if (data < arr[mid]) {
            upperBound = mid - 1
        } else if (data > arr[mid]) {
            lowerBound = mid + 1
        } else {
            return mid
        }
    }
    return -1
}

var nums = new SortFile.Sort(100)
nums.setData()

var numsSorted = nums.insertSort()
SortFile.showArr(numsSorted)
var val = parseInt(readline.question('Enter the number you want to find: '))
var retVal = binSearch(numsSorted, val)
if (retVal >= 0) {
    console.log(`找到了${val}`);
} else {
    console.log(`没找到${val}`);

}
