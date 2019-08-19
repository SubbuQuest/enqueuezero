(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{279:function(e,r,t){"use strict";t.r(r);var a=t(0),i=Object(a.a)({},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"content"},[e._m(0),e._v(" "),t("p"),e._m(1),t("p"),e._v(" "),e._m(2),e._v(" "),t("p",[e._v("Airbnb is a website that operates an online marketplace and hospitality service for people to lease or rent short-term lodging. The challenges for the engineering team includes high-availability, quick-scaling, etc. In this post, I put the architecture of Airbnb website in one article. Please tweet to "),t("a",{attrs:{href:"https://twitter.com/enqueuezero",target:"_blank",rel:"noopener noreferrer"}},[e._v("@enqueuezero"),t("OutboundLink")],1),e._v(" if you think anything is incorrect or out-dated.")]),e._v(" "),t("p",[e._v("Disclaimer: I'm not from Airbnb team and don't know anybody from Airbnb. All information can be found on the Internet, mainly from "),t("a",{attrs:{href:"https://medium.com/airbnb-engineering",target:"_blank",rel:"noopener noreferrer"}},[e._v("the Airbnb engineering blog"),t("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),t("p",[e._v("Airbnb uses below AWS services.")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),t("p",[e._v("Charon is Airbnb's front-facing load balancer. Previously it was Amazon's ELB. The decision based on the fact that ELB was clunky and less helpful to troubleshoot.")]),e._v(" "),t("p",[e._v("With Charon, Akamai traffic hits Nginx servers directly. Then the traffic routes to the backend services by Synapse and HAProxy.")]),e._v(" "),e._m(7),e._v(" "),t("ul",[t("li",[e._v("SmartStack is an OSS service discovery framework. It has two components: "),t("a",{attrs:{href:"https://github.com/airbnb/nerve",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nerve"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://github.com/airbnb/synapse",target:"_blank",rel:"noopener noreferrer"}},[e._v("Synapse"),t("OutboundLink")],1),e._v(". It relies on Zookeeper to store discovery data, as well as HAProxy for routing.")]),e._v(" "),t("li",[e._v("Nerve manages the life-cycle of microservices based on health checks.")]),e._v(" "),t("li",[e._v("Synapse looks up microservices instances and automatically update HAProxy configuration.")]),e._v(" "),t("li",[e._v("Zookeeper stores znode for the name of the services and provide microservice instances change via Zookeeper watches.")])]),e._v(" "),e._m(8),e._v(" "),t("p",[e._v("Airbnb users Rails for the front-end.")]),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),t("ul",[t("li",[e._v("They're the community edition of MySQL server.")]),e._v(" "),t("li",[e._v("Each MySQL server uses one-thread-per-connection model.")]),e._v(" "),t("li",[e._v("Airbnb "),t("a",{attrs:{href:"https://github.com/airbnb/MaxScale",target:"_blank",rel:"noopener noreferrer"}},[e._v("forked and modified"),t("OutboundLink")],1),e._v(" MariaDB MaxScale for database proxy.")]),e._v(" "),t("li",[e._v("Main functionalities of this proxy layer include connection pooling, request throttling, query blocklist, etc.")])]),e._v(" "),e._m(12),e._v(" "),t("p",[e._v("Airbnb manages infrastructure with "),t("a",{attrs:{href:"https://www.chef.io/chef/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chef"),t("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(13),e._v(" "),t("p",[e._v("The Airbnb data infrastructure handles metrics, trains machine learning models, and runs business analytics, etc.")]),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),t("p",[e._v("Airbnb uses "),t("a",{attrs:{href:"https://www.dropwizard.io/1.3.5/docs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dropwizard"),t("OutboundLink")],1),e._v(" service framework, and customized a Thrift service IDL.")]),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://medium.com/airbnb-engineering/data-infrastructure-at-airbnb-8adfb34f169c",target:"_blank",rel:"noopener noreferrer"}},[e._v("Data Infrastructure at Airbnb"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://medium.com/airbnb-engineering/https-medium-com-jonathan-parks-scaling-erf-23fd17c91166",target:"_blank",rel:"noopener noreferrer"}},[e._v("Scaling Airbnb's Experimentation Platform"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.quora.com/What-is-the-AirBNB-Software-Architecture",target:"_blank",rel:"noopener noreferrer"}},[e._v("What is the Airbnb Software Architecture"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://aws.amazon.com/solutions/case-studies/airbnb/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Airbnb Case Study"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://medium.com/airbnb-engineering/binaryalert-real-time-serverless-malware-detection-ca44370c1b90",target:"_blank",rel:"noopener noreferrer"}},[e._v("BinaryAlert: Real-time Serverless Malware Detection"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://medium.com/airbnb-engineering/alerting-framework-at-airbnb-35ba48df894f",target:"_blank",rel:"noopener noreferrer"}},[e._v("Alerting Framework at Airbnb"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://medium.com/airbnb-engineering/scaling-airbnbs-payment-platform-43ebfc99b324",target:"_blank",rel:"noopener noreferrer"}},[e._v("Scaling Airbnb Payment Platform"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://medium.com/airbnb-engineering/measuring-transactional-integrity-in-airbnbs-distributed-payment-ecosystem-a670d6926d22",target:"_blank",rel:"noopener noreferrer"}},[e._v("Measuring Transactional Integrity in Airbnb's Distributed Payment Ecosystem"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://medium.com/airbnb-engineering/tracking-the-money-scaling-financial-reporting-at-airbnb-6d742b80f040",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tracking the Money - Scaling Financial Reporting at Airbnb"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Building Services, "),t("a",{attrs:{href:"https://medium.com/airbnb-engineering/building-services-at-airbnb-part-1-c4c1d8fa811b",target:"_blank",rel:"noopener noreferrer"}},[e._v("Part 1"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://medium.com/airbnb-engineering/building-services-at-airbnb-part-2-142be1c5d506",target:"_blank",rel:"noopener noreferrer"}},[e._v("Part 2"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://medium.com/airbnb-engineering/how-airbnb-manages-to-monitor-customer-issues-at-scale-b883301ca461",target:"_blank",rel:"noopener noreferrer"}},[e._v("How Airbnb manages to monitor customer issues at scale"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://medium.com/airbnb-engineering/experiment-reporting-framework-4e3fcd29e6c0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Experiment Reporting Framework"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://medium.com/airbnb-engineering/streamalert-real-time-data-analysis-and-alerting-e8619e3e5043",target:"_blank",rel:"noopener noreferrer"}},[e._v("Streamalert: Real-time Data Analysis and Alerting"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://medium.com/airbnb-engineering/nebula-as-a-storage-platform-to-build-airbnbs-search-backends-ecc577b05f06",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nebula as a Storage Platform to build Airbnb's Search Backends"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://medium.com/airbnb-engineering/unlocking-horizontal-scalability-in-our-web-serving-tier-d907449cdbcf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unlocking Horizontal Scalability in Web Serving Tier"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://medium.com/airbnb-engineering/smartstack-service-discovery-in-the-cloud-4b8a080de619",target:"_blank",rel:"noopener noreferrer"}},[e._v("Smartstack service discovery in the cloud"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://techblog.poppulo.com/microservices-service-discovery-with-smartstack-and-docker/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Service Discovery with Smartstack and Docker"),t("OutboundLink")],1)])])])},[function(){var e=this.$createElement,r=this._self._c||e;return r("h1",{attrs:{id:"airbnb-architecture"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#airbnb-architecture","aria-hidden":"true"}},[this._v("#")]),this._v(" Airbnb Architecture")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#overview"}},[e._v("Overview")])]),t("li",[t("a",{attrs:{href:"#solutions"}},[e._v("Solutions")]),t("ul",[t("li",[t("a",{attrs:{href:"#aws-stack"}},[e._v("AWS Stack")])]),t("li",[t("a",{attrs:{href:"#load-balancer"}},[e._v("Load Balancer")])]),t("li",[t("a",{attrs:{href:"#service-discovery"}},[e._v("Service Discovery")])])])]),t("li",[t("a",{attrs:{href:"#web-tier"}},[e._v("Web Tier")])]),t("li",[t("a",{attrs:{href:"#data-tier"}},[e._v("Data Tier")]),t("ul",[t("li",[t("a",{attrs:{href:"#infrastructure-as-code"}},[e._v("Infrastructure as code")])]),t("li",[t("a",{attrs:{href:"#data-warehouse"}},[e._v("Data Warehouse")])]),t("li",[t("a",{attrs:{href:"#microservices"}},[e._v("Microservices")])]),t("li",[t("a",{attrs:{href:"#search-service"}},[e._v("Search Service")])])])]),t("li",[t("a",{attrs:{href:"#references"}},[e._v("References")])])])])},function(){var e=this.$createElement,r=this._self._c||e;return r("h2",{attrs:{id:"overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var e=this.$createElement,r=this._self._c||e;return r("h2",{attrs:{id:"solutions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#solutions","aria-hidden":"true"}},[this._v("#")]),this._v(" Solutions")])},function(){var e=this.$createElement,r=this._self._c||e;return r("h3",{attrs:{id:"aws-stack"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aws-stack","aria-hidden":"true"}},[this._v("#")]),this._v(" AWS Stack")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ul",[t("li",[e._v("It uses EC2 instances for its application, memcache, and search servers.")]),e._v(" "),t("li",[e._v("It uses RDS as main MySQL database.")]),e._v(" "),t("li",[e._v("It used ELB for traffic load balancing (Note: seems no longer used anymore, check section "),t("code",[e._v("Load Balancer")]),e._v(" below.).")]),e._v(" "),t("li",[e._v("It uses EMR for daily data processing and analyzing (Note: seems somewhat out-dated, check section "),t("code",[e._v("Data Warehouse")]),e._v(" below).")]),e._v(" "),t("li",[e._v("It uses S3 for backups and static files, including user pictures.")]),e._v(" "),t("li",[e._v("It uses Amazon CloudWatch to supervise ES2 assets.")])])},function(){var e=this.$createElement,r=this._self._c||e;return r("h3",{attrs:{id:"load-balancer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#load-balancer","aria-hidden":"true"}},[this._v("#")]),this._v(" Load Balancer")])},function(){var e=this.$createElement,r=this._self._c||e;return r("h3",{attrs:{id:"service-discovery"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#service-discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Service Discovery")])},function(){var e=this.$createElement,r=this._self._c||e;return r("h2",{attrs:{id:"web-tier"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#web-tier","aria-hidden":"true"}},[this._v("#")]),this._v(" Web Tier")])},function(){var e=this.$createElement,r=this._self._c||e;return r("h2",{attrs:{id:"data-tier"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#data-tier","aria-hidden":"true"}},[this._v("#")]),this._v(" Data Tier")])},function(){var e=this.$createElement,r=this._self._c||e;return r("p",[this._v("Airbnb uses Amazon RDS as main MySQL database. The databases are deployed in multi-AZ (availability zone). Below 3-tier architecture reflects the basic pattern. Note that there are several types of databases for different scenarios, for example, "),r("code",[this._v("airmaster")]),this._v(", "),r("code",[this._v("calendar")]),this._v(", "),r("code",[this._v("message")]),this._v(", etc. Therefore, there are over a dozen dbproxy and hundreds of database instances gets deployed.")])},function(){var e=this.$createElement,r=this._self._c||e;return r("p",[r("img",{attrs:{src:"/static/images/airbnb-architecture-3-tier-db.png",alt:"3 Tier DB"}})])},function(){var e=this.$createElement,r=this._self._c||e;return r("h3",{attrs:{id:"infrastructure-as-code"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#infrastructure-as-code","aria-hidden":"true"}},[this._v("#")]),this._v(" Infrastructure as code")])},function(){var e=this.$createElement,r=this._self._c||e;return r("h3",{attrs:{id:"data-warehouse"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#data-warehouse","aria-hidden":"true"}},[this._v("#")]),this._v(" Data Warehouse")])},function(){var e=this.$createElement,r=this._self._c||e;return r("p",[r("img",{attrs:{src:"/static/images/airbnb-architecture-data-pipeline.png",alt:"Data Pipeline"}})])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ul",[t("li",[e._v("Kafka performs as a broker for event logs.")]),e._v(" "),t("li",[e._v("Sqoop performs as a broker for production database dumps.")]),e._v(" "),t("li",[e._v("The Gold and Silver Hive cluster are the data sinks. The Gold Hive cluster replicates data to silver. The Gold Hive cluster has a higher SLA guarantee.")]),e._v(" "),t("li",[e._v("A Spark Cluster works on machine learning for stream processing.")]),e._v(" "),t("li",[e._v("A Presto Cluster is for ad hoc querying.")]),e._v(" "),t("li",[e._v("An Airflow application runs in front-end for job scheduling.")]),e._v(" "),t("li",[e._v("S3 is a long-term solution for HDFS data.")])])},function(){var e=this.$createElement,r=this._self._c||e;return r("h3",{attrs:{id:"microservices"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#microservices","aria-hidden":"true"}},[this._v("#")]),this._v(" Microservices")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ul",[t("li",[e._v("Developers can choose between JSON-over-http and Thrift-over-http.")]),e._v(" "),t("li",[e._v("Downstream services need to install generated RPC clients from upstream.")]),e._v(" "),t("li",[e._v("Downstream services also need to apply standard timeout, retry, and circuit breaker logic.")]),e._v(" "),t("li",[e._v("The framework adds request and response metrics on both service-side and client-side.")]),e._v(" "),t("li",[e._v("The framework adds requests context, including request id to all underlying service requests.")]),e._v(" "),t("li",[e._v("The framework supports adding alerts based on metrics like "),t("code",[e._v("p95_latency")]),e._v(", "),t("code",[e._v("p99_latency")]),e._v(", etc.")])])},function(){var e=this.$createElement,r=this._self._c||e;return r("h3",{attrs:{id:"search-service"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#search-service","aria-hidden":"true"}},[this._v("#")]),this._v(" Search Service")])},function(){var e=this.$createElement,r=this._self._c||e;return r("p",[r("img",{attrs:{src:"/static/images/airbnb-architecture-search.png",alt:"Search Service"}})])},function(){var e=this.$createElement,r=this._self._c||e;return r("ul",[r("li",[this._v("Nebula is a schema-less, versioned data store service with both real-time random data access and offline batch data management.")]),this._v(" "),r("li",[this._v("The search flow only adds some search indexing logic into this system.")]),this._v(" "),r("li",[this._v("The snapshot is generated daily as a part of the offline data merge.")]),this._v(" "),r("li",[this._v("The search index is built from the snapshot and then deployed to search periodically as an ordinary binary deploy.")])])},function(){var e=this.$createElement,r=this._self._c||e;return r("h2",{attrs:{id:"references"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[this._v("#")]),this._v(" References")])}],!1,null,null,null);r.default=i.exports}}]);