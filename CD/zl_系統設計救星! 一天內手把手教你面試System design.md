前言：
常看到有人問 
- system design需不需要準備 
- new grad會不會考system design 

我想給地裡的戰友們建議 當然準備面試刷題是基本中的基本 但當你刷到一定程度後 刷題投資報酬率就開始低了 這時我真心建議可以花些時間讀system design 因為你花在這個的前10-20小時投資報酬率非常高！

基本的觀念有了以後可以apply到所有的問題 面試之前不管HR跟你說有沒有system design你都不怕 廢話不多說 直接進入主題
我的所有資料來源都是地裡還有以下連結
- https://www.evernote.com/shard/s576/sh/7e58b450-1abe-43a8-bf82-fbf07f1db13c/049802174415b418a2e65f75b744ab72
- https://github.com/checkcheckzz/system-design-interview
- https://www.interviewbit.com/courses/system-design/

這篇文章主要是把所有手上資源照priority順序加上一些自己的整理 用簡單的方式介紹怎麼Ace system design 依照priority順序分成
明天面 下禮拜面 下個月面 跟明年面

## 明天要面system design

迷途書僮:
誒jyt0532 我明天就要面試了 沒空讀那麼多你給的文章 該怎麼辦？

jyt0532: 
很好 今天幸好你遇到我 我用最少的時間讓你知道明天面試的時候大方向怎麼走

- Step1: 先問所有requirement, spec 這個系統需要提供什麼功能
- Step2: Constrains: 問他我們需要處理多少traffic, 多少data, latency重不重要 A和C選哪個
- Step3: 計算需要多少機器 要用什麼storage
- Step4: Abstract design: 先畫出大架構！ 每個會出現的component都要畫出來 再看面試官希望你深入講哪個component
- Step5: Scale: 讓你的system有fault tolerance, scale成大公司的系統架構

Step3:
算一下你需要多大的machine多少台
https://gist.github.com/jboner/2841832 這裡面的數字要有點sense
假設我們現在要用72GB RAM 4 core的machine
那總共以儲存data來說 需要30TB/72GB = 420台
這樣的話每台的QPS = 10M/420 = 23000, 即使所有core都用了 每個core要處理6000QPS
代表說 1/6000 = 167us 搭配上面那個link可知道即使是ram sequentially read 1MB要250M 所以我們如果用這個size的machine 會無法負荷
改變主意 假設現在用16GB RAM  4core的machine
30TB/16GB = 1875台, QPS per CPU = 10M/1875/4 = 1400QPS = 700us per queries. 這個數字負擔小多了

看完上面的流程知道我們在幹嘛了吧? 
先用data constrain算出要幾台機器 
再用traffic constrain算看看這樣的配置合不合理
這樣做完你就知道你的system是需要猛的機器少台一點 還是差一點的機器多台一點

Step4: 畫出大架構


## 下禮拜要面system design

從小公司到上億用戶公司的架構演進(非常建議讀)
http://highscalability.com/blog/2016/1/11/a-beginners-guide-to-scaling-to-11-million-users-on-amazons.html

InterviewBit
這是個非常好的互動式網站 他是一步一步漸進式的問你每個你在面試中該問的問題 帶你走過一遍system design interview的process 非常建議這裡面的八題都要寫過
https://www.interviewbit.com/courses/system-design/
Scalable Web Architecture and Distributed Systems
http://www.aosabook.org/en/distsys.html

## 下個月要面
把這裡的文章都K過, 你就比大多數candidate強很多了 除非你想進的事system and data infra那就是另外一段故事了
https://github.com/checkcheckzz/system-design-interview#intro

## 明年面試
明年才要面你現在就開始準備的話 基本上你是個非常自律的人 你就定時follow各公司engineer寫的文章就可以了 別忘了面之前一個月再回來看我這篇
https://github.com/checkcheckzz/system-design-interview#blog

其實有工作經驗的都知道 你很常需要去design一個新的project 而釐清use case這些事情是基本.
連use case都沒問, 那面試官根本不會覺得你是個好的工程師.
主要考察的是communication and problem solving, 給你一個開放性問題 你怎麼分析step by step, 你如何跟別人討論你的idea, 如何optimize你的system 往這個方向想就覺得其實system design真的沒什麼好怕的 這篇寫了快五個小時 

我的部落格:
https://www.jyt0532.com/2017/03/27/system-design/