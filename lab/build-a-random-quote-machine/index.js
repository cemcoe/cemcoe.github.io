// 产生随机数
// 
// var ran = Math.random();
// // 生成0-1的随机小数；
// console.log(ran);
// // 要想生成整数*10取整就好
// ran = ran * 10;
// console.log(ran);
// // 取整
// ran = Math.floor(ran);
// console.log(ran);
// // 综上，生成一个随机整数的写法是
// var ranNum = Math.floor(Math.random()*10);
// console.log(ranNum)
// 现在，将取值区间任意话
// 在start和end间产生随机整数

console.log("创建一个短语数组");
var sentence = ['美好的一天', '快乐的傍晚', '惬意的做梦'];
console.log("看一下我们的短语：");
console.log(sentence);


var randomNum;
function genRanNum(start, end) {
    randomNum = Math.floor(Math.random() * (end - start + 1)) + start;
    console.log(randomNum);
    return randomNum;
};
// console.log("随机整数生成的效果：");
// for (i=0;i<10;i++) {
//     genRanNum(0, 1);
// }

console.log("那么我们要产生的随机数的区间：明显start-0：end-sentence.length-1");
// console.log("随机整数生成的效果：");
// for (i=0;i<10;i++) {
//     genRanNum(0, sentence.length-1);
// }
console.log("拿到随机数后，通过索引找到短语");

var genBtn = document.getElementById('gen');
var displayCon = document.getElementById('display');
var tweet = document.getElementById('tweet');
genBtn.onclick = function () {
    console.log("你点击了genBtn，每点一次就重新生成随机数");
    genRanNum(0, sentence.length - 1);
    var currentSentence = sentence[randomNum];
    displayCon.innerHTML = currentSentence;
    var tweetSrc = "https://twitter.com/intent/tweet?hashtags=quotes&related=cemcoe&text=" + currentSentence;
    tweet.setAttribute("href", tweetSrc);
}

        // 将短语发布到twitter
        // https://twitter.com/intent/tweet?hashtags=quotes&related=cemcoe&text=haha

