/*动态规划
决策依赖于当前状态，又随即引起状态的转移，一个决策序列就是在变化的状态中产生出来的，故有“动态”的含义
动态规划方案通常会使用一个数组来建立一张表，用于存放被分解成众多子问题的解。
当算法执行完毕，最终解将会在这个表中很明显的地方被找到
*/

// 下面用动态规划的思想实现寻找两字符串的最长公共子串
// 首先声明二维数组并初始化
function douArr(word1, word2) {
    var index = 0
    var max = 0
    var lcsarr = new Array(word1.length + 1)
    for (let i = 0; i <= word1.length + 1; i++) {
        lcsarr[i] = new Array(word2.length + 1)
        for (let j = 0; j <= word2.length + 1; j++) {
            lcsarr[i][j] = 0
        }
    }

    // 下面构建用于保存字符匹配记录的表
    for (let i = 0; i <= word1.length; i++) {
        for (let j = 0; j <= word2.length; j++) {
            if (i == 0 || j == 0) {
                lcsarr[i][j] = 0
            } else {
                if (word1[i - 1] == word2[j - 1]) {
                    lcsarr[i][j] = lcsarr[i - 1][j - 1] + 1
                } else {
                    lcsarr[i][j] = 0
                }
            }
            if (max < lcsarr[i][j]) {
                max = lcsarr[i][j]
                index = i
            }
        }
    }
    
    var str= ''
    if(max==0){
        return ''
    }else{
        for(var i= index-max;i<=max;i++){
            str+=word2[i]
        }
        return str
    }
}

word1='bbcc'
word2='dbbcc'
var a=douArr(word1, word2)
console.log(a);

