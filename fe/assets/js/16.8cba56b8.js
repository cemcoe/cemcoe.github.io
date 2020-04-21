(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{268:function(t,s,a){t.exports=a.p+"assets/img/cors.6c86381c.jpg"},269:function(t,s,a){t.exports=a.p+"assets/img/shuaiguo.27e5f5e2.jpeg"},330:function(t,s,a){"use strict";a.r(s);var n=a(28),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("现在的自媒体平台很多，对于喜欢折腾的可能会在多个平台搞。")]),t._v(" "),n("p",[t._v("这里就会出现一个麻烦的点，就是图片的问题。")]),t._v(" "),n("p",[t._v("拿 jianshu 来说，目前(2020.4.21)是支持图片外链的，也就是说，将在 jianshu 写的 markdown 文件直接放到 GitHub 上，图片是可以正常显示的。")]),t._v(" "),n("p",[t._v("有一段时间经常在网上看到下面的信息，一般是某小编将在某平台编辑的 markdown 文件直接粘贴到了另一个平台，而图片存放在原来的服务器，此时图片就挂了。")]),t._v(" "),n("blockquote",[n("p",[t._v("此图片来自XXX平台未经允许不可引用")])]),t._v(" "),n("p",[t._v("当你想要将博客迁移到另一个平台时，比如从 jianshu 迁移到 GitHub，如果 jianshu  不支持图片外链的话，那么迁移图片就是一个大工程。")]),t._v(" "),n("h2",{attrs:{id:"为什么？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为什么？"}},[t._v("#")]),t._v(" 为什么？")]),t._v(" "),n("p",[t._v("为什么会出现图片禁止引用呢？其实这只是一种情况，向上推，他的术语叫禁止外链，包括但不限于图片视频等。")]),t._v(" "),n("p",[t._v("这些问题一般会在跨域的时候出现，什么是跨域？简言之，你不是我家的人，你不能来吃我家大米。")]),t._v(" "),n("p",[t._v("统一资源定位符的标准格式如下：")]),t._v(" "),n("blockquote"),t._v(" "),n("p",[t._v("哪些情况是跨域呢？端口不同就已经是跨域了，往右如果不同就不会涉及到跨域，往左不行。")]),t._v(" "),n("p",[t._v("在前端开发时往往要解决跨域问题，数据访问不到还写个吉尔。不能一刀切，都不能访问还有什么用。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 前端：")]),t._v("\nhttp"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("home\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 后端")]),t._v("\nhttp"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n")])])]),n("p",[t._v("两者的端口是不同的，此时已经跨域。")]),t._v(" "),n("p",[t._v("当前端进行 ajax 请求时，会触发跨域警告并且拿不到我们需要的数据。\n"),n("img",{attrs:{src:a(268),alt:"cors"}})]),t._v(" "),n("h2",{attrs:{id:"分析-甩锅"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分析-甩锅"}},[t._v("#")]),t._v(" 分析(甩锅)")]),t._v(" "),n("p",[t._v("理智分析一波，出现这个情况究竟是前端的问题还是后端的问题？\n"),n("img",{attrs:{src:a(269),alt:"甩锅"}})]),t._v(" "),n("p",[t._v("嗯，")]),t._v(" "),n("p",[t._v("解决方法很多。\n这里采用后端背锅的方案")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// koa")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 处理跨域")]),t._v("\nrouter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("all")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Access-Control-Allow-Origin"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Access-Control-Allow-Headers"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X-Requested-With"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Access-Control-Allow-Methods"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PUT,POST,GET,DELETE,OPTIONS"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X-Powered-By"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("' 3.2.1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/json;charset=utf-8"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("在线 mock 平台，也是后端解决了跨域问题。这样的话，所有的域都可以访问这个接口了，当然，工作中可能接口只对特定的域开放。")])])}),[],!1,null,null,null);s.default=e.exports}}]);