console.log('js 被加载');

// module
var currentDate = new Date();
var currentHours = currentDate.getHours();

var header = document.getElementsByTagName('header')[0];
var headerA = header.getElementsByTagName('a')[0];



function alarmClock(beginHour, endHour, message) {
  if (currentHours >= beginHour && currentHours <= endHour) {
    headerA.innerText = message;

  }
}

alarmClock(8, 10, "上午好");
alarmClock(12, 13, "次饭饭");
alarmClock(22, 23, "碎觉觉喽");




// 滚动
// var giftHidden = document.getElementsByClassName("gift-hidden")[0];
// var loadings = document.getElementsByClassName('loadings')[0];


// var demoTimeInterval = setInterval(function () {
//   if (getScrollOffset().y > headerA.offsetTop) {
//     headerA.style.position = "fixed";
//     loadings.style.position = "fixed";
//     giftHidden.style.display = "none";
//     console.log("圣诞老爷爷消失");

//     clearInterval(demoTimeInterval);
//     console.log("圣诞老爷爷消失，清除坏蛋定时器");

//   } else {
//     console.log("待滚动");
//   }

// }, 1000);








