首先你要明白，所谓的system design是要做一个能够在现实世界中运行的系统的设计，所以说system design可以cover任何topic，从建大桥到做手机到做网站，而局限到软件，尤其是面试的scenario，大体局限于以下几种：
1. Web application，典型例子：
	1. 设计一个e-commerce商品的detail page(参考Amazon商品detail page)。
	2. 设计一个online小游戏。
	3. 设计一个论坛。
2. 简单的Web Service，典型例子：
	1. 设计一个short url service。
3. 实时／半实时的消息update，典型例子：
	1. messenger，
	2. news feed。
4. 数据系统，典型例子：
	1. top url hits, 
	2. unique url hits
5. 内容分发系统，典型例子：
	1. 设计Netflix CDN
6. 专业知识，典型例子：
	1. 推荐系统，
	2. 分布式系统基础架构，
	3. 搜索。。。

个人认为，要想在System Design上面达到像刷题那样的熟练程度，对于刚刚入行一两年甚至三四年的朋友来说，是不可能的，因为这些问题要想准确答出，已经远远超出了对junior engineer的要求，甚至已经是senior engineer的水准。
但是即使面试官并没有期望你达到senior engineer的水准，至少他还是想要通过这个问题来摸清你的工程经验，如果所答完全非所问，那么给面试官留下的印象将是非常糟糕的。
你的方案可以不是最优的，甚至可能离最优有一段距离，但是你的方案一定不能是ridiculous的。起码在小的scale上要能有可行性，可以展现你的一些基本design sense。

基础知识的准备：
1. 数据库 —— 
了解relational数据库(Oracle/postgres)的基本知识，了解数据库的partition，了解查询，了解数据库的replication；
- 了解现在流行的NoSQL databases: key-value database (Riak/DynamoDB)，document based(mongodb)，graph based, big table(or column based - HBase)...这里DynamoDB有个paper，关于eventually consistence需要明白CAP定理。
3. 队列服务—— 
	- 了解Kafka或者Kinesis，
	- 明白队列服务的应用场景
5. Web层
	- 了解MVC，具体技术可以了解Spring，Nodejs
1. 前端
	1. 了解Javascript，Html
	2. 了解SOAP和RESTful
	3. 理解cache——如何以及在何种情况下运用cache降低latency
2. 理解现代分布式系统需要大量monitor以及log analysis
3. 理解系统中不能有single point of failure，从failure的角度出发设计系统，运用Write Ahead Log进行故障恢复，充分replicate你的service所以任何一个机器、集群、机房的灾难都不会对你的整体服务造成不可挽回的影响
4. 处理高并发，明白资源共享是影响并发的主要原因之一（另一个原因是进程间通信）——如何decouple共享资源，提高并发效率
5. 明白基本的效率评定标准，如TPS。。。
6. 理解一些分布式系统的基本概念，如上面提到的CAP，以及Consistent Hashing，Vector Clock
7. 读一些paper，如Akamai的CDN，Amazon的Dynamo，Google的Map-reduce（很老嗯）等等
8. 亲手实现一个简单的网站，从前端到数据库都接触一些
9. 了解Hadoop的基本功能，如HDFS，Map-Reduce。
10. 了解Apache Storm的基本功能。
11. 结合所学的基础知识，考虑你所设计的系统的Availability，Scalability和Performance.
基本想到的就这些。有需要的话我再补充。
补充内容 (2017-8-21 04:59):
最近有一本新书叫Designing Data-intensive Applications，非常适合非科班出身的朋友们了解相关的知识