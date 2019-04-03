var myDate = new Date();
console.log(myDate);
var myHours = myDate.getHours();
var wrapper = document.getElementById('wrapper');


// alarmHour 定时
// stepSize 步长，目前以时为单位
function alarmClock(message, alarmHour, stepSize) {
  if (myHours > alarmHour && myHours < alarmHour + stepSize) {
    alert("嘿伙计，现在已经" + myHours + "点喽" + "\n\n" + "BenGo提醒你该" + message + "了");
    wrapper.style.backgroundColor = "#000";
    wrapper.style.opacity = .6;
  }
}

alarmClock("碎觉觉", 22, 2);


//------------控制元素的显示和隐藏---------------
var old = document.getElementsByClassName('old')[0];
var add = document.getElementsByClassName('add')[0];
var goWhere = document.getElementsByClassName('go-where')[0];

var avopp = false;

old.onclick = function () {
  avopp = true;
}

add.onclick = function () {
  if (avopp) {
    alert('解锁成功，小的这就为你准备');
    goWhere.style.display = "block";

  }

}
