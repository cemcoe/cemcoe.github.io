/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_header_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_header_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__js_header_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_mingzhan_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_mingzhan_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__js_mingzhan_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_coolzhan_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_coolzhan_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__js_coolzhan_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_explorezhan_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_explorezhan_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__js_explorezhan_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_siteinfo_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_siteinfo_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__js_siteinfo_js__);









console.log(__WEBPACK_IMPORTED_MODULE_0__js_header_js__["header"], __WEBPACK_IMPORTED_MODULE_1__js_mingzhan_js__["mingzhan"], __WEBPACK_IMPORTED_MODULE_2__js_coolzhan_js__["coolzhan"], __WEBPACK_IMPORTED_MODULE_3__js_explorezhan_js__["explorezhan"], __WEBPACK_IMPORTED_MODULE_4__js_siteinfo_js__["siteinfo"]);
// console.log(mingzhan);
// console.log(coolzhan);
// console.log(siteinfo);
// console.log(explorezhan);

// css
__webpack_require__(6)

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var header = new Vue({
    el: '#header',
    data: {
        imgUrl: "./static/img/loading.webp",
        refUrl: "../blog/2019/write-a-nav-by-yourself/index.html",
        name: "Hello Chemcode"

    }
})

module.exports = {
    header
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var mingzhan = new Vue({
    el: "#mingzhan",
    data: {
        mingZhanList: [
            {
                "url": "https://mobile.twitter.com",
                "title": "this is def title",
                "name": "推特"
            },
            {
                "url": "https://www.instagram.com/",
                "title": "用来看小姐姐",
                "name": "Ig"
            },
            {
                "url": "https://www.cnblogs.com/",
                "title": "this is def title",
                "name": "博客园"
            },
            {
                "url": "https://www.medium.com/",
                "title": "this is def title",
                "name": "mudium"
            },
            {
                "url": "https://github.com/cemcoe/cwiki",
                "title": "Personal knowledge management",
                "name": "cwiki"
            },
            {
                "url": "https://www.infoq.com/",
                "title": "Curated and peer-reviewed content covering innovation in professional software development, read by over 1 million developers worldwide",
                "name": "infoq"
            },
            {
                "url": "https://readhub.cn/topics",
                "title": "每天三分钟的科技新闻聚合阅读",
                "name": "readhub"
            },
            {
                "url": "https://hackforums.net/index.php",
                "title": "Hack Forums is the ultimate security technology and social media forum",
                "name": "hackforums"
            },
            {
                "url": "http://mail.google.com/",
                "title": "this is def title",
                "name": "mail"
            },
            {
                "url": "https://juejin.im/",
                "title": "this is def title",
                "name": "掘金"
            },
            {
                "url": "https://www.v2ex.com/",
                "title": "this is def title",
                "name": "V站"
            },
            {
                "url": "https://www.52pojie.cn",
                "title": "this is def title",
                "name": "吾爱"
            },
            {
                "url": "https://www.reddit.com/",
                "title": "this is def title",
                "name": "reddit"
            },
            {
                "url": "http://ourcoders.com/",
                "title": "this is def title",
                "name": "coders"
            },
            {
                "url": "https://www.quora.com/",
                "title": "this is def title",
                "name": "圈儿"
            }
        ]
    }
})

module.exports = {
    mingzhan
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var coolzhan = new Vue({
    el: "#coolZhan",
    data: {
        CoolZhanListFirst: [{
            url: "https://www.dcard.tw/f",
            name: "Dcard"
        }, {
            url: "https://bbs.kafan.cn",
            name: "卡饭"
        }, {
            url: "https://bbs.pediy.com",
            name: "看雪"
        }, {
            url: "http://www.chinapyg.com",
            name: "飘云"
        }],
        CoolZhanListSecond: [{
            url: "http://www.shouxb.com/",
            title: "86",
            name: "86"

        }, {
            url: "https://stackoverflow.com/",
            name: "SF"
        }, {
            url: "https://www.okzy.co/?m=vod-type-id-3.html",
            name: "ok"
        }, {
            url: "https://0x00sec.org/",
            title: "The Home of the Hacker - Malware, Reverse Engineering, and Computer Science",
            name: "0x00sec"
        }],
        CoolZhanListThird: [{
            url: "https://www.taptap.com/",
            name: "Tab"
        }, {
            url: "https://right.com.cn/FORUM/forum.php",
            name: "恩山"
        }, {
            url: "https://qiita.com/",
            name: "Qiita"
        }, {
            url: "https://hacpai.com/",
            name: "黑派"
        }]
    }


})

module.exports = {
    coolzhan
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var explorezhan = new Vue({
    el: "#exploreZhan",
    data: {
        "exploreZhan": [{
            url: "https://zh.wikipedia.org/",
            title: "维基百科 | 自由的百科全书",
            icon: "https://zh.wikipedia.org/static/apple-touch/wikipedia.png"
        }, {
            url: "https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb",
            title: "vimium | 电脑端推荐搭配使用",
            icon: "https://lh3.googleusercontent.com/BdBMEyMNvlK8QEd1FQg7GK_dfAw04WbllM390aBU1yLKOR0qjwqtJejVcV6-iKWgPdPJhTIM=w128-h128-e365"
        }, {
            url: "https://www.xda-developers.com/",
            title: "XDA-Developers Android Forums",
            icon: "https://forum.xda-cdn.com/images/2015/favicons/apple-touch-icon-152x152.png"
        }, {
            url: "https://www.tofugu.com/",
            title: "Tofugu | A Japanese Culture & Language Blog",
            icon: "https://www.tofugu.com/apple-touch-icon-152x152-precomposed.png"
        }, {
            url: "https://www.naver.com/",
            title: "네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요",
            icon: "https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png"
        }, {
            url: "https://abema.tv/",
            title: "AbemaTV｜国内最大の無料インターネットテレビ局",
            icon: "https://hayabusa.io/abema/assets/img_icon.w180.h180.v1f486dd.png"
        }, {
            url: "https://www.wuzuowei.net",
            title: "无作为 | 分享不仅仅是一种态度！",
            icon: "https://www.wuzuowei.net/favicon.ico"
        }, {
            url: "https://www.sigure.tw/",
            title: "時雨の町 | 日文學習園地",
            icon: "https://www.sigure.tw/templates/ol_transparent2/images/favicon.ico"
        }, {
            url: "http://www.sssoou.com/",
            title: "telegram频道搜索",
            icon: "#"
        }, {
            url: "https://salttiger.com/",
            title: "SaltTiger | 每天一本编程书，每天进步一点点",
            icon: "#"
        }]

    }


})

module.exports = {
    explorezhan
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var siteinfo = new Vue({
    el: "#footer",
    data: {
        update: "2019-11-08",
        email: "admin@cemcoe.com",
        copyright: "ChemCode"
    }
})

module.exports = {
    siteinfo
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(7);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(9)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// Module
exports.push([module.i, "/* reset begin */\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\na {\r\n  text-decoration: none;\r\n  color: #000;\r\n  font-size: 14px;\r\n  text-align: center;\r\n}\r\nli {\r\n  list-style: none;\r\n}\r\na:hover {\r\n  opacity: .6;\r\n}\r\n\r\n/* h2 reset*/\r\nh2 {\r\n  margin: 66px auto 12px;\r\n  font-weight: 700;\r\n  /* border-top: 6px solid #5011e4; */\r\n  border-top: 6px solid rgb(8, 213, 240);\r\n  width: 120px;\r\n  height: 36px;\r\n  border-radius: 2px;\r\n  background-color: #f0ecec;\r\n  border-radius: 12px;\r\n  box-shadow: 1px 1px 1px #d48282;\r\n  font-size: 16px;\r\n  display: block;\r\n  /* width: 100%;\r\n  height: 100%; */\r\n  line-height: 36px;\r\n  color: rgb(12, 1, 8);\r\n  letter-spacing: 4px;\r\n  text-align: center;\r\n}\r\n\r\nh2 a:target {\r\n  color: #f40;\r\n}\r\n/* h2 reset end*/\r\n\r\n/* reset end*/\r\n\r\n\r\n\r\n\r\n/* 默认手机 css*/\r\n/* body begin */\r\nbody {\r\n  background-color: #f0ecec;\r\n  max-width: 600px;\r\n  min-width: 300px;\r\n  margin: 0 auto;\r\n  position: relative;\r\n  font-family: -apple-system, BlinkMacSystemFont, \"PingFang SC\",\"Helvetica Neue\",STHeiti,\"Microsoft Yahei\",Tahoma,Simsun,sans-serif;\r\n}\r\n\r\n\r\n\r\n\r\n/* loadings begin */\r\n.loadings {\r\n  position: fixed;\r\n  z-index: 244;       \r\n  width: 0px;\r\n  height: 0px;\r\n}\r\n\r\n.loading {\r\n  width: 35px;\r\n  height: 35px;\r\n  animation: loading 2s infinite;\r\n  -webkit-animation: loading 2s infinite; /* Safari 和 Chrome */\r\n\r\n}\r\n\r\n@keyframes loading {\r\n  0% {\r\n      opacity: 0.2;\r\n      transform: rotate(0deg);\r\n      -ms-transform: rotate(0deg); \t/* IE 9 */\r\n      -moz-transform: rotate(0deg); \t/* Firefox */\r\n      -webkit-transform: rotate(0deg); /* Safari 和 Chrome */\r\n      -o-transform: rotate(0deg); \t/* Opera */\r\n  }\r\n  50% {\r\n      opacity: 0.8;   \r\n  }\r\n  100% {\r\n      opacity: 0.2;\r\n      z-index: -100;\r\n      transform: rotate(360deg);\r\n      -ms-transform: rotate(360deg); \t/* IE 9 */\r\n      -moz-transform: rotate(360deg); \t/* Firefox */\r\n      -webkit-transform: rotate(360deg); /* Safari 和 Chrome */\r\n      -o-transform: rotate(360deg); \t/* Opera */\r\n  }\r\n}\r\n/* ladings end */\r\n\r\n\r\n/* header begin */\r\nheader {\r\n  width: 100%;\r\n  height: 36px;\r\n  \r\n}\r\nheader a {\r\n  display: block;\r\n  max-width: 600px;\r\n  width: 100%;\r\n  height: 36px;\r\n  position: fixed;\r\n  line-height: 36px;\r\n  background-color: rgb(222, 214, 224);\r\n  text-shadow: 1px 2px 3px #e3dbdb;\r\n  color: #b32aa9;\r\n  box-shadow: 1px 1px 1px #d48282;\r\n  animation: run 3s;\r\n  -webkit-animation: run 3s; /* Safari 和 Chrome */\r\n  z-index: 233;\r\n  /* opacity: .4; */\r\n}\r\n@keyframes run {\r\n  0%{\r\n    background-color: #000;\r\n  }\r\n  100%{\r\n    background-color: rgb(222, 214, 224);\r\n  }\r\n}\r\n/* header end */\r\n\r\n\r\n/* mingzhan begin */\r\n.mingzhan {\r\n  border: 12px solid #5011e4;\r\n  border-radius: 4px;\r\n  margin-top: 12px;\r\n  box-shadow: 1px 1px 3px #000;\r\n  background-color: #f0ecec;\r\n}\r\n.mingzhan ul {\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  overflow: hidden;\r\n}\r\n.mingzhan li {\r\n  float: left;\r\n  width: 20%;\r\n  height: 38px;\r\n  line-height: 38px;\r\n  text-align: center;\r\n  overflow: hidden;\r\n}\r\n.mingzhan li:nth-of-type(2n+1) {\r\n  background-color: #fff;\r\n  box-shadow: inset 0px 1px 1px #000;\r\n}\r\n.mingzhan li a {\r\n  display: inline-block;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n/* mingzhan end */\r\n\r\n\r\n/* cool begin */\r\n.cool {\r\n  width: 98%;\r\n  margin: 24px auto 12px auto;\r\n}\r\n\r\n.cool ul {\r\n  display: flex;\r\n  justify-content: space-between;\r\n\r\n}\r\n.cool ul li {\r\n  border-radius: 2px;\r\n  height: 40px;\r\n  width: 24.6%;\r\n  margin-bottom: 4px;\r\n  line-height: 40px;\r\n  /* box-shadow: 1px 1px 1px rgb(77, 5, 247); */\r\n}\r\n\r\n.cool li a {\r\n  display:inline-block;\r\n  width:100%;\r\n  height:100%;\r\n  background-color: #f0ecec;\r\n\r\n  /* color: rgb(241, 238, 245); */\r\n}\r\n/* cool end */\r\n\r\n/* front-end */\r\n.front-end {\r\n  width: 98%;\r\n  /* background-color: #000; */\r\n  margin: 0 auto;\r\n}\r\n\r\n.front-end ul {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n  /* border: 1px solid #000;\r\n  box-sizing: content-box; */\r\n\r\n}\r\n.front-end ul li {\r\n  border-radius: 2px;\r\n  /* padding-top: 10px;\r\n  padding-bottom: 10px; */\r\n  height: 60px;\r\n  width: 49.8%;\r\n  margin-bottom: 4px;\r\n  line-height: 60px;\r\n  box-shadow: 2px 2px 2px rgb(255, 255, 255),\r\n  -2px -2px 2px rgb(255, 255, 255);\r\n  /* box-sizing: border-box;\r\n  border-bottom: 1px solid #000; */\r\n}\r\n\r\n.front-end li a {\r\n  display:inline-block;\r\n  width:100%;\r\n  height:100%;\r\n  background-color: #f0ecec;\r\n  \r\n  /* color: rgb(241, 238, 245); */\r\n  /* box-shadow: 1px 1px 1px rgb(77, 5, 247); */\r\n}\r\n\r\n\r\n\r\n/* \r\n\r\n.explore li {\r\n  display: inline-block;\r\n  margin: 12px 2px;\r\n\r\n}\r\n.explore a {\r\n  border: 1px solid rgb(241, 235, 235);\r\n  padding: 12px;\r\n  background-color: rgb(46, 25, 238);\r\n  color: rgb(247, 242, 242);\r\n  border-radius: 6%;\r\n  display: inline-block;\r\n  width: 100%;\r\n  height: 100%;\r\n  \r\n} */\r\n/**/\r\n\r\n\r\n\r\n\r\n.explore li {\r\n  height: 50px;\r\n  background-color: rgb(238, 229, 229);\r\n  /* margin-bottom: 4px; */\r\n  overflow: hidden;\r\n  width: 98%;\r\n  margin: 4px auto;\r\n  box-shadow: 0px 1px 1px #000;\r\n\r\n\r\n}\r\n\r\n.wrapper {\r\n  display: flex;\r\n}\r\n\r\n.explore li .link-img {\r\n  /* box-sizing: border-box; */\r\n  background-color: #fff;\r\n  width: 50px;\r\n  height: 50px;\r\n  /* padding: 4px; */\r\n}\r\n\r\n.link-img img {\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n.wrapper-right {\r\n  padding-left: 4px;\r\n  line-height: 50px;\r\n\r\n}\r\n\r\n/* footer begin */\r\nfooter {\r\n  margin: 2px auto 0 auto;\r\n  text-align: center;\r\n  width: 100%;\r\n  border-radius: 0px;\r\n  background:rgba(12, 12, 12, .9);\r\n}\r\nfooter p {\r\n  line-height: 24px;\r\n  font-size: 12px;\r\n}\r\n\r\nfooter a {\r\n  color: rgba(8, 8, 8, 0.6);\r\n  text-shadow:-1px -1px rgba(255, 255, 255, .3); \r\n  /* color:blue;  */\r\n  text-decoration: underline;\r\n  font-size: 12px;\r\n  \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n", ""]);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : null;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ })
/******/ ]);