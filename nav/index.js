var myDate = new Date();
console.log(myDate);
var myHours = myDate.getHours();
var wrapper = document.getElementById('wrapper');
var header = document.getElementsByTagName('header')[0];
var headerA = header.getElementsByTagName('a')[0];


// alarmHour 定时
// nexthour 到几点
function alarmClock(message, alarmHour, nextHour) {
  if (myHours >= alarmHour && myHours <= nextHour) {
    // alert("嘿伙计，现在已经" + myHours + "点喽" + "\n\n" + "BenGo提醒你该" + message + "了");
    // wrapper.style.backgroundColor = "#000";
    // wrapper.style.opacity = .6;
    
    headerA.innerText = message;
  }
}

alarmClock("上午好", 8, 10);
alarmClock("次饭饭", 12, 13);
alarmClock("碎觉觉", 22, 23);


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
//------------控制元素的显示和隐藏---------------



// 弹出菜单
var header = document.getElementsByTagName('header')[0];
var headerAitem = header.getElementsByTagName('a')[0];
var mainNav = document.getElementsByClassName('main-nav')[0];
var rightFixed = document.getElementsByClassName('right-fixed')[0];

rightFixed.onclick = function (e) {
  // alert(1);
  // 取消 a 的跳转事件
  e.returnValue = false;
  console.log("你点击了 right fixed ");
  
  if (mainNav.classList.contains('js-main-nav')) {
    mainNav.classList.remove("js-main-nav");
    console.log('js-main-nav 已添加');

  } else {
    mainNav.classList.add("js-main-nav");
  }
}


mainNav.onclick = function () {
  if (mainNav.classList.contains('js-main-nav')) {
    mainNav.classList.remove("js-main-nav");
    console.log('js-main-nav 已添加');
    header.style.display = "none";
    
  }

}


var yourName;

if (window.localStorage) {
  console.log("浏览器支持localstorage");
  // if (yourName == undefined) {
  //   yourName = prompt("name", "");
  // }
  localStorage.Name = yourName;
  if (localStorage.getItem('Name') == "undefined") {
    // alert(localStorage.Name);
    console.log(localStorage.Name);


  }
  console.log("localStorage.myName:" + localStorage.myName);

} else {
  alert("boom");
}


