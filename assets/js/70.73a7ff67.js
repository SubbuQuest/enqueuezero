(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{257:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("p",[e._v("In this chapter, we'll build a Kubernetes cluster that is ready for deploying our applications.")]),e._v(" "),e._m(1),e._v(" "),a("p",[e._v("Below diagram provides a simplified pictures on networking concepts")]),e._v(" "),a("mermaid",[e._v("\ngraph LR\n    subgraph VPC\n        subgraph private_subnet\n            subgraph AZ1\n                ec2_1--\x3enat_gateway1\n                ec2_2--\x3enat_gateway1\n            end\n            subgraph AZ2\n                ec2_3--\x3enat_gateway2\n                ec2_4--\x3enat_gateway2\n            end\n        end\n        subgraph public_subnet\n            load_balancer\n            internet_gateway\n        end\n    end\n")]),e._v(" "),e._m(2),e._v(" "),a("p",[e._v("Amazon Virtual Private Cloud (Amazon VPC) is a virtual network for launching AWS resources dedicated to an AWS account.\nThink of the VPC as a depot for storing all your cloud resources launched by AWS.")]),e._v(" "),e._m(3),e._v(" "),a("p",[e._v("AZ, or Availability zones are distinct locations that are engineered to be isolated from failures in other Availability Zones.")]),e._v(" "),a("p",[e._v("Think of the availability zones as sections in the depot.")]),e._v(" "),e._m(4),e._v(" "),a("p",[e._v("A subnetwork or subnet is a logical subdivision of an IP Network.")]),e._v(" "),a("p",[e._v("In general, we create two subnets, public subnet and private subnet.\nThe load balancer, and Internet gateway are deployed to the public subnet.\nThe worker nodes, and NAT gateway are deployed to the private subnet.")]),e._v(" "),e._m(5),e._v(" "),a("p",[e._v("An Internet gateway is the node where data sending in from the Internet and sending out to the Internet.\nIt connects the Internet and the subnets in the VPC.")]),e._v(" "),e._m(6),e._v(" "),a("p",[e._v("A NAT Gateway, or network address translation network is the node in a private subnet that connects other AWS resources or Internet, but prevent the Internet from sending data in.")]),e._v(" "),e._m(7),e._v(" "),a("p",[e._v("Below diagram provides a simplified pictures on computation concepts.")]),e._v(" "),a("mermaid",[e._v("\ngraph TB\n    traffic --\x3e elb\n    elb --\x3e ec2_1\n    elb --\x3e ec2_2\n    more_traffic -.-> elb\n    elb -.-> ec2_3\n    auto_scaling_group -- create --\x3e ec2_3\n")]),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),a("p",[e._v("Elastic Load Balancing automatically distributes incoming application traffic across multiple targets, such as Amazon EC2 instances.")]),e._v(" "),e._m(10),e._v(" "),a("p",[e._v("Amazon Elastic Compute Cloud (EC2) is the Amazon cloud-computing platform that provide virtual servers to run computer applications.\nEach virtual server is so-called an instance.\nAn user can boot an Amazon Machine Image (AMI) to configure a virtual machine, create, launch, and terminate the instance as needed.")]),e._v(" "),e._m(11),e._v(" "),a("p",[e._v("An auto scaling group contains a collection of Amazon EC2 instances that share similar characteristics and are treated as a logical grouping for the purposes of instance scaling and management.")]),e._v(" "),a("p",[e._v("When the traffic is high, the auto scaling group can scale up, meaning creating more EC2 instances to serve the traffic, and vice versa for when the traffic is low.")]),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),a("p",[e._v("A security group is a virtual firewall that controls the traffic for one or more instances.\nYou can configure what IP packets can be send in and send out.\nThe rules are specified in a simple form of source ip, target ip, target port.")]),e._v(" "),e._m(14),e._v(" "),a("p",[e._v("The AWS IAM, or AWS Identity and Access Management is for securely control individual and group access to your AWS resources.\nIt provides the authentication for managing AWS resources.")]),e._v(" "),e._m(15),e._v(" "),a("p",[e._v("Below diagram shows the relationship of Kubernetes concepts.")]),e._v(" "),a("mermaid",[e._v("\ngraph TB\n    worker_node_1 -- connect --\x3e eks_cluster\n    worker_node_2 -- connect --\x3e eks_cluster\n    worker_node_3 -- connect --\x3e eks_cluster\n")]),e._v(" "),e._m(16),e._v(" "),a("p",[e._v("Amazon EKS, or Amazon Elastic Container Service for Kubernetes is a cloud solution for running Kubernetes on AWS.\nIt provides Kubernetes management infrastructure across multiple AWS availability zones.\nBy costing very few management efforts, you'll have a full-fledged Kubernetes cluster running in the cloud without headache.")]),e._v(" "),e._m(17),e._v(" "),a("p",[e._v("Amazon EKS only provides the Kubernetes management infrastructure, not the actual computing nodes.\nWorker nodes are EC2 instances that connects to the master of EKS Cluster.\nThese worker nodes will be where the application resides in.")]),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),e._m(21),a("p",[e._v("Create IAM user or group to obtain credentials. // TODO")]),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),e._m(24),e._m(25),e._v(" "),e._m(26),e._m(27),e._v(" "),e._m(28),a("p",[e._v("Now, we're good to go for the subnets.")]),e._v(" "),e._m(29),e._v(" "),e._m(30),e._m(31),e._v(" "),e._m(32),a("p",[e._v("Next, we're going to create an Internet gateway for the public subnet. The internet gateway has to be within the created VPC.")]),e._v(" "),e._m(33),e._m(34),e._v(" "),e._m(35),a("p",[e._v("The last thing for the route table is to attach it to the public subnet. In this way, the subnet will have a route table that allow traffic going through the internet gateway with blocking. Note that we need to associate the route table to the public subnet across all of the availability zones.")]),e._v(" "),e._m(36),e._m(37),e._v(" "),a("p",[e._v("To allow EKS service managing or retrieving data from other AWS resources,  we need to put some policies on the IAM role. The IAM role will be used by the EKS Master.")]),e._v(" "),e._m(38),a("p",[e._v("Other than IAM role policies, we also need to create a security group for restricting network access.")]),e._v(" "),e._m(39),e._m(40),e._v(" "),e._m(41),e._v(" "),e._m(42),e._m(43),e._v(" "),a("p",[e._v("The cluster is setup for now although it can schedule any work, as no node is available. Next, we're going to launch EC2 as the worker nodes for the EKS cluster.")]),e._v(" "),a("p",[e._v("We start from defining IAM role and policies for worker nodes.")]),e._v(" "),e._m(44),a("p",[e._v("Next, we need to create the IAM instance profile, which must be used to tag the IAM role to the EC2 instance.")]),e._v(" "),e._m(45),a("p",[e._v("Then, we create the security group for the worker node.")]),e._v(" "),e._m(46),a("p",[e._v("The first rule we set to the worker node security group is to allow worker node communicating with each other. In this case, both the source and the target should point to worker node security group itself.")]),e._v(" "),e._m(47),a("p",[e._v("The second rule we set to the worker node security group is to allow kubelets and kube-proxy communicating with the Kubernetes control plane. In this case, the source is the worker node security group, and the target is the cluster security group.")]),e._v(" "),e._m(48),a("p",[e._v("The third rule we set to the worker node security group is to allow worker node communicating with the EKS master cluster.")]),e._v(" "),e._m(49),e._m(50),e._v(" "),a("p",[e._v("With the security resources allocated, we're ready to bring EC2 instances up and join the EKS cluster.")]),e._v(" "),a("p",[e._v("First, let's select a latest Amazon Machine Image (AMI) as the image for the EC2 instances. It's good to lock the version to a stable one.")]),e._v(" "),e._m(51),a("p",[e._v("Next, we create a launch configuration for the EC2 instance.")]),e._v(" "),e._m(52),e._v(" "),a("p",[e._v("Getting Started with Amazon EKS, "),a("a",{attrs:{href:"https://aws.amazon.com/eks/getting-started/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://aws.amazon.com/eks/getting-started/"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("AWS EKS Introduction, "),a("a",{attrs:{href:"https://learn.hashicorp.com/terraform/aws/eks-intro",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://learn.hashicorp.com/terraform/aws/eks-intro"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("What Is Amazon VPC, "),a("a",{attrs:{href:"https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("VPCs and Subnets, "),a("a",{attrs:{href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Subnetwork, "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Subnetwork",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://en.wikipedia.org/wiki/Subnetwork"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Auto Scaling Groups "),a("a",{attrs:{href:"https://docs.aws.amazon.com/autoscaling/ec2/userguide/AutoScalingGroup.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.aws.amazon.com/autoscaling/ec2/userguide/AutoScalingGroup.html"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("AWS IAM Basic, "),a("a",{attrs:{href:"https://aws.amazon.com/iam/faqs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://aws.amazon.com/iam/faqs/"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Amazon EC2 Security Groups for Linux Instances, "),a("a",{attrs:{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Creating a Custom Cluster from Scratch, "),a("a",{attrs:{href:"https://kubernetes.io/docs/setup/scratch/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://kubernetes.io/docs/setup/scratch/"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("eksctl, a CLI for Amazon EKS, "),a("a",{attrs:{href:"https://eksctl.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://eksctl.io/"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("router-link",{attrs:{to:"/"}},[e._v("Please donate this project. It takes time and efforts writing these articles.")])],1)],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"create-amazon-eks-cluster-by-terraform"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-amazon-eks-cluster-by-terraform","aria-hidden":"true"}},[this._v("#")]),this._v(" Create Amazon EKS Cluster By Terraform")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"networking-concepts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#networking-concepts","aria-hidden":"true"}},[this._v("#")]),this._v(" Networking Concepts")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"vpc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vpc","aria-hidden":"true"}},[this._v("#")]),this._v(" VPC")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"availability-zones"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#availability-zones","aria-hidden":"true"}},[this._v("#")]),this._v(" Availability Zones")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"subnet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#subnet","aria-hidden":"true"}},[this._v("#")]),this._v(" Subnet")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"internet-gateway"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#internet-gateway","aria-hidden":"true"}},[this._v("#")]),this._v(" Internet Gateway")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"nat-gateway"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nat-gateway","aria-hidden":"true"}},[this._v("#")]),this._v(" NAT Gateway")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"computation-concepts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#computation-concepts","aria-hidden":"true"}},[this._v("#")]),this._v(" Computation Concepts")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("ELB serves user requests and load balance to backend EC2 instances.")]),this._v(" "),t("li",[this._v("Auto scaling group create or terminate EC2 instances based on their loads.")]),this._v(" "),t("li",[this._v("EC2 instances are the actual virtual server node.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"elb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elb","aria-hidden":"true"}},[this._v("#")]),this._v(" ELB")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"ec2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ec2","aria-hidden":"true"}},[this._v("#")]),this._v(" EC2")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"auto-scaling-group"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#auto-scaling-group","aria-hidden":"true"}},[this._v("#")]),this._v(" Auto Scaling Group")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"security-concepts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#security-concepts","aria-hidden":"true"}},[this._v("#")]),this._v(" Security Concepts")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"security-groups"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#security-groups","aria-hidden":"true"}},[this._v("#")]),this._v(" Security Groups")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"iam-users-iam-roles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iam-users-iam-roles","aria-hidden":"true"}},[this._v("#")]),this._v(" IAM Users / IAM Roles")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"kubernetes-concepts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-concepts","aria-hidden":"true"}},[this._v("#")]),this._v(" Kubernetes Concepts")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"eks-cluster"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eks-cluster","aria-hidden":"true"}},[this._v("#")]),this._v(" EKS Cluster")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"worker-nodes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#worker-nodes","aria-hidden":"true"}},[this._v("#")]),this._v(" Worker Nodes")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"create-kubernetes-cluster-on-aws"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-kubernetes-cluster-on-aws","aria-hidden":"true"}},[this._v("#")]),this._v(" Create Kubernetes Cluster on AWS")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"preparation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preparation","aria-hidden":"true"}},[this._v("#")]),this._v(" Preparation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Install "),t("code",[this._v("terraform")]),this._v(". For macOS users, you can install terraform via Homebrew.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ brew "),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v(" terraform\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"setup-network"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setup-network","aria-hidden":"true"}},[this._v("#")]),this._v(" Setup Network")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Before moving forward, let's give the cluster a name. For reusable, we define a variable. Anytime we want to get the variable in the rest of the chapter, we can use "),t("code",[this._v("${var.cluster-name}")]),this._v(" in the terraform script.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-tf extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('variable "cluster-name" {\n  type = "string"\n  default = "tomato-coffee"\n}\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('We want all our AWS resources within the scope of VPC. In particular, we need to add a tag "kubernetes.io/cluster/${var.cluster-name}=shared" for the VPC. Only in this way can the EKS cluster joining the VPC. The cidr_block '),t("code",[this._v("10.0.0.0/16")]),this._v(" defines the total number we can allocate IP addresses and IP routing.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-tf extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('resource "aws_vpc" "vpc" {\n  cidr_block = "10.0.0.0/16"\n\n  tags = "${\n    map(\n     "Name", "${var.cluster-name}-vpc",\n     "kubernetes.io/cluster/${var.cluster-name}", "shared",\n    )\n  }"\n}\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Before creating subnets, the first thing we need to do is to get the availability zones, since both the private subnet and public subnet needs to deploy their resources to at least two availability zones for high availability. We don't need to create AZ but simply fetch a list of AZs as they are AWS concerns. Therefore, we simply use terraform data source for this kind of purpose. Eventually, it'll be an array like "),t("code",[this._v('["us-west-2a", "us-west-2b", "us-west-2c"]')]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-tf extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('data "aws_availability_zones" "azs" {}\n')])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("We set the "),a("code",[e._v("count")]),e._v(" to 2 for creating the subnet twice, one in the first AZ, and the other in the second AZ. The maximum value of "),a("code",[e._v("count")]),e._v(" depends on how many availability zones provided in designated region. We get the availability zone name by "),a("code",[e._v("${data.aws_availability_zones.azs.names[count.index]}")]),e._v('. It will be strings like "us-west-2a". Then we get the vpc id by'),a("code",[e._v("${aws_vpc.vpc.id}")]),e._v(". The terraform syntax of "),a("code",[e._v("${terraform_resource.resource_name.resource_attribute}")]),e._v(" provides you the reference to a dynamically fetched cloud resource value. We also define the cidr block to "),a("code",[e._v("10.0.${count.index}.0/24")]),e._v(" similarly to what we have done to the vpc except it's much smaller. The tag "),a("code",[e._v("kubernetes.io/cluster/${var.cluster-name}=shared")]),e._v(" is also required.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-tf extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('resource "aws_subnet" "private-subnet" {\n  count = 2\n\n  vpc_id            = "${aws_vpc.vpc.id}"\n  cidr_block        = "10.0.${count.index}.0/24"\n  availability_zone = "${data.aws_availability_zones.azs.names[count.index]}"\n\n  tags = "${\n    map(\n     "Name", "${var.cluster-name}-private-subnet-${data.aws_availability_zones.azs.names[count.index]}",\n     "kubernetes.io/cluster/${var.cluster-name}", "shared",\n    )\n  }"\n}\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The public subnet is very similar to the private. We only change the "),t("code",[this._v("cidr_block")]),this._v(" to another namespace. In public subnet, it's "),t("code",[this._v("10.0.X.0/24")]),this._v(", while in subnet, it's "),t("code",[this._v("10.1.X.0/24")]),this._v(". The two CIDR blocks do not necessarily need to be the exact two given example. It depends on your network topology.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-tf extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('resource "aws_subnet" "public-subnet" {\n  count = 2\n\n  vpc_id            = "${aws_vpc.vpc.id}"\n  cidr_block        = "10.1.${count.index}.0/24"\n  availability_zone = "${data.aws_availability_zones.azs.names[count.index]}"\n\n  tags = "${\n    map(\n     "Name", "${var.cluster-name}-public-subnet-${data.aws_availability_zones.azs.names[count.index]}",\n     "kubernetes.io/cluster/${var.cluster-name}", "shared",\n    )\n  }"\n}\n\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-tf extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('resource "aws_internet_gateway" "igtw" {\n  vpc_id = "${aws_vpc.vpc.id}"\n\n  tags {\n    Name = "${var.cluster-name}-internet-gateway"\n  }\n}\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("We still need to create a route table for passing traffic through the internet gateway. The only route we add to the table is to allow all traffic ("),t("code",[this._v("0.0.0.0/0")]),this._v(") going through the created internet gateway.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-tf extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('resource "aws_route_table" "public-subnet-route-table" {\n  vpc_id = "${aws_vpc.vpc.id}"\n\n  route {\n    cidr_block = "0.0.0.0/0"\n    gateway_id = "${aws_internet_gateway.igtw.id}"\n  }\n}\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-tf extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('resource "aws_route_table_association" "public-subnet-route-table-assoc" {\n  count = 2\n\n  subnet_id      = "${aws_subnet.public-subnet.*.id[count.index]}"\n  route_table_id = "${aws_route_table.public-subnet-route-table.id}"\n}\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"setup-security-policies-for-eks-master"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setup-security-policies-for-eks-master","aria-hidden":"true"}},[this._v("#")]),this._v(" Setup Security Policies for EKS Master")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-tf extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('resource "aws_iam_role" "cluster" {\n  name = "${var.cluster-name}-cluster"\n\n  assume_role_policy = <<POLICY\n{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Principal": {\n        "Service": "eks.amazonaws.com"\n      },\n      "Action": "sts:AssumeRole"\n    }\n  ]\n}\nPOLICY\n}\n\nresource "aws_iam_role_policy_attachment" "AmazonEKSClusterPolicy" {\n  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy"\n  role       = "${aws_iam_role.cluster.name}"\n}\n\nresource "aws_iam_role_policy_attachment" "AmazonEKSServicePolicy" {\n  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSServicePolicy"\n  role       = "${aws_iam_role.cluster.name}"\n}\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-tf extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('resource "aws_security_group" "cluster" {\n  description = "Cluster communication with worker nodes"\n  vpc_id      = "${aws_vpc.vpc.id}"\n\n  egress {\n    from_port   = 0\n    to_port     = 0\n    protocol    = "-1"\n    cidr_blocks = ["0.0.0.0/0"]\n  }\n\n  tags {\n    Name = "${var.cluster-name}-cluster"\n  }\n}\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"setup-eks-master"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setup-eks-master","aria-hidden":"true"}},[this._v("#")]),this._v(" Setup EKS Master")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("With above AWS resources allocated, now we're ready to bring up an EKS Master. The role for performing cluster admin work is "),t("code",[this._v("aws_iam_role.cluster")]),this._v(" we created above. The security group for the cluster is "),t("code",[this._v("aws_security_group.cluster")]),this._v(". We let the subnets for the cluster to be both the public subnet and private subnet.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-tf extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('resource "aws_eks_cluster" "cluster" {\n  name = "${var.cluster-name}"\n  role_arn = "${aws_iam_role.cluster.arn}"\n\n  vpc_config {\n    security_group_ids = ["${aws_security_group.cluster.id}"]\n    subnet_ids = [\n      "${aws_subnet.public-subnet.*.id}",\n      "${aws_subnet.private-subnet.*.id}",\n    ]\n  }\n\n  depends_on = [\n    "aws_iam_role_policy_attachment.demo-cluster-AmazonEKSClusterPolicy",\n    "aws_iam_role_policy_attachment.demo-cluster-AmazonEKSServicePolicy",\n  ]\n}\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"setup-security-policies-for-worker-nodes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setup-security-policies-for-worker-nodes","aria-hidden":"true"}},[this._v("#")]),this._v(" Setup Security Policies for Worker Nodes")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-tf extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('resource "aws_iam_role" "worker-node" {\n  name = "${var-cluster-name}-worker-node"\n\n  assume_role_policy = <<POLICY\n{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Principal": {\n        "Service": "ec2.amazonaws.com"\n      },\n      "Action": "sts:AssumeRole"\n    }\n  ]\n}\nPOLICY\n}\n\nresource "aws_iam_role_policy_attachment" "worker-node-AmazonEKSWorkerNodePolicy" {\n  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy"\n  role       = "${aws_iam_role.worker-node.name}"\n}\n\nresource "aws_iam_role_policy_attachment" "worker-node-AmazonEKS_CNI_Policy" {\n  policy_arn = "arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy"\n  role       = "${aws_iam_role.worker-node.name}"\n}\n\nresource "aws_iam_role_policy_attachment" "worker-node-AmazonEC2ContainerRegistryReadOnly" {\n  policy_arn = "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly"\n  role       = "${aws_iam_role.worker-node.name}"\n}\n\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-tf extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('resource "aws_iam_instance_profile" "worker-node" {\n  name = "${var.cluster-name}-worker-node"\n  role = "${aws_iam_role.worker-node.name}"\n}\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-tf extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('resource "aws_security_group" "worker-node" {\n  name        = "${var.cluster-name}-worker-node"\n  description = "Security group for all nodes in the cluster"\n  vpc_id      = "${aws_vpc.vpc.id}"\n\n  egress {\n    from_port   = 0\n    to_port     = 0\n    protocol    = "-1"\n    cidr_blocks = ["0.0.0.0/0"]\n  }\n\n  tags = "${\n    map(\n     "Name", "${var.cluster-name}-worker-node",\n     "kubernetes.io/cluster/${var.cluster-name}", "owned",\n    )\n  }"\n}\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-tf extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('resource "aws_security_group_rule" "worker-node-ingress-self" {\n  description              = "Allow node to communicate with each other"\n  from_port                = 0\n  protocol                 = "-1"\n  security_group_id        = "${aws_security_group.worker-node.id}"\n  source_security_group_id = "${aws_security_group.worker-node.id}"\n  to_port                  = 65535\n  type                     = "ingress"\n}\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-tf extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('resource "aws_security_group_rule" "worker-node-ingress-cluster" {\n  description              = "Allow worker Kubelets and pods to receive communication from the cluster control plane"\n  from_port                = 1025\n  protocol                 = "tcp"\n  security_group_id        = "${aws_security_group.worker-node.id}"\n  source_security_group_id = "${aws_security_group.cluster.id}"\n  to_port                  = 65535\n  type                     = "ingress"\n}\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-tf extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('resource "aws_security_group_rule" "cluster-ingress-node-https" {\n  description              = "Allow pods to communicate with the cluster API Server"\n  from_port                = 443\n  protocol                 = "tcp"\n  security_group_id        = "${aws_security_group.cluster.id}"\n  source_security_group_id = "${aws_security_group.worker-node.id}"\n  to_port                  = 443\n  type                     = "ingress"\n}\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"setup-worker-nodes-fleet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setup-worker-nodes-fleet","aria-hidden":"true"}},[this._v("#")]),this._v(" Setup Worker Nodes Fleet")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-tf extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('locals {\n  image = "amazon-eks-node-v21"\n  owner = "602401143452" # Amazon EKS AMI Account ID\n}\n\ndata "aws_ami" "eks-worker" {\n  filter {\n    name   = "name"\n    values = ["${local.image}"]\n  }\n\n  most_recent = true\n  owners      = ["${loca.owner}"]\n}\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[this._v("#")]),this._v(" References")])}],!1,null,null,null);t.default=s.exports}}]);