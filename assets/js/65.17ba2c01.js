(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{264:function(e,t,s){"use strict";s.r(t);var a=s(0),n=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),s("p",[s("router-link",{attrs:{to:"/load-balance.html"}},[e._v("Load Balance")]),e._v(" is essential for distributing traffic across multiple hosts in the server farm.")],1),e._v(" "),s("p",[e._v("DNS Load Balancing provides the most straightforward load balancing strategy through DNS servers.")]),e._v(" "),e._m(3),e._v(" "),s("p",[e._v("DNS load balancing is an implementation of configuring the IP addresses of the domain name as multiple A records. As a result, the requests from the client are distributed across a group of server machines.")]),e._v(" "),s("p",[e._v("For example, "),s("a",{attrs:{href:"https://enqueuezero.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("enqueuezero.com"),s("OutboundLink")],1),e._v(" has 4 IP addresses that can serve requests - "),s("code",[e._v("185.199.108.153")]),e._v(", "),s("code",[e._v("185.199.109.153")]),e._v(", "),s("code",[e._v("185.199.110.153")]),e._v(", "),s("code",[e._v("185.199.111.153")]),e._v(". We can configure multiple A records for "),s("code",[e._v("enqueuezero.com")]),e._v(" in the domain name provider. In this case, it's Google Domains.  Below screenshot shows how to configure A records in Google Domains:")]),e._v(" "),e._m(4),e._v(" "),s("p",[e._v("Below command shows, the DNS interrogation gets 4 IP addresses.")]),e._v(" "),e._m(5),s("p",[e._v("To prove such configuration can distribute traffics, let's ping the domain in different servers. As you can see, the ping command talks to servers in different IP addresses based on where the ping starts, as the DNS server returns the host that responds the fastest.")]),e._v(" "),e._m(6),e._m(7),s("p",[e._v("Short conclusion: By configuring multiple A records for the domain, DNS load balancing can distribute traffic across multiple server hosts.")]),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),s("p",[s("a",{attrs:{href:"https://www.terraform.io/docs/providers/dns/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Terraform DNS provider"),s("OutboundLink")],1),e._v(" supports any DNS provider that supports DNS updates (RFC 2136).")]),e._v(" "),e._m(10),e._v(" "),e._m(11),s("p",[e._v("You can also use "),s("a",{attrs:{href:"https://www.terraform.io/docs/providers/aws/r/route53_record.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Terraform AWS route53"),s("OutboundLink")],1),e._v(" if you're using AWS Route53 for load balancing, or "),s("a",{attrs:{href:"https://www.terraform.io/docs/providers/azurerm/r/dns_a_record.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Terraform Azure DNS resources"),s("OutboundLink")],1),e._v(" if you're using Azure service. Below code shows how to utilize AWS Route53 for DNS load balancing.")]),e._v(" "),e._m(12),e._m(13),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/kubernetes-incubator/external-dns",target:"_blank",rel:"noopener noreferrer"}},[e._v("github.com"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("ExternalDNS makes Kubernetes resources discoverable via public DNS servers.")]),e._v(" "),s("p",[e._v("After setting IAM policies and a hosted zone, you can apply below resource to the Kubernetes cluster.")]),e._v(" "),e._m(14),s("p",[e._v("When the "),s("code",[e._v("external-dns")]),e._v(" pod is up, it will add the Ingress service IP addresses to the DNS in the hosted zone. Check the full tutorial of setting ExternalDNS up: "),s("a",{attrs:{href:"https://github.com/kubernetes-incubator/external-dns/blob/master/docs/tutorials/aws.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("github.com/kubernetes-incubator/external-dns"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("The reason we can't see IP addresses in this example is the external-dns exposes dynamic public IP addresses of the ingress service assigned by the overlay network IP manager.")]),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),s("p",[e._v("You cannot set any round robin algorithms to the scheduler (DNS server) since it is not defined in the DNS protocol. However, the traffic is distributed to the servers in a seeming round-robin way.")]),e._v(" "),s("p",[e._v("The DNS cache on specific DNS server node deviates the stats. It happens when the DNS results are cached on a DNS server, and unfortunately, this DNS server serves more traffic than others. Things like geography, population distribution, city size, infrastructure can affect the")]),e._v(" "),e._m(17),e._v(" "),s("p",[e._v("There is no much performance issue when the traffic grows when applying the DNS load balancing,\nsince the DNS caching system works so well.")]),e._v(" "),s("p",[e._v("From an operational perspective, engineering teams can collect and monitor the DNS latencies from different regions. The popular tools includes "),s("a",{attrs:{href:"https://worldping.raintank.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("worldPing"),s("OutboundLink")],1),e._v(", "),s("a",{attrs:{href:"https://www.pingdom.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PingDom"),s("OutboundLink")],1),e._v(", etc.")]),e._v(" "),e._m(18),e._v(" "),s("p",[e._v("When the number of the servers in the farm goes up, we can add more A records to the domain.\nThere is no limitation of the number of the records.")]),e._v(" "),s("p",[e._v("In practical, we can mix using the A record and CNAME group records.")]),e._v(" "),e._m(19),e._m(20),e._v(" "),s("p",[e._v("Setting a proper TTL for DNS records is essential. It's the number of the seconds that the DNS records expire. When one of the backend hosts is down, it's critical to modify the DNS records as soon as possible.")]),e._v(" "),s("p",[e._v("The DDNS or Standard Dynamic update DNS (RFC 2126) enables updates for the DNS records remotely. The other DNS providers might provide HTTP APIs for updating the DNS records.")]),e._v(" "),s("p",[e._v("Tools like ExternalDNS can listen to the Kubernetes API events and automatically updates the DNS records when ingress services get updated.")]),e._v(" "),e._m(21),e._v(" "),s("p",[e._v("DNS load balancing distributes requests across multiple IP addresses by configuring various DNS A records. Modern tools enable programmatically updating DNS records. When the incident happens, some of them can even automatically update the DNS records. The downside of DNS load balancing is that it cannot distribute requests evenly to the backend servers.")]),e._v(" "),e._m(22),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Domain_Name_System",target:"_blank",rel:"noopener noreferrer"}},[e._v("Domain Name System"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://www.nginx.com/resources/glossary/dns-load-balancing/",target:"_blank",rel:"noopener noreferrer"}},[e._v("What Is DNS Load Balancing?"),s("OutboundLink")],1)])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"dns-load-balance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dns-load-balance","aria-hidden":"true"}},[this._v("#")]),this._v(" DNS Load Balance")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"context"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#context","aria-hidden":"true"}},[this._v("#")]),this._v(" Context")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("DNS, or Domain Name System, is the yellow page of the Internet. When people access to the website through domain name "),t("code",[this._v("enqueuezero.com")]),this._v(", the web browser interacts with DNS server first to get the IP addresses for dialing.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/static/images/dns-load-balancing-setting.png",alt:"Google Domains"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("% dig enqueuezero.com\n\n; <<>> DiG 9.10.6 <<>> enqueuezero.com\n;; global options: +cmd\n;; Got answer:\n;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 61900\n;; flags: qr rd ra; QUERY: 1, ANSWER: 4, AUTHORITY: 0, ADDITIONAL: 1\n\n;; OPT PSEUDOSECTION:\n; EDNS: version: 0, flags:; udp: 512\n;; QUESTION SECTION:\n;enqueuezero.com.        IN    A\n\n;; ANSWER SECTION:\nenqueuezero.com.    599    IN    A    185.199.108.153\nenqueuezero.com.    599    IN    A    185.199.109.153\nenqueuezero.com.    599    IN    A    185.199.110.153\nenqueuezero.com.    599    IN    A    185.199.111.153\n\n;; Query time: 260 msec\n;; SERVER: 8.8.4.4#53(8.8.4.4)\n;; WHEN: Tue Dec 25 07:55:24 NZDT 2018\n;; MSG SIZE  rcvd: 108\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# From Auckland, NZ\n$ ping -c 1 enqueuezero.com\nPING enqueuezero.com (185.199.108.153): 56 data bytes\n64 bytes from 185.199.108.153: icmp_seq=0 ttl=60 time=43.267 ms\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# From CA, US\n$ ping -c 1 enqueuezero.com\nPING enqueuezero.com (185.199.111.153): 56 data bytes\n64 bytes from 185.199.111.153: icmp_seq=0 ttl=60 time=52.162 ms\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"solutions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solutions","aria-hidden":"true"}},[this._v("#")]),this._v(" Solutions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"terraform"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#terraform","aria-hidden":"true"}},[this._v("#")]),this._v(" Terraform")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You can apply multiple IP addresses to the resource "),t("code",[this._v("dns_a_record_set")]),this._v(" like below.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('resource "dns_a_record_set" "@" {\n  zone = "enqueuezero.com."\n  name = "@"\n  addresses = [\n    "185.199.108.153",\n    "185.199.109.153",\n    "185.199.110.153",\n    "185.199.111.153",\n  ]\n  ttl = 300\n}\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('resource "aws_route53_record" "www" {\n  zone_id = "${aws_route53_zone.primary.zone_id}"\n  name    = "enqueuezero.com"\n  type    = "A"\n  ttl     = "300"\n  records = ["${aws_eip.lb.public_ip}"]\n}\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"externaldns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#externaldns","aria-hidden":"true"}},[this._v("#")]),this._v(" ExternalDNS")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" extensions/v1beta1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Deployment\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" external"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("dns\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("strategy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Recreate\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" external"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("dns\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("containers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" external"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("dns\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" registry.opensource.zalan.do/teapot/external"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("dns"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("latest\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("args")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("source=service\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("source=ingress\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("domain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("filter=external"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("dns"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("test.my"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("org.com "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# will make ExternalDNS see only the hosted zones matching provided domain, omit to process all available hosted zones")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("provider=aws\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("policy=upsert"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("only "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# would prevent ExternalDNS from deleting any records, omit to enable full synchronization")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("aws"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("zone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("type=public "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# only look at public hosted zones (valid values are public, private or no value for both)")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("registry=txt\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("txt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("owner"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("id=my"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("identifier\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"patterns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#patterns","aria-hidden":"true"}},[this._v("#")]),this._v(" Patterns")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"seeming-round-robin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#seeming-round-robin","aria-hidden":"true"}},[this._v("#")]),this._v(" Seeming Round-Robin")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"performance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#performance","aria-hidden":"true"}},[this._v("#")]),this._v(" Performance")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"scale"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scale","aria-hidden":"true"}},[this._v("#")]),this._v(" Scale")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("enqueuezero.com.    599    IN    CNAME    lb1.enqueuezero.com\nenqueuezero.com.    599    IN    CNAME    lb2.enqueuezero.com\nlb1.enqueuezero.com.    599    IN    A    185.199.108.153\nlb1.enqueuezero.com.    599    IN    A    185.199.109.153\nlb2.enqueuezero.com.    599    IN    A    185.199.110.153\nlb2.enqueuezero.com.    599    IN    A    185.199.111.153\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"fail-over"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fail-over","aria-hidden":"true"}},[this._v("#")]),this._v(" Fail Over")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"conclusions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conclusions","aria-hidden":"true"}},[this._v("#")]),this._v(" Conclusions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[this._v("#")]),this._v(" References")])}],!1,null,null,null);t.default=n.exports}}]);