(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{318:function(e,s,t){"use strict";t.r(s);var a=t(0),r=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"message-queue-basics"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#message-queue-basics","aria-hidden":"true"}},[e._v("#")]),e._v(" Message Queue Basics")]),e._v(" "),t("p",[e._v("A "),t("em",[e._v("message")]),e._v(" is the data transported between applications. In essence, it's a sequence of bytes. In the runtimes of the sender and receiver application, each message is a data structure.")]),e._v(" "),t("p",[e._v("How to interpret the message depends on specific applications. The sender and receiver application have to agree on one particular messaging format. Otherwise, the receiver receives just some random 0s and 1s. Some popular choices for the messaging formats are JSON, XML, Msgpack, gPRC, Thrift, etc.")]),e._v(" "),t("p",[e._v("The sender application has serializer that serializes the data structure of the message into a sequence of bytes. The receiver application has deserializer that reverses it back.")]),e._v(" "),t("p",[e._v("A "),t("em",[e._v("message queue")]),e._v(" is a queue of messages waiting to be processed. It's, in essence, a buffer data structure and a collection of network interfaces exposing atomic operations on such a data structure. The buffer temporarily holds messages. The network interfaces allow putting, getting, and deleting messages.")]),e._v(" "),t("p",[e._v("The "),t("em",[e._v("sender")]),e._v(" is a component that plays the role of calling putting messages to the message queue. The "),t("em",[e._v("receiver")]),e._v(" is a component that plays the role of getting and deleting messages to the message queue.")]),e._v(" "),t("p",[e._v("The message queue provides an asynchronous communications protocol; the sender doesn't require an immediate response for the message to be processed. The benefit is we decouple the sender and the receiver. The downside is the sender never knows if the message is processed unless the receiver sends a processed message back to the message queue.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("request-response: [ app ] --request--\x3e <--response--- [ app ]\nmessage queue: [ app ] --- (messages) ---\x3e [ app ]\n")])])]),t("p",[e._v("The serverless and microservices architecture use the message queue widely.  Since it decouples the software into several pieces of self-contained components, the sender can offload heavyweight processing or batch work to other components. Each component then becomes a single serverless function or a separate microservices.")])])}],!1,null,null,null);s.default=r.exports}}]);