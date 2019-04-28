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
alarmClock(22, 23, "碎觉觉");


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
    headerA.style.position = "static";
    
  }

}

// localhost
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


