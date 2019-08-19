(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{245:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p"),t._m(1),a("p"),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("Sort input from stdin, and then count lines with unique values.")]),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),a("p",[t._v("References")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.python.org/3/tutorial/datastructures.html#sets",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python data structures - Set"),a("OutboundLink")],1)])]),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("Counting distinct values from a table is a built-in feature for most SQL databases.")]),t._v(" "),t._m(13),t._m(14),t._v(" "),a("p",[t._v("Reference")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.w3schools.com/sql/sql_distinct.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("W3C School - SQL SELECT DISTINCT Statement"),a("OutboundLink")],1)])]),t._v(" "),t._m(15),t._v(" "),a("p",[t._v("Applying dataset with HyperLogLog algorithm when inserting data. HyperLogLog can give estimated counting results.")]),t._v(" "),t._m(16),t._m(17),t._v(" "),a("p",[t._v("Reference")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://redis.io/commands/pfadd",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redis command - PFADD"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://redis.io/commands/pfcount",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redis command - PFCOUNT"),a("OutboundLink")],1)])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"count-distinct"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#count-distinct","aria-hidden":"true"}},[this._v("#")]),this._v(" Count Distinct")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#problem"}},[this._v("Problem")])]),s("li",[s("a",{attrs:{href:"#solutions"}},[this._v("Solutions")]),s("ul",[s("li",[s("a",{attrs:{href:"#unix-commands"}},[this._v("Unix commands")])]),s("li",[s("a",{attrs:{href:"#python-script"}},[this._v("Python script")])]),s("li",[s("a",{attrs:{href:"#sql-database"}},[this._v("SQL Database")])]),s("li",[s("a",{attrs:{href:"#redis-hyperloglog-commands"}},[this._v("Redis HyperLogLog Commands")])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"problem"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#problem","aria-hidden":"true"}},[this._v("#")]),this._v(" Problem")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Count-distinct problem is a problem of finding the number of distinct elements in a data set or data stream, within which you might possibly see some repeated elements. For example, "),s("code",[this._v("[1, 3, 2, 1, 5, 2, 4]")]),this._v(" has 5 distinct elements "),s("code",[this._v("[1, 2, 3, 4, 5]")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"solutions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#solutions","aria-hidden":"true"}},[this._v("#")]),this._v(" Solutions")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"unix-commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unix-commands","aria-hidden":"true"}},[this._v("#")]),this._v(" Unix commands")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1\n3\n2\n1\n5\n2\n4'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" data.txt\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),t._v(" data.txt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("uniq")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wc")]),t._v(" -l\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("Advantage\n"),a("ul",[a("li",[t._v("Easy to use")])])]),t._v(" "),a("li",[t._v("Disadvantage\n"),a("ul",[a("li",[t._v("Poor performance when data set grows.")]),t._v(" "),a("li",[t._v("Huge memory usage when data set grows.")]),t._v(" "),a("li",[t._v("Limited data input types")]),t._v(" "),a("li",[t._v("Can't handle data set greater than 10^9  (Memory can store so many data).")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"python-script"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python-script","aria-hidden":"true"}},[this._v("#")]),this._v(" Python script")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Hold values into a Python "),s("code",[this._v("set")]),this._v(" data structure, and then count the size of the set.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" dataset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" distinct "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" element "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" dataset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("     distinct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("distinct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("Advantage\n"),a("ul",[a("li",[t._v("Easy to use")]),t._v(" "),a("li",[t._v("Good performance")]),t._v(" "),a("li",[t._v("Broad data input types")])])]),t._v(" "),a("li",[t._v("Disadvantage\n"),a("ul",[a("li",[t._v("Huge memory usage when data set grows.")]),t._v(" "),a("li",[t._v("Can't handle data set greater than 10^9 (Memory can store so many data).")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"sql-database"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql-database","aria-hidden":"true"}},[this._v("#")]),this._v(" SQL Database")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("COUNT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DISTINCT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Advantage\n"),s("ul",[s("li",[this._v("Can handle huge data set (when index is properly set).")])])]),this._v(" "),s("li",[this._v("Disadvantage\n"),s("ul",[s("li",[this._v("Need to create connection to a database.")]),this._v(" "),s("li",[this._v("Limited use case")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"redis-hyperloglog-commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis-hyperloglog-commands","aria-hidden":"true"}},[this._v("#")]),this._v(" Redis HyperLogLog Commands")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("redis"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" PFADD dataset  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\nredis"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" PFCOUNT dataset\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("Advantage\n"),a("ul",[a("li",[t._v("Fast (O(1))")]),t._v(" "),a("li",[t._v("Memory efficient (a few KB in memory even counting 10^9 data set).")]),t._v(" "),a("li",[t._v("Can be paralleled.")])])]),t._v(" "),a("li",[t._v("Disadvantage\n"),a("ul",[a("li",[t._v("Only provide estimated counting, not accurate value.")])])])])}],!1,null,null,null);s.default=n.exports}}]);