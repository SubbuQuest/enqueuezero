(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{251:function(e,t,s){"use strict";s.r(t);var i=s(0),n=Object(i.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p"),e._m(1),s("p"),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("A reactive system needs to respond quickly, maybe in less than 500 ms or 1 second.")]),e._v(" "),s("p",[e._v("However, it's inevitable that some jobs need to run for long, maybe even in a few hours.")]),e._v(" "),s("p",[e._v("It's impossible to achieve both goals without changing the execution model, to keep the system responsive all the time and to complete the time-consuming jobs.")]),e._v(" "),e._m(3),e._v(" "),s("p",[e._v("There are at least three solutions: slicing jobs, pre-executing jobs, post-executing jobs.")]),e._v(" "),e._m(4),e._v(" "),s("p",[e._v("Slice the job into chunks of small work.")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),s("p",[e._v("Execute jobs ahead of when it needs and store job results in the database first.")]),e._v(" "),s("p",[e._v("For example, a ticket-selling website, instead of requesting tickets from the upstream supplier every time, might want to obtain some movie tickets before selling. The actual selling ticket is merely to associate user id to the ticket.")]),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),s("p",[e._v("Respond job reference immediately and run the job in the background. When necessary, inquiry the job status and result by job reference, or more proactively, send job result back to the requester.")]),e._v(" "),s("p",[e._v('For example, after user registering an account, the system kicks off a confirmation email job and display "Please wait for a few minutes and check your confirmation email" on the page. The user can check their email inbox later.')]),e._v(" "),s("p",[e._v("Check "),s("router-link",{attrs:{to:"/job-queue.html"}},[e._v("Job Queue")]),e._v(" for more information.")],1),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),s("p",[e._v("Choose Post-executing Jobs strategy if possible. Check "),s("router-link",{attrs:{to:"/job-queue.html"}},[e._v("Job Queue")])],1)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"time-consuming-jobs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#time-consuming-jobs","aria-hidden":"true"}},[this._v("#")]),this._v(" Time-consuming Jobs")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#context"}},[this._v("Context")])]),t("li",[t("a",{attrs:{href:"#solutions"}},[this._v("Solutions")]),t("ul",[t("li",[t("a",{attrs:{href:"#slicing-jobs"}},[this._v("Slicing Jobs")])]),t("li",[t("a",{attrs:{href:"#pre-executing-jobs"}},[this._v("Pre-executing Jobs")])]),t("li",[t("a",{attrs:{href:"#post-executing-jobs"}},[this._v("Post-executing Jobs")])])])]),t("li",[t("a",{attrs:{href:"#conclusion"}},[this._v("Conclusion")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"context"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#context","aria-hidden":"true"}},[this._v("#")]),this._v(" Context")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"solutions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solutions","aria-hidden":"true"}},[this._v("#")]),this._v(" Solutions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"slicing-jobs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#slicing-jobs","aria-hidden":"true"}},[this._v("#")]),this._v(" Slicing Jobs")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("For example, deleting all user comments might take a while, but the client can keep calling "),t("code",[this._v("get_user_comments")]),this._v(" and "),t("code",[this._v("delete_user_comment")]),this._v(" until no more comments. Each one of the jobs should now be responsive.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("Advantages\n"),s("ul",[s("li",[e._v("No need to modify anything on the backend.")])])]),e._v(" "),s("li",[e._v("Disadvantages\n"),s("ul",[s("li",[e._v("Limited use case. For example, we can't slice a transaction.")]),e._v(" "),s("li",[e._v("Client side needs to split the tasks and aggregate results.")]),e._v(" "),s("li",[e._v("Increase system load.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"pre-executing-jobs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pre-executing-jobs","aria-hidden":"true"}},[this._v("#")]),this._v(" Pre-executing Jobs")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Advantages\n"),t("ul",[t("li",[this._v("Little modification on the backend. It could be a script running every hour.")])])]),this._v(" "),t("li",[this._v("Disadvantages\n"),t("ul",[t("li",[this._v("Limited use case.")]),this._v(" "),t("li",[this._v("Inefficient. It requires extra storage cost and some task results maybe over-generated.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"post-executing-jobs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#post-executing-jobs","aria-hidden":"true"}},[this._v("#")]),this._v(" Post-executing Jobs")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("Advantages\n"),s("ul",[s("li",[e._v("General solution")]),e._v(" "),s("li",[e._v("Fits almost all cases.")]),e._v(" "),s("li",[e._v("Good frameworks support.")])])]),e._v(" "),s("li",[e._v("Disadvantages\n"),s("ul",[s("li",[e._v("Asynchronous model is complicated.")]),e._v(" "),s("li",[e._v("Introduce more monitoring and operation work.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"conclusion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[this._v("#")]),this._v(" Conclusion")])}],!1,null,null,null);t.default=n.exports}}]);