(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{290:function(e,t,s){"use strict";s.r(t);var r=s(0),a=Object(r.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p"),e._m(1),s("p"),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("APScheduler is a job scheduling framework that executes code either one-off or periodically. People often integrate it into an existing Python application for running interval jobs.")]),e._v(" "),s("p",[e._v("In this post, we will cover below topics:")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),s("ul",[s("li",[e._v("Desktop application written in Python can sync data from server per-minute jobs.")]),e._v(" "),s("li",[e._v("Web application written in Python can renew hot-sale list every hour on a landing page.")]),e._v(" "),s("li",[e._v("Gaming server-side application written in Twisted (A Python network framework) can re-create monsters back to the scene every 5 minutes.")]),e._v(" "),s("li",[e._v("Run it in AWS and replace Cronjob. "),s("a",{attrs:{href:"https://engblog.nextdoor.com/we-don-t-run-cron-jobs-at-nextdoor-6f7f9cc62040",target:"_blank",rel:"noopener noreferrer"}},[e._v("1"),s("OutboundLink")],1)])]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),s("p",[e._v("Job houses the functions to execute, the function parameters to pass in, and a bunch of controlling parameters.")]),e._v(" "),s("p",[e._v("The functions could be either an imported function or a string of import path. The function arguments are essential for the execution. The controlling parameters are for controlling scheduler behaviors.")]),e._v(" "),e._m(7),e._v(" "),e._m(8),e._m(9),e._v(" "),s("p",[e._v("Triggers contain essential time information for the scheduler. Each job has its trigger.")]),e._v(" "),s("p",[e._v("The most important thing a trigger does is to tell the scheduler when is the next time this job should run.")]),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),s("p",[e._v("Schedulers rules all stuff. You can think of it as a stable API provided by APScheduler for configuring JobStores, Executors and adding jobs.")]),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._m(16),e._v(" "),s("p",[e._v("Executors run the jobs. They manage the life cycles of jobs. By default, you can use thread or process as executors.")]),e._v(" "),e._m(17),e._v(" "),s("p",[e._v("Below is the graph of the relations between all major classes in APScheduler codebase "),s("a",{attrs:{href:"https://github.com/agronholm/apscheduler",target:"_blank",rel:"noopener noreferrer"}},[e._v("2"),s("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),s("p",[e._v("Choosing a proper scheduler, job store(s), executor(s) and trigger(s) depends on the user's current technology stack.")]),e._v(" "),s("p",[e._v("If all of the implementations cannot fit user's demand, then it's easy to follow the same pattern to extend them. "),s("a",{attrs:{href:"https://apscheduler.readthedocs.io/en/latest/extending.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("3"),s("OutboundLink")],1)]),e._v(" "),e._m(20),e._v(" "),s("p",[e._v("There are two primary models of how scheduler schedules jobs in APScheduler.")]),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),s("p",[e._v("The sleep-process model is implemented in an infinite loop of sleeping and job processing.")]),e._v(" "),e._m(23),s("p",[e._v("It's commonly seen in blocking applications. Please check to the implementation of "),s("a",{attrs:{href:"https://github.com/agronholm/apscheduler/blob/master/apscheduler/schedulers/blocking.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("blocking.py"),s("OutboundLink")],1),e._v(" for example.")]),e._v(" "),e._m(24),e._v(" "),s("p",[e._v("The callback model is implemented in a callback-chain convention.")]),e._v(" "),e._m(25),s("p",[e._v("It's commonly seen in non-blocking applications. Please check the implementation of "),s("a",{attrs:{href:"https://github.com/agronholm/apscheduler/blob/master/apscheduler/schedulers/tornado.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("tornado.py"),s("OutboundLink")],1),e._v(" for example.")]),e._v(" "),e._m(26),e._v(" "),s("p",[e._v("Although the scheduler is all about executing the job at a specific time, it doesn't guarantee the job will be executed definitely. That's one of the most important things you need to have in your mind. Two primary factors would affect it:")]),e._v(" "),e._m(27),e._v(" "),s("p",[e._v("If the system load is high, the scheduler might choose to drop some jobs since it needs to execute new jobs. It's similar to the case of queueing-up.It's recommended not to put CPU-bound operations in the same machine of where APScheduler is running.")]),e._v(" "),s("p",[e._v("Besides, the sleep operation depends on OS or VM scheduler, which is much low-level scheduler behind the scene. The OS does not guarantee it suspends the process exactly the same amount of time specified by "),s("code",[e._v("timeout")]),e._v(". "),s("a",{attrs:{href:"https://stackoverflow.com/questions/1719071/how-is-sleep-implemented-at-the-os-level",target:"_blank",rel:"noopener noreferrer"}},[e._v("4"),s("OutboundLink")],1)]),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),s("p",[e._v("Since the scheduler sometimes misses triggering jobs, APScheduler leaves the question to the end-users if the job should be triggered when the job passed the time.")]),e._v(" "),e._m(30),e._m(31),e._v(" "),e._m(32),e._v(" "),e._m(33),e._v(" "),s("p",[e._v("Sometimes the job might be triggered even when another instance of the job is running. It happens when the job takes a long time to run and the next job just catches up.")]),e._v(" "),e._m(34),e._m(35),e._v(" "),e._m(36),e._v(" "),e._m(37),e._v(" "),s("p",[e._v("Since the jobs might runs concurrently, APScheduler has to acquire a lock onto jobstore for any job data modifications.")]),e._v(" "),e._m(38),e._v(" "),s("p",[e._v("Except for the job management API, APScheduler also provides a lightweight event system for a certain number of events.")]),e._v(" "),s("p",[e._v("APScheduler fires events on certain occasions so that user code can listen to them.")]),e._v(" "),s("p",[e._v("Below is an example of how apscheduler report job errors via prometheus:")]),e._v(" "),e._m(39),e._m(40),e._v(" "),s("p",[e._v("It's an intended design goal to make APScheduler a cross-platform, cross-application scheduler framework, rather than a daemon or service itself. It's meant to reside in an existing application. It says you need to integrate it into your codebase, instead of running it as a dedicated server.")]),e._v(" "),s("p",[e._v("The good part is it can extend itself to almost any use cases. The sad part is that it needs you to do more development work.")]),e._v(" "),e._m(41),e._v(" "),e._m(42),e._v(" "),s("p",[e._v("You might want to implement one of below challenges as your side project.")]),e._v(" "),s("ul",[s("li",[e._v("More subclasses for executor, trigger, jobstore.")]),e._v(" "),s("li",[e._v("A universal solution of running jobs in distributed worker nodes.")]),e._v(" "),s("li",[e._v("A web interface for APScheduler.")]),e._v(" "),s("li",[e._v("A RESTful API for managing APScheduler jobs.")]),e._v(" "),s("li",[e._v("Make a service on top of APScheduler and let it run in Kubernetes cluster.")]),e._v(" "),s("li",[e._v("The monitoring of APScheduler is weak. Provide a solution to enhance it. "),s("a",{attrs:{href:"https://prometheus.io/docs/practices/instrumentation/#offline-processing",target:"_blank",rel:"noopener noreferrer"}},[e._v("5"),s("OutboundLink")],1)])]),e._v(" "),e._m(43),e._v(" "),e._m(44)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"the-architecture-of-apscheduler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-architecture-of-apscheduler","aria-hidden":"true"}},[this._v("#")]),this._v(" The Architecture of APScheduler")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#overview"}},[e._v("Overview")])]),s("li",[s("a",{attrs:{href:"#use"}},[e._v("Use")])]),s("li",[s("a",{attrs:{href:"#concepts"}},[e._v("Concepts")]),s("ul",[s("li",[s("a",{attrs:{href:"#job"}},[e._v("Job")])]),s("li",[s("a",{attrs:{href:"#trigger"}},[e._v("Trigger")])]),s("li",[s("a",{attrs:{href:"#scheduler"}},[e._v("Scheduler")])]),s("li",[s("a",{attrs:{href:"#jobstore"}},[e._v("JobStore")])]),s("li",[s("a",{attrs:{href:"#executor"}},[e._v("Executor")])])])]),s("li",[s("a",{attrs:{href:"#object-oriented-programming"}},[e._v("Object-Oriented Programming")])]),s("li",[s("a",{attrs:{href:"#executor-models"}},[e._v("Executor Models")]),s("ul",[s("li",[s("a",{attrs:{href:"#sleep-process-model"}},[e._v("Sleep-Process Model")])]),s("li",[s("a",{attrs:{href:"#callback-model"}},[e._v("Callback Model")])])])]),s("li",[s("a",{attrs:{href:"#time-is-of-the-essence"}},[e._v("Time Is of the Essence")])]),s("li",[s("a",{attrs:{href:"#locking-for-job-state-modifications"}},[e._v("Locking for Job State Modifications")]),s("ul",[s("li",[s("a",{attrs:{href:"#missing-job-executions"}},[e._v("Missing Job Executions")])]),s("li",[s("a",{attrs:{href:"#concurrent-job-executions"}},[e._v("Concurrent Job Executions")])]),s("li",[s("a",{attrs:{href:"#internal-lock"}},[e._v("Internal Lock")])])])]),s("li",[s("a",{attrs:{href:"#event-listeners"}},[e._v("Event Listeners")])]),s("li",[s("a",{attrs:{href:"#framework-over-utility"}},[e._v("Framework Over Utility")])]),s("li",[s("a",{attrs:{href:"#conclusions"}},[e._v("Conclusions")]),s("ul",[s("li",[s("a",{attrs:{href:"#some-ideas"}},[e._v("Some ideas")])]),s("li",[s("a",{attrs:{href:"#lesson-learned"}},[e._v("Lesson learned")])])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("What are the basic concepts of APScheduler?")]),e._v(" "),s("li",[e._v("How does object-oriented programming help extending the use cases?")]),e._v(" "),s("li",[e._v("How does the scheduler determine the next run time of jobs?")]),e._v(" "),s("li",[e._v("What if a job miss fired?")]),e._v(" "),s("li",[e._v("What if too many jobs running simultaneously?")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"use"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use","aria-hidden":"true"}},[this._v("#")]),this._v(" Use")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"concepts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#concepts","aria-hidden":"true"}},[this._v("#")]),this._v(" Concepts")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"job"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#job","aria-hidden":"true"}},[this._v("#")]),this._v(" Job")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("In below example, "),t("code",[this._v("tick")]),this._v(" is the Python function to scheduler, "),t("code",[this._v("args=(1, )")]),this._v(" is the function parameter, and "),t("code",[this._v("trigger='interval', seconds=3")]),this._v(" are the controlling parameters.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("def")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("tick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("parameter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# do something")]),e._v("\n\nscheduler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("add_job"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("function"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" args"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" trigger"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'interval'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" seconds"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"trigger"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#trigger","aria-hidden":"true"}},[this._v("#")]),this._v(" Trigger")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("For example, in above example, if the job fires at "),t("code",[this._v('"2000-01-01T00:00:00Z"')]),this._v(", then the trigger with 3 seconds as interval should report that the next time is "),t("code",[this._v('"2000-01-01T00:00:03Z"')]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"scheduler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scheduler","aria-hidden":"true"}},[this._v("#")]),this._v(" Scheduler")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"jobstore"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jobstore","aria-hidden":"true"}},[this._v("#")]),this._v(" JobStore")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("JobStore houses the scheduled jobs. Without any configuration, APScheduler saves them in memory. As shown in above code, "),t("code",[this._v("scheduler.add_job")]),this._v(" won't trigger the function but save the job data into the memory.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("In below example, APScheduler adds a JobStore named "),t("code",[this._v("sqlalchemy")]),this._v(". The job added later chooses "),t("code",[this._v("sqlalchemy")]),this._v(" as its JobStore. The JobStore persists the job into an SQLite database.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[e._v("scheduler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("add_jobstore"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'sqlalchemy'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" url"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'sqlite:////sched.db'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\nscheduler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("add_job"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("function"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" args"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" trigger"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'interval'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" seconds"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" jobstore"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'sqlalchemy'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"executor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#executor","aria-hidden":"true"}},[this._v("#")]),this._v(" Executor")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"object-oriented-programming"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#object-oriented-programming","aria-hidden":"true"}},[this._v("#")]),this._v(" Object-Oriented Programming")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/static/images/apscheduler-oo.png",alt:"APScheduler Class Graph"}})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("The "),s("code",[e._v("BaseScheduler")]),e._v(", "),s("code",[e._v("BaseExecutor")]),e._v(", "),s("code",[e._v("BaseJobStore")]),e._v(" and "),s("code",[e._v("BaseTrigger")]),e._v(" implements major functionalities of corespondent concepts.")]),e._v(" "),s("li",[e._v("The subclasses of base class adapt the base implementation to specific frameworks or libraries to cover more use cases.")]),e._v(" "),s("li",[e._v("The scheduler manages executor and jobstore.")]),e._v(" "),s("li",[e._v("The jobstore stores all of the jobs.")]),e._v(" "),s("li",[e._v("Each job has its trigger.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"executor-models"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#executor-models","aria-hidden":"true"}},[this._v("#")]),this._v(" Executor Models")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("In below two models, the scheduler internal method "),t("code",[this._v("process_jobs")]),this._v(" trigger jobs and return seconds to sleep. The other function "),t("code",[this._v("sleep")]),this._v(" or "),t("code",[this._v("run_after_timeout")]),this._v(" would idle the scheduler for a few seconds.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"sleep-process-model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sleep-process-model","aria-hidden":"true"}},[this._v("#")]),this._v(" Sleep-Process Model")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[e._v("timeout "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" DEFAULT\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("while")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" \n    sleep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("timeout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    timeout "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" process_jobs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"callback-model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#callback-model","aria-hidden":"true"}},[this._v("#")]),this._v(" Callback Model")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("def")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("timeout"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("DEFAULT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    run_after_timeout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("timeout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" wakeup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("def")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("wakeup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    timeout "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" process_jobs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    start"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("timeout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\nstart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"time-is-of-the-essence"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#time-is-of-the-essence","aria-hidden":"true"}},[this._v("#")]),this._v(" Time Is of the Essence")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("The scheduler implementation.")]),this._v(" "),t("li",[t("strong",[this._v("Current running job numbers")]),this._v(".")]),this._v(" "),t("li",[t("strong",[this._v("Current system load")]),this._v(".")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"locking-for-job-state-modifications"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#locking-for-job-state-modifications","aria-hidden":"true"}},[this._v("#")]),this._v(" Locking for Job State Modifications")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"missing-job-executions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#missing-job-executions","aria-hidden":"true"}},[this._v("#")]),this._v(" Missing Job Executions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("|----x-------()?------x--------x------|\n\nx: job triggered\n(): job miss triggered\n?: should the job be triggered afterward?\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To solve this problem, APScheduler provides a controlling parameter "),t("code",[this._v("misfire_grace_time")]),this._v(" for each job. If the job passed the scheduled time but still within the "),t("code",[this._v("misfire_grace_time")]),this._v(", then it would be triggered still.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Additionally, you can choose another option by using controlling parameter "),t("code",[this._v("coalescing")]),this._v(" to roll all missed executions into one.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"concurrent-job-executions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#concurrent-job-executions","aria-hidden":"true"}},[this._v("#")]),this._v(" Concurrent Job Executions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("|----x--------()--------xx?-----x------|\n\nx: job triggered\n(): job miss triggered\n?: should the two jobs both run?\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To solve this problem, APScheduler provides another controlling parameter "),t("code",[this._v("max_instances")]),this._v(" for end users.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"internal-lock"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#internal-lock","aria-hidden":"true"}},[this._v("#")]),this._v(" Internal Lock")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To support "),t("code",[this._v("misfire_grace_time")]),this._v(", "),t("code",[this._v("coalescing")]),this._v(", and "),t("code",[this._v("max_instances")]),this._v(", APScheduler puts a lot of efforts into managing job state and their run times.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"event-listeners"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#event-listeners","aria-hidden":"true"}},[this._v("#")]),this._v(" Event Listeners")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("def report_error(event):\n    if event.exception:\n        PROM_ERROR_METRICS.inc()\n\nscheduler.add_listener(report_error, EVENT_JOB_ERROR)\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"framework-over-utility"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#framework-over-utility","aria-hidden":"true"}},[this._v("#")]),this._v(" Framework Over Utility")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"conclusions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conclusions","aria-hidden":"true"}},[this._v("#")]),this._v(" Conclusions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"some-ideas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#some-ideas","aria-hidden":"true"}},[this._v("#")]),this._v(" Some ideas")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"lesson-learned"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lesson-learned","aria-hidden":"true"}},[this._v("#")]),this._v(" Lesson learned")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Decide if you're going to build a utility, a service, or a framework before start writing the first line of code.")]),this._v(" "),t("li",[this._v("Check if Object-oriented programming suites the case. If you have a variety of framework to support, consider it.")]),this._v(" "),t("li",[this._v("Simplify the corner cases and make proper strategy and controlling parameters for them.")]),this._v(" "),t("li",[this._v("Embed an event system for users so that they can do something on certain occasions.")])])}],!1,null,null,null);t.default=a.exports}}]);