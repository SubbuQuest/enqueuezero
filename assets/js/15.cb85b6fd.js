(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{291:function(e,t,n){"use strict";n.r(t);var s=n(0),r=Object(s.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),n("p"),e._m(1),n("p"),e._v(" "),e._m(2),e._v(" "),n("p",[e._v("In computing, program doing input / output, or I/O, has five major ways:")]),e._v(" "),e._m(3),e._v(" "),n("p",[e._v("In programming language, the last I/O - Asynchronous I/O and others derive two programming models: synchronous and asynchronous.")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),n("p",[e._v("The major difference between synchronous and asynchronous is how they handle tasks.")]),e._v(" "),e._m(6),e._v(" "),n("p",[e._v("Executing synchronously describes the sequence of code execution in one-by-one order. The execution of code must wait until previous operation finish, and won't execute next operation until itself finish.")]),e._v(" "),e._m(7),e._v(" "),n("p",[e._v("Executing asynchronously refers to as submitting a task to a runner, and then immediately running next task without knowing the result of previous task. The submitted task will be completed or aborted at a certain time later.")]),e._v(" "),e._m(8),e._v(" "),n("p",[e._v("Below examples describe how to read the content of a file in synchronous and asynchronous API styles.")]),e._v(" "),e._m(9),e._v(" "),n("p",[e._v("Using synchronous API is the simplest solution. If you want to know the execution of code, just look through lines of code one by one.")]),e._v(" "),e._m(10),e._m(11),e._v(" "),n("p",[e._v("Using callback as asynchronous is the easiest way to understand asynchronous. We can follow below rules to track the execution of code:")]),e._v(" "),e._m(12),e._v(" "),n("p",[e._v("Below code is using tornado.")]),e._v(" "),e._m(13),n("p",[e._v("Note that some languages have asynchronous in-built, such as node.js. Thus, you don't need to maintain event loop at all.")]),e._v(" "),e._m(14),e._m(15),e._v(" "),e._m(16),e._v(" "),n("p",[e._v("Future, or promise, or deferred, refers to a data structure for managing asynchronous task state and result. The data structure is created when the asynchronous task is submitted to event loop. It maintains the running state of job. It stores the result if the job runs successfully, or error information if the job runs failure. A future can also be mixed with callback.")]),e._v(" "),e._m(17),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),n("p",[e._v("Async and await are a pair of keywords that are introduced by many programming languages. It enables you to write asynchronous code just like writing synchronous code. Below is a demonstration.")]),e._v(" "),e._m(21),n("p",[e._v("Be aware that the synchronous functions and asynchronous functions must be in two different worlds. Especially when handling I/O, they should never be mixed. For example, below synchronous call will block the event loop and hence hang all scheduled asynchronous.")]),e._v(" "),e._m(22),e._m(23),e._v(" "),e._m(24),e._v(" "),n("p",[e._v("The implementation of asynchronous can be")]),e._v(" "),e._m(25),e._v(" "),n("p",[e._v("Non-blocking asynchronous operations takes far less time than blocking methods. Yet it still depends on the implementation of specific program.")]),e._v(" "),n("p",[e._v("Although we won't call synchronous functions in asynchronous functions, we can still wrap synchronous functions running in a thread to make it asynchronous. Introducing this technique usually will harm the performance, but it make the code more flexible.")]),e._v(" "),e._m(26),e._v(" "),n("p",[e._v("Synchronous code is simple to read but less performant. Asynchronous code is frustrating to read and write but has high performance. Today, many web servers choose to manage HTTP connections through asynchronous model. If you care performance very much and the bottleneck is at I/O, think about asynchronous; otherwise writing synchronous code can save you a lot of time.")]),e._v(" "),e._m(27),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://stackoverflow.com/questions/748175/asynchronous-vs-synchronous-execution-what-does-it-really-mean",target:"_blank",rel:"noopener noreferrer"}},[e._v("Asynchronous vs synchronous execution waht does it really mean"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://hackernoon.com/asynchronous-python-45df84b82434",target:"_blank",rel:"noopener noreferrer"}},[e._v("Asynchronous python"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"http://www.tornadoweb.org/en/stable/guide/async.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tornado async guide"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://aiohttp.readthedocs.io/en/stable/",target:"_blank",rel:"noopener noreferrer"}},[e._v("aiohttp"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Futures_and_promises",target:"_blank",rel:"noopener noreferrer"}},[e._v("Futures and promises"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nodejs blocking vs nonblocking"),n("OutboundLink")],1)])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"asynchronous-and-synchronous"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#asynchronous-and-synchronous","aria-hidden":"true"}},[this._v("#")]),this._v(" Asynchronous and Synchronous")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#context"}},[e._v("Context")])]),n("li",[n("a",{attrs:{href:"#introduction"}},[e._v("Introduction")]),n("ul",[n("li",[n("a",{attrs:{href:"#synchronous"}},[e._v("Synchronous")])]),n("li",[n("a",{attrs:{href:"#asynchronous"}},[e._v("Asynchronous")])])])]),n("li",[n("a",{attrs:{href:"#solutions"}},[e._v("Solutions")]),n("ul",[n("li",[n("a",{attrs:{href:"#synchronous"}},[e._v("Synchronous")])]),n("li",[n("a",{attrs:{href:"#asynchronous-callback"}},[e._v("Asynchronous - Callback")])]),n("li",[n("a",{attrs:{href:"#asynchronous-futures-and-promises"}},[e._v("Asynchronous - Futures and Promises")])]),n("li",[n("a",{attrs:{href:"#async-and-await"}},[e._v("Async and Await")])]),n("li",[n("a",{attrs:{href:"#performance"}},[e._v("Performance")])])])]),n("li",[n("a",{attrs:{href:"#conclusions"}},[e._v("Conclusions")])]),n("li",[n("a",{attrs:{href:"#references"}},[e._v("References")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"context"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#context","aria-hidden":"true"}},[this._v("#")]),this._v(" Context")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("Blocking I/O")]),e._v(" "),n("li",[e._v("Non-blocking I/O")]),e._v(" "),n("li",[e._v("I/O Multiplex")]),e._v(" "),n("li",[e._v("Signal-driven I/O")]),e._v(" "),n("li",[e._v("Asynchronous I/O")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Synchronous execution.")]),this._v(" "),t("li",[this._v("Asynchronous execution.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[this._v("#")]),this._v(" Introduction")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"synchronous"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#synchronous","aria-hidden":"true"}},[this._v("#")]),this._v(" Synchronous")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"asynchronous"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#asynchronous","aria-hidden":"true"}},[this._v("#")]),this._v(" Asynchronous")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"solutions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solutions","aria-hidden":"true"}},[this._v("#")]),this._v(" Solutions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"synchronous-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#synchronous-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Synchronous")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("import requests\nresponse = requests.get('https://enqueue.zero')\nprint(len(response.content.split()))\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"asynchronous-callback"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#asynchronous-callback","aria-hidden":"true"}},[this._v("#")]),this._v(" Asynchronous - Callback")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("All asynchronous execution can only be scheduled when a event loop is running.")]),e._v(" "),n("li",[e._v("There is no asynchronous code execution when event loop stopped.")]),e._v(" "),n("li",[e._v("The start of the code happens on when we call it. Make sure the event loop is running.")]),e._v(" "),n("li",[e._v("When asynchronous code execution is finish, a callback function will be called.")]),e._v(" "),n("li",[e._v("There must be no blocking I/O code in either task or callback.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("import tornado.ioloop\nfrom tornado.httpclient import AsyncHTTPClient\n\ndef handle_response(response):\n    print(len(response.body.split()))\n\nhttp_client = AsyncHTTPClient()\nhttp_client.fetch('https://enqueue.zero', handle_response)\n\ntornado.ioloop.IOLoop.instance().start()\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("const https = require('https');\n\nhttps.get('https://enqueuezero.com', (res) = {\n    // handle response\n});\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Advantages\n"),t("ul",[t("li",[this._v("Easy to understand")])])]),this._v(" "),t("li",[this._v("Disadvantages\n"),t("ul",[t("li",[this._v("Callback everywhere leads to ugly code.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"asynchronous-futures-and-promises"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#asynchronous-futures-and-promises","aria-hidden":"true"}},[this._v("#")]),this._v(" Asynchronous - Futures and Promises")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("import tornado.ioloop\nfrom tornado.concurrent import Future\nfrom tornado.httpclient import AsyncHTTPClient\n\ndef async_fetch_future(url):\n    http_client = AsyncHTTPClient()\n    my_future = Future()\n    fetch_future = http_client.fetch(url)\n    fetch_future.add_done_callback(\n        lambda f: my_future.set_result(f.result()))\n    return my_future\n\ndef handle_response(response):\n    print(len(response.body.split()))\n\nfuture = async_fetch_future('https://enqueuezero.com')\nfuture.add_done_callback(lambda f: handle_response(f.result()))\n\ntornado.ioloop.IOLoop.instance().start()\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("In some programming languages, the model could be named as "),t("code",[this._v("Promise()")]),this._v(", or "),t("code",[this._v("Deferred()")]),this._v(", but they're actually the same thing.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Advantages\n"),t("ul",[t("li",[this._v("Future can maintain errors as well.")]),this._v(" "),t("li",[this._v("Future can maintain execution status.")])])]),this._v(" "),t("li",[this._v("Disadvantages\n"),t("ul",[t("li",[this._v("Complex")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"async-and-await"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#async-and-await","aria-hidden":"true"}},[this._v("#")]),this._v(" Async and Await")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("import aiohttp\nimport asyncio\n\nasync def fetch():\n    async with aiohttp.ClientSession() as session:\n        async with sesion.get('https://enqueuezero.com') as response:\n            return len((await response.text()).split())\n\nasyncio.get_event_loop().run_until_complete(fetch)\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("async def fetch():\n    requests.get('https://enqueuezero.com')\n")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("Advantages\n"),n("ul",[n("li",[e._v("Language built-in async support solution.")])])]),e._v(" "),n("li",[e._v("Disadvantages\n"),n("ul",[n("li",[e._v("Need to separate sync and async functions.")]),e._v(" "),n("li",[e._v("Need to write "),n("code",[e._v("async")]),e._v(" and "),n("code",[e._v("await")]),e._v(" everywhere. Missing any one could lead to disaster.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"performance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#performance","aria-hidden":"true"}},[this._v("#")]),this._v(" Performance")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("multi-threading")]),this._v(" "),t("li",[this._v("single-threading + event loop.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"conclusions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conclusions","aria-hidden":"true"}},[this._v("#")]),this._v(" Conclusions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[this._v("#")]),this._v(" References")])}],!1,null,null,null);t.default=r.exports}}]);