var text = document.getElementById("text");
var subButton = document.getElementById("submit");

subButton.onclick = function () {
    rot13(text.value);
}




function rot13(str) { // LBH QVQ VG!
    // 请把你的代码写在这里
    var newArr = [];
    // 存储转化后的字符数组
    for (i = 0; i < str.length; i++) {
        var eleNum = str.charCodeAt(i);

        if (eleNum >= 65 && eleNum <= 90) {

            // 前移13位
            eleNum -= 13;
            // 超出区间，处理
            if (eleNum >= 52 && eleNum <= 64) {
                eleNum += 26;
            }

        } else {


        }
        newArr[i] = String.fromCharCode(eleNum);

        // 将处理后的字符组成字符串
    }
    var newStr = newArr.join('');
    console.log(newStr);
    alert(newStr);

}

