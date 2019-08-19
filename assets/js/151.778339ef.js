(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{242:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[s("a",{attrs:{href:"https://vuepress.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress"),s("OutboundLink")],1),t._v(" is a static site generator developed in "),s("a",{attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.js"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p"),t._m(1),s("p"),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("Most of the Markdown syntax is fine. Below are some default extensions:")]),t._v(" "),t._m(9),t._m(10),t._v(" "),s("p",[t._v("You can import a shiny gadget (vue component) into Markdown.")]),t._v(" "),s("p",[t._v("For example, You can insert below code into Markdown for Badges: "),s("Badge",{attrs:{text:"beta",type:"warn"}}),t._v(" "),s("Badge",{attrs:{text:"0.10.1+"}})],1),t._v(" "),t._m(11),s("p",[t._v("Check "),s("a",{attrs:{href:"https://vuepress.vuejs.org/guide/using-vue.html#script-style-hoisting",target:"_blank",rel:"noopener noreferrer"}},[t._v("Using Vue in Markdown"),s("OutboundLink")],1)]),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("GitHub Pages:")]),t._v(" "),t._m(13),t._m(14),t._v(" "),s("p",[t._v("VuePress is a descent static site generator. What makes it super different is you can have Markdown, HTML, JavaScript Components in your content.")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vuepress",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuejs/vuepress"),s("OutboundLink")],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"vuepress"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuepress","aria-hidden":"true"}},[this._v("#")]),this._v(" VuePress")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#usage"}},[this._v("Usage")])]),e("li",[e("a",{attrs:{href:"#config"}},[this._v("Config")])]),e("li",[e("a",{attrs:{href:"#routing"}},[this._v("Routing")])]),e("li",[e("a",{attrs:{href:"#markdown"}},[this._v("Markdown")])]),e("li",[e("a",{attrs:{href:"#extend-markdown"}},[this._v("Extend markdown")])]),e("li",[e("a",{attrs:{href:"#deploy"}},[this._v("Deploy")])]),e("li",[e("a",{attrs:{href:"#conclusion"}},[this._v("Conclusion")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" project\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" project\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" vuepress\n\n$ ./node_modules/.bin/vuepress dev\n\n$ ./node_modules/.bin/vuepress build\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#config","aria-hidden":"true"}},[this._v("#")]),this._v(" Config")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("# "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vuepress"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Spark'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  description"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Ju\\'s Public Thoughts and Notes'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  base"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/spark/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/last-updated'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"routing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#routing","aria-hidden":"true"}},[this._v("#")]),this._v(" Routing")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("README.md")]),t._v(" -> "),s("code",[t._v("/index.html")])]),t._v(" "),s("li",[s("code",[t._v("file.md")]),t._v(" -> "),s("code",[t._v("/file.html")])]),t._v(" "),s("li",[s("code",[t._v("dir/README.md")]),t._v(" -> "),s("code",[t._v("/dir/")])]),t._v(" "),s("li",[s("code",[t._v("dir/file.md")]),t._v(" -> "),s("code",[t._v("/dir/file.html")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"markdown"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markdown","aria-hidden":"true"}},[this._v("#")]),this._v(" Markdown")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token hr punctuation"}},[t._v("---")]),t._v("\ntitle: Enqueue Zero\nmeta:\n "),s("span",{pre:!0,attrs:{class:"token title important"}},[t._v("- url: https://enqueuezero.com\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" H1")]),t._v("\n\n// Generate Table of Content\n[[toc]]\n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" H2")]),t._v("\n\n// Link to a page\n"),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("Home")]),t._v("](/)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("Home > Utilities")]),t._v("](/#Utilities)")]),t._v("\n\n// Tip can be "),s("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("`tip`")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("`danger`")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("`warning`")]),t._v("\n::: tip\nIt's important to me that you like this project.\n:::\n\n// Highlight\n``` js{1}\nvar i;\ni = 1;\nconsole.log(i);\n\n// Import\n<<< @/filepath\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"extend-markdown"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#extend-markdown","aria-hidden":"true"}},[this._v("#")]),this._v(" Extend markdown")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('<Badge text="beta" type="warn"/> <Badge text="0.10.1+"/>\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"deploy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deploy","aria-hidden":"true"}},[this._v("#")]),this._v(" Deploy")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ ./node_modules/.bin/vuepress build\n$ cd .vuepress/dist\n$ git init && git add . && git commit -m 'deploy' & git push -f origin master:gh-pages\n$ cd -\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"conclusion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[this._v("#")]),this._v(" Conclusion")])}],!1,null,null,null);e.default=n.exports}}]);