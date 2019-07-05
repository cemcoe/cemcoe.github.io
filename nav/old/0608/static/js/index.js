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

