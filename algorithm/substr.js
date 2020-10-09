/*寻找两个字符串的最长子字符串*/
function Clear(str1, str2) {
    var targetString = []
    if (str1 > str2) {
        shorter = str2;
        longer = str1;
    } else {
        shorter = str1;
        longer = str2;
    }
    var maxStrLen = 0 // 最长的子字符串长度
    for (var a = shorter.length; a > 0; a--) {
        for (var b = 0; b < a; b++) {
            String1 = shorter.substring(b, a)
            if (longer.indexOf(String1) >= 0 && String1.length >= maxStrLen) {
                if (String1.length = maxStrLen) {
                    // 为了处理多个同样长的最长子字符串
                    targetString.push(String1)
                }
                if (String1.length > maxStrLen) {
                    maxStrLen = String1.length
                    targetString=[]
                    targetString.push(String1)
                }
            }
        }
    }
    return targetString;
}

str1 = "instritesting"
str2 = "string"
console.log(Clear(str1, str2))