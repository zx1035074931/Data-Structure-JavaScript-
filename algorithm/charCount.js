// 函数功能，查找字符串中每个字符串的重复次数
var str='aabbbbcccdsfdfdgasgklhahfdadafagghhgfjgkj'
var obj={}
for (let i = 0; i < str.length; i++) {
    var v = str.charAt(i)
    if(obj[v]){
        // if v has existed, count++
        obj[v].count++
    }else{
        // if v has not existed, creat it
        obj[v]={}
        obj[v].count = 1
        obj[v].value = v
    }
}
for(key in obj){
    console.log(`${obj[key].value} : ${obj[key].count}`)
}

var s = "one : 1; two2: 2";
var r = /\w*(?=\d)/;  //使用正前向声明，指定执行匹配必须满足的条件
var a = r.exec(s);  //返回数组["two"]
console.log(a);
