(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{193:function(e,t,r){"use strict";r.r(t);var n=r(0),a=Object(n.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),r("TechshackHeader"),e._v(" "),e._m(1),e._v(" "),r("p",[r("a",{attrs:{href:"https://enqueuezero.com/kubernetes-in-a-nutshell.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("enqueuezero.com"),r("OutboundLink")],1)]),e._v(" "),e._m(2),e._v(" "),r("p",[e._v("As a Kubernetes user, you define how the application should run. You also define how the application should interact with other applications or the outside world.")]),e._v(" "),r("p",[e._v("Kubernetes brings together machine servers into a cluster using a shared network.")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),r("p",[r("a",{attrs:{href:"https://blog.discordapp.com/how-discord-stores-billions-of-messages-7fa6ec7ee4c7",target:"_blank",rel:"noopener noreferrer"}},[e._v("blog.discordapp.com"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("The underlying database is Cassandra. Reasons for choosing Cassandra was:")]),e._v(" "),e._m(5),e._v(" "),r("p",[e._v("Requirements were:")]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),r("p",[e._v("Cassandra is an AP database, meaning it trades Consistency with Availability. To solve the dilemma, engineers decided to delete records in the database if the fault detected. The delete action is performed by a form of write called a “tombstone.” On read, it just skips over tombstones it comes across. The retention policy for tombstone is two days by default.")]),e._v(" "),e._m(9),e._v(" "),r("p",[r("a",{attrs:{href:"https://dev.to/grahamlyons/everything-you-need-to-know-about-networking-on-aws-4bkf",target:"_blank",rel:"noopener noreferrer"}},[e._v("dev.to"),r("OutboundLink")],1)]),e._v(" "),e._m(10),e._m(11),e._v(" "),e._m(12),e._v(" "),r("p",[r("a",{attrs:{href:"http://web.mit.edu/6.034/wwwbob/svm-notes-long-08.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("web.mit.edu"),r("OutboundLink")],1)]),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),r("p",[r("a",{attrs:{href:"https://jvns.ca/blog/2018/12/09/how-do-you-document-a-tech-project-with-comics/",target:"_blank",rel:"noopener noreferrer"}},[e._v("jvns.ca"),r("OutboundLink")],1)]),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.youtube.com/watch?v=obB2IvCv-K0",target:"_blank",rel:"noopener noreferrer"}},[e._v("youtube.com"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("The topic is about how to improve the availability from 99% to 99.99%.")]),e._v(" "),r("p",[e._v("Below are solutions.")]),e._v(" "),e._m(17),e._v(" "),r("p",[e._v("It's okay to start not being an expert, but you need to become one!")]),e._v(" "),e._m(18),e._v(" "),r("p",[r("a",{attrs:{href:"https://medium.com/airbnb-engineering/introducing-deploy-pipelines-to-airbnb-fc804ac2a157",target:"_blank",rel:"noopener noreferrer"}},[e._v("medium.com"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("Check out this post on how Airbnb design the deployment process and minimize potential misuses.")]),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),r("p",[r("a",{attrs:{href:"http://www.brendangregg.com/blog/2019-01-01/learn-ebpf-tracing.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("www.brendangregg.com"),r("OutboundLink")],1),e._v(" | "),r("a",{attrs:{href:"https://github.com/iovisor/bcc",target:"_blank",rel:"noopener noreferrer"}},[e._v("bcc"),r("OutboundLink")],1),e._v(" | "),r("a",{attrs:{href:"https://github.com/iovisor/bpftrace",target:"_blank",rel:"noopener noreferrer"}},[e._v("bpftrace"),r("OutboundLink")],1),e._v(" | "),r("a",{attrs:{href:"https://github.com/iovisor/bcc/blob/master/docs/tutorial_bcc_python_developer.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("bcc Python guide"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("Check out Brendan Gregg's new blog post on the beginner's guide to eBPF.")]),e._v(" "),r("ul",[r("li",[e._v("What is eBPF? eBPF does to Linux what JavaScript V8 does to HTML. By leveraging eBPF, you can write mini-programs that run on events like disk I/O, which are run in a safe virtual machine in the kernel.")]),e._v(" "),r("li",[e._v("What are bcc and bpftrace? As no one writes V8 bytecode, not many people write eBPF programs directly. Instead, people write bcc and bpftrace.")]),e._v(" "),r("li",[e._v("Companies including Netflix and Facebook have bcc installed on all servers by default, and maybe you'll want to as well.")]),e._v(" "),r("li",[e._v("Check the bcc "),r("a",{attrs:{href:"https://github.com/iovisor/bcc/blob/master/docs/tutorial.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Beginner's Tutorial"),r("OutboundLink")],1),e._v(".\n"),r("img",{attrs:{src:"http://www.brendangregg.com/Perf/bcc_tracing_tools.png",alt:"Many more tracing tools exist"}})]),e._v(" "),r("li",[e._v("For intermediate gamers, you can switch from bcc to bpftrace, which has a high-level language that is much easier to learn.")]),e._v(" "),r("li",[e._v("An example of bpftrace one-liner:")])]),e._v(" "),e._m(21),e._m(22),e._v(" "),r("p",[r("a",{attrs:{href:"http://docker-saigon.github.io/post/Docker-Internals/",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker-saigon.github.io"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("A Deep Dive Into Docker For Engineers Interested In The Gritty Details.")]),e._v(" "),r("ul",[e._m(23),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),e._m(26),e._v(" "),r("li",[e._v("How? Kernel Namespaces. CGroups, iptables, Copy-On-Write UnionFS.")]),e._v(" "),r("li",[e._v("Container Runtimes: LXC, Systemd-nspawn, runC")]),e._v(" "),r("li",[e._v("How to hook into the various Docker components?\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.docker.com/develop/sdk/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Engine API"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Webhooks: Docker Registry")]),e._v(" "),r("li",[e._v("stdout (Docker Compose)")]),e._v(" "),r("li",[e._v("gPRC: "),r("a",{attrs:{href:"https://containerd.tools/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://containerd.tools/"),r("OutboundLink")],1),e._v(": Spinning out the Docker Daemon into a more advanced and OCI compliant Daemon to control runC.")]),e._v(" "),r("li",[e._v("OCI")])])])]),e._v(" "),e._m(27),e._v(" "),r("p",[r("a",{attrs:{href:"https://ec.haxx.se/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ec.haxx.se"),r("OutboundLink")],1),e._v(" | "),r("a",{attrs:{href:"https://github.com/bagder/everything-curl",target:"_blank",rel:"noopener noreferrer"}},[e._v("github.com"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v('Without a doubt, curl is a great software. The author of curl published a book "Everything curl," a 10/10 worth reading.')]),e._v(" "),r("ul",[r("li",[e._v("You can learn the "),r("a",{attrs:{href:"https://ec.haxx.se/sourcecode-layout.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("code layout"),r("OutboundLink")],1),e._v(": root, src, lib, docs, etc.")]),e._v(" "),r("li",[e._v("It's using traditional C code-style: "),r("a",{attrs:{href:"https://ec.haxx.se/sourcecode-style.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://ec.haxx.se/sourcecode-style.html"),r("OutboundLink")],1),e._v(", two spaces over the tab, /* comment */, break the long lines if over 80 chars, Open brace on the same line, else on the following line, no space before parentheses.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://ec.haxx.se/protocols-network.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Network simplified"),r("OutboundLink")],1),e._v(". Basic concepts are the machine, URL, DNS, TCP connection, IP & Port, TLS, transfer protocol.")]),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),r("li",[e._v("How to HTTP with curl? "),r("a",{attrs:{href:"https://ec.haxx.se/http.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://ec.haxx.se/http.html"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[e._v("If using curl as C library instead of a command-line utility, try "),r("code",[e._v("libcurl")]),e._v(". Simple by default, more on demand! "),r("a",{attrs:{href:"https://ec.haxx.se/libcurl.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://ec.haxx.se/libcurl.html"),r("OutboundLink")],1),e._v(" "),r("ul",[r("li",[e._v("Pretty sure you can find a curl binding on other programming languages than C. "),r("a",{attrs:{href:"https://ec.haxx.se/bindings.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://ec.haxx.se/bindings.html"),r("OutboundLink")],1)])])])]),e._v(" "),e._m(30),e._v(" "),r("p",[r("a",{attrs:{href:"https://medium.engineering/graphql-server-design-medium-34862677b4b8",target:"_blank",rel:"noopener noreferrer"}},[e._v("medium.com"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("This article explains how the structure of Medium's GraphQL server helped make the migration much smoother.")]),e._v(" "),r("p",[e._v("Some decisions were made:")]),e._v(" "),r("ul",[r("li",[e._v("Manage the protocol of data exchanging by Protocol Buffers. To get an overview of protobuf, check this section: "),r("a",{attrs:{href:"https://enqueuezero.com/data-serialization.html#protobuf",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://enqueuezero.com/data-serialization.html#protobuf"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[e._v("Make it clear what data is for the client.")]),e._v(" "),r("li",[e._v("Support multiple backend sources as more SOA services are coming.")])]),e._v(" "),r("p",[e._v("They came up with a layered architecture. As discusses in this post "),r("a",{attrs:{href:"https://enqueuezero.com/layered-architecture.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://enqueuezero.com/layered-architecture.html"),r("OutboundLink")],1),e._v(', "Each layer has it’s own responsibilities, and only interacts with the layer below it". Below is the proposed layers:')]),e._v(" "),e._m(31),e._v(" "),e._m(32)],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"enqueuezero-techshack-2019-01"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enqueuezero-techshack-2019-01","aria-hidden":"true"}},[this._v("#")]),this._v(" EnqueueZero Techshack 2019-01")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"kubernetes-in-a-nutshell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-in-a-nutshell","aria-hidden":"true"}},[this._v("#")]),this._v(" Kubernetes In a Nutshell")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Kubernetes")]),this._v(" is a system for running and coordinating containerized applications. These applications are deployed across a cluster of machines.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("strong",[this._v("Master")]),this._v(" server(s) controls the entire cluster.")]),this._v(" "),t("li",[t("strong",[this._v("Nodes")]),this._v(" are the other servers in the cluster.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"how-discord-stores-billions-of-messages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-discord-stores-billions-of-messages","aria-hidden":"true"}},[this._v("#")]),this._v(" How Discord Stores Billions of Messages")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Read/Write ratio is about 50/50.")]),this._v(" "),t("li",[this._v("Many random reads.")]),this._v(" "),t("li",[this._v("Large dataset.")]),this._v(" "),t("li",[this._v("Uneven amount of data for Private text chat massive Discord servers and Large public Discord servers.")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("Linear scalability.")]),e._v(" "),r("li",[e._v("Automatic failover.")]),e._v(" "),r("li",[e._v("Low maintenance.")]),e._v(" "),r("li",[e._v("Proven to work.")]),e._v(" "),r("li",[e._v("Predictable performance.")]),e._v(" "),r("li",[e._v("Not a blob store.")]),e._v(" "),r("li",[e._v("Open source.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The data Modeling is to bucket messages by time. The primary key for "),t("code",[this._v("Message")]),this._v(" is "),t("code",[this._v("((channel_id, bucket), message_id)")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("CREATE TABLE messages (\n   channel_id bigint,\n   bucket int,\n   message_id bigint,\n   author_id bigint,\n   content text,\n   PRIMARY KEY ((channel_id, bucket), message_id)\n) WITH CLUSTERING ORDER BY (message_id DESC);\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"everything-you-need-to-know-about-networking-on-aws"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#everything-you-need-to-know-about-networking-on-aws","aria-hidden":"true"}},[this._v("#")]),this._v(" Everything You Need To Know About Networking On AWS")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("      +-------+\n                                        | ig-1  |\n                                        |       |\n        vpc-123: 10.0.0.0/16  |         |       |        |\n       +----------------------+---------+-------+--------+---------------------+\n       |                      |                          |                     |\n       |  +-----+             |  +-----+                 |  +-----+            |\n       |  | NAT |             |  | NAT |                 |  | NAT |            |\npublic |  |     |             |  |     |                 |  |     |            |\nsubnets|  +-----+             |  +-----+                 |  +-----+            |\n       |                      |                          |                     |\n       |                      |                          |                     |\n       |                      |                          |                     |\n       |              +-------+                  +-------+             +-------+\n       |              | rt-1a |                  | rt-1b |             | rt-1c |\n       | 10.0.1.0/24  |       | 10.0.2.0/24      |       | 10.0.3.0/24 |       |\n-------+-----------------------------------------------------------------------+\n       | 10.0.4.0/24  | rt-2a | 10.0.5.0/24      | rt-2b | 10.0.6.0/24 | rt-2c |\n       |              |       |                  |       |             |       |\n       |              +-------+                  +-------+             +-------+\nprivate|                      |                          |                     |\nsubnets|                      |                          |                     |\n       |                      |                          |                     |\n       |                      |                          |                     |\n       |                      |                          |                     |\n       |                      |                          |                     |\n       |                      |                          |                     |\n       |                      |                          |                     |\n       +----------------------+--------------------------+---------------------+\n       |         AZ 1         |          AZ 2            |        AZ 3         |\n")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("A virtual private cloud or VPC is a private network space in which you can run your infrastructure.\n"),r("ul",[r("li",[e._v("It has an address space (CIDR range) which you choose e.g. 10.0.0.0/16. It determines how many IP addresses you can have.")])])]),e._v(" "),r("li",[e._v("In VPC, there are public subnets and private subnets, depending on whether traffic can reach them from outside the VPC (the Internet).")]),e._v(" "),r("li",[e._v("As long as one Availability Zone or AZ is alive, your service should be able to operate.")]),e._v(" "),r("li",[e._v("A routing table contains rules about how IP packets in the subnets can travel to different IP addresses.")]),e._v(" "),r("li",[e._v("Internet Gateways allows traffic to the outside world.")]),e._v(" "),r("li",[e._v("A NAT gateway is a device which sits in the public subnets, accepts any IP packets bound for the Internet coming from the private subnets, sends those packets on to their destination and then sends the returning packets back to the source.")]),e._v(" "),r("li",[e._v("A security groups can specify ingress (inbound) and egress (outbound) traffic rules, limiting them to some sources (inbound) and destinations (outbound).")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"an-idiot’s-guide-to-support-vector-machines-svms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#an-idiot’s-guide-to-support-vector-machines-svms","aria-hidden":"true"}},[this._v("#")]),this._v(" An Idiot’s guide to Support vector machines (SVMs)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Support vectors are the data points that lie closest to the decision surface. They are the data points most difficult to classify.")]),this._v(" "),t("li",[t("img",{attrs:{src:"/static/images/2019-01-svm.png",alt:"Support Vector Machine"}})])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"how-do-you-document-a-tech-project-with-comics"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-do-you-document-a-tech-project-with-comics","aria-hidden":"true"}},[this._v("#")]),this._v(" How do you document a tech project with comics?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Comics without good information are useless.")]),this._v(" "),t("li",[this._v("Focus on concepts that don’t change.")]),this._v(" "),t("li",[this._v("Make a single graphic with a pretty small amount of information.")]),this._v(" "),t("li",[this._v("Make a more in-depth comic / illustration")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"high-reliability-infrastructure-migrations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#high-reliability-infrastructure-migrations","aria-hidden":"true"}},[this._v("#")]),this._v(" High-Reliability Infrastructure Migrations")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("Understand the design.")]),e._v(" "),r("li",[e._v("Run gamedays.")]),e._v(" "),r("li",[e._v("Classify failures.")]),e._v(" "),r("li",[e._v("Have incidents only once.")]),e._v(" "),r("li",[e._v("Make incremental changes.")]),e._v(" "),r("li",[e._v("Always have a rollback plan.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"introducing-pipelines-to-airbnb’s-deployment-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introducing-pipelines-to-airbnb’s-deployment-process","aria-hidden":"true"}},[this._v("#")]),this._v(" Introducing Pipelines to Airbnb’s Deployment Process")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("Develop a specification for a configuration file that service owners can use to define their deployment procedures (i.e., pipeline).")]),e._v(" "),r("li",[e._v("Save pipeline configurations in a database.")]),e._v(" "),r("li",[e._v("Give the frontend a method of accessing this data.")]),e._v(" "),r("li",[e._v("Separate and order the targets correctly in the UI display.")]),e._v(" "),r("li",[e._v("Disable targets that shouldn’t be deployed to (i.e., it has dependencies that have not yet been deployed to).")]),e._v(" "),r("li",[e._v("Finally, implement the UI.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"learn-ebpf-tracing-tutorial-and-examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#learn-ebpf-tracing-tutorial-and-examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Learn eBPF Tracing: Tutorial and Examples")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ bpftrace -e 'tracepoint:syscalls:sys_enter_open { printf(\"%d %s\\n\", pid, str(args->filename)); }'\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"docker-internals"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-internals","aria-hidden":"true"}},[this._v("#")]),this._v(" Docker Internals")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[e._v("What is a container?\n"),r("ul",[r("li",[e._v("Containers share the host kernel")]),e._v(" "),r("li",[e._v("Containers use the kernel ability to group processes for resource control")]),e._v(" "),r("li",[e._v("Containers ensure isolation through namespaces")]),e._v(" "),r("li",[e._v("Containers feel like lightweight VMs (lower footprint, faster), but are not Virtual Machines!")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("How do containers compare to Package Managers?\n"),t("ul",[t("li",[this._v("Package managers failed us due to shared libraries version differences causing dependency issues; packaging shared libraries in an image goes around that.")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("How do containers compare to Configuration Management?\n"),t("ul",[t("li",[this._v("It is still advisable to "),t("strong",[this._v("leverage such a provisioning tool to bootstrap the Docker infrastructure")]),this._v(", letting the Container Runtime layer take care of the application layer once it is ready.")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("Why Docker?\n"),t("ul",[t("li",[this._v("Because Docker is currently the only ecosystem providing the full package of Image management, Resource Isolation, File System Isolation, Network Isolation, Change Management, Sharing, Process Management, Service Discovery (DNS since 1.10)")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"everything-curl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#everything-curl","aria-hidden":"true"}},[this._v("#")]),this._v(" Everything curl")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("The world is full of protocols, both old and new. The latest curl supports DICT, FILE, FTP, FTPS, GOPHER, HTTP, HTTPS, IMAP, IMAPS, LDAP, LDAPS, POP3, POP3S, RTMP, RTSP, SCP, SFTP, SMB, SMBS, SMTP, SMTPS, TELNET, TFTP.\n"),t("ul",[t("li",[this._v("Like software, protocol specifications are frequently updated and new protocol versions are created.")]),this._v(" "),t("li",[this._v("Protocols come and go. IETF and RFC make it stable.")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("Usages: "),t("code",[this._v("curl -v https://enqueuezero.com")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"graphql-server-design-medium"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#graphql-server-design-medium","aria-hidden":"true"}},[this._v("#")]),this._v(" GraphQL Server Design @ Medium")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Schema. It is the form of the data will take when it gets sent to the clients.")]),this._v(" "),t("li",[this._v("Repositories. It “stores” the cleaned-up data that initially came from data sources. Traditionally, it's like a controller layer in MVC, massaging and shaping the data.")]),this._v(" "),t("li",[this._v("Fetchers. It's fetched by GraphQL server and for fetching data from multiple data sources")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/static/images/2019-01-medium-graphql-server.png",alt:"GraphQL server"}})])}],!1,null,null,null);t.default=a.exports}}]);