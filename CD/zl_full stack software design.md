  [原文](https://khalilstemmler.com/articles/software-design-architecture/full-stack-software-design/)
Translated by readers to: [Japanese (日本語)](https://qiita.com/ROPITAL/items/165bef33492ba27cfbf7)

You ever think about what it took for some of the world's most skilled developers to learn how to build systems within companies like Uber, YouTube, Facebook, or Github?

It's crazy to me to consider the fact that Facebook was once an empty text file on someone's computer, and now it's this gargantuan company that has dipped it's toes into just about everything, and has personally impacted over [1.59 billion people](https://zephoria.com/top-15-valuable-facebook-statistics/) worldwide.

As a junior, self-taught developer or even intermediate developer, the roadmap to continued growth towards actually learning how to design _clean_ and _scalable_ systems seems kind of daunting.
作为初级，自学成才的开发人员，甚至是中级开发人员，朝着实际学习如何设计_干净_且_可扩展的_系统的方向继续增长的路线图似乎令人生畏。

For a lot of us, our projects die after one or two iterations because the code turns into an unmaintainable mess.

So where do we even _start_ in order to learn how to improve our designs?

The truth is:

> Software design and architecture is a _huge_ topic

Understanding how to:

-   Architect a system to serve the needs of its users   设计一个系统的架构，来满足用户的需求
-   Write code that's easy to change 编写易于修改的代码
-   Write code that's easy to maintain -   编写易于维护的代码
-   Write code that's easy to test  -   编写易于测试的代码

... is _very_ hard. The breadth of learning required is just so large.学习的广度是如此之大。

And even though you know how to write code to make things work at least _once_, the bigger challenge is to figure out how to write code that makes it easy to change in order to _keep up with the current requirements_.

But again, where to start?...

---

Anytime I'm faced with a complex problem, I go back to 第一性原则 [first principles](https://jamesclear.com/first-principles).

## First Principles

First principles is the most effective way to break down problems.

It works by deconstructing a problem all the way down to the **atomic level** where we can't deconstruct it anymore, and then reconstructing a solution from the parts that we're absolutely sure are true.

So let's apply it to software by first stating the goal.

What is the primary goal of software?

> The goal of software is to _continually_ **produce something that satisfies the needs of its users**, while minimizing the effort it takes to do so.

I fought with coming up with the best definition for a long time, and I'm prepared to argue with you about why I think that's accurate.

Software that doesn't serve the needs of its users, simply isn't good software.

And since the needs of our users changes often, it's important to make sure that software **was designed in order to be changed**.

If software cannot be changed (easily), that makes it bad software, because it prevents us from satisfying the _current_ needs of our users.

---

We've established that design matters, and it's important to learn how to produce well-designed software, but it can be a long road.
我们已经确定了设计很重要，学习如何生产设计良好的软件很重要，但这可能是一条漫长的路。

In this article, I'd like to present to you what I believe are the concrete pillars of software design and architecture.

## The stack

Before I show you the map, let me show you the _stack_.

Similar to something like the [OSI Model](https://en.wikipedia.org/wiki/OSI_model), each layer builds on top of the foundation of the previous one.与[OSI模型](https://en.wikipedia.org/wiki/OSI_model)类似，每一层都建立在前一层的基础之上。

![](https://user-images.githubusercontent.com/6892666/65833569-bb34fc00-e29f-11e9-8516-79cbd9f8f07b.png)

The software design and architecture stack shows all of the layers of software design, from the most high-level concepts to the most low-level details.

In the stack, I've included examples to _some_ of the most important concepts at that layer, but not all (because there are way too many).在堆栈中，我提供了该层中_一些_最重要概念的示例，但不是全部示例（因为方法太多）。

Now, check out the map. While I think the stack is good to see the bigger picture, the map is a little bit more detailed, and as a result, I think it's more useful.

## The map

To avoid running up my bandwidth, I reduced the quality of the map shown on site. If you'd like to get a high-quality png, you can find that up on my [GitHub](https://github.com/stemmlerjs/software-design-and-architecture-roadmap).

Below is the map for software design and architecture.

![](https://user-images.githubusercontent.com/6892666/65896069-834eb700-e37a-11e9-95be-7ae2300d5d50.png)

## Stage 1: Clean code

The very first step towards creating long-lasting software is figuring out how to write **clean code**.创建持久软件的第一步是弄清楚如何编写**简洁的代码**。

If you ask anyone what they think constitutes _clean code_, you'll probably get a different answer every time. A lot of times, you'll hear that _clean code_ is code that is easy to understand and change. 

At the low-level, this manifests in a few design choices like:在底层，这体现在一些设计选择中，例如：

-   being consistent 保持一致
-   preferring meaningful variable, method and class names over writing comments 优先于有意义的变量，方法和类名，而不是编写注释
-   ensuring code is indented and spaced properly 确保代码缩进并正确隔开
-   ensuring all of the tests can run 确保所有测试都可以运行
-   writing pure functions with no side effects 编写没有副作用的纯函数
-   not passing null 不传递空

These may seem like small things, but think of it like a game of Jenga. In order to keep the structure of our project stable over time, things like indentation, small classes and methods, and meaningful names, pay off a lot in the long run.

If you ask me, this aspect of _clean code_ is about having good **coding conventions** and following them.

I belive that's only _one_ aspect 方面of writing _clean code_.

My definitive explanation of clean code consists of:

-   🧠 Your developer mindset (empathy, craftsmanship, growth mindset, design thinking) 你的开发者心态（同理心、工艺、成长心态、设计思维）
-   ⚙️ Your coding conventions习惯 (naming things, refactoring, testing, etc)您的编码习惯（命名、重构、测试等）
-   🤹🏼 Your skills & knowledge (of patterns, principles, and how to avoid code smells and anti-patterns)您的技能和知识（模式、原则以及如何避免代码异味和反模式）

Getting into the right mindset is incredibly important if you want to write clean code.如果您想编写干净的代码，进入正确的心态非常重要。 One requirement is that you should care enough to learn about the business you're writing code within.首先要求是您应该足够关心以了解您在其中编写代码的业务。 If we don't care about the domain enough to understand it, then how can we be sure we're using **good names** to represent domain concepts? How can we be sure that we've accurately captured the functional requirements?  如果我们对领域的关注程度不足以理解它，那么我们如何确定我们使用的是**好的名称**来表示领域概念？ 我们如何确定我们已经准确地捕获了功能需求？

If we don't care about the code that we're writing, it's a lot less likely that we're going to implement实行 essential基本必要 coding conventions, have meaningful有意义 discussions, and ask for feedback on our solutions.

We often think that code is solely孤独 written to serve the needs of the _end user_, but we forget the **other people we write code for**: us, our teammates, and the project's future maintainers维护人. Having an understanding of the principles of _design_ and how human psychology decides what is _good_ and _bad_ design, will help us write better code. 有一个相互认同的代码设计原则将有助于我们编写更好的代码，而这个原则是基于人类心理学的好和坏的设计，

So essentially, the best word that describes this step of your journey? **Empathy**.从本质上讲，描述您旅程的这一步的最佳词是什么？ **共情**。

Once we've got that down, 一旦我们掌握了这一点，learn the _tricks of the trade_ and continue to improve them them over time by improving your knowledge of the essential software development patterns and principles. 就可以学习交易技巧，并通过提高您对基本软件开发模式和原则的了解，随着时间的推移继续改进它们。

### Learning resources

-   Clean Code, by Robert C. Martin
-   Refactoring, by Martin Fowler (2nd edition)
-   The Pragmatic Programmer, by Andy Hunt and Dave Thomas
-   The Design of Everyday Things, by Don Norman

The best resource to learn how to write clean code is Uncle Bob's book, "[Clean Code](https://www.amazon.ca/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)".

## Stage 2: Programming Paradigms 编程范例

Now that we're writing readable code that's easy to maintain, it would be a good idea to really understand the **3 major programming paradigms** and the way they influence how we write code.

In Uncle Bob's book, "[Clean Architecture](https://www.amazon.ca/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882/ref=asc_df_0132350882/?tag=googleshopc0c-20&linkCode=df0&hvadid=292982483438&hvpos=1o2&hvnetw=g&hvrand=13521899336201370454&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9000834&hvtargid=pla-435472505264&psc=1)", he brings attention to the fact that:

-   Object-Oriented Programming is the tool best suited for defining how we cross architectural boundaries with polymorphism and plugins_ 面向对象编程是最适我们的工具，用来定义如何通过多态性和插件跨越架构边界
-   Functional programming is the tool we use to push data to the boundaries of our applications_ 函数式编程是我们用来将数据推送到应用程序边界的工具
-   and Structured programming is the tool we use to write algorithms _  结构化编程是我们用来编写算法的工具

This implies that effective software uses a hybrid all 3 programming paradigms styles at different times.这意味着,一个高效率的软件里，会在不同时间使用所有三种编程范例样式。

While you _could_ take a strictly严格的 functional or strictly object-oriented approach to writing code, understanding where each excels will improve the quality of your designs.

> If all you have is a hammer, everything seems like a nail.

### Learning resources

-   Clean Architecture, by Robert C. Martin
-   Domain Modeling Made Functional, by Scott Wlaschin
-   Concepts of Programming Languages, Robert W. Sebesta (10th edition)

## Stage 3: Object-Oriented Programming  面向对象编程

It's important to know how each of the paradigms work and how they urge you to structure the code within them, but with respect to architecture, Object-Oriented Programming is the clear _tool for the job_.了解每种范式如何工作以及它们如何促使你在其中构建代码是很重要的，但是对于架构来说，面向对象编程是最明确的工具。

Not only does Object-Oriented programming enable us to create a **plugin architecture** and build flexibility into our projects; 面向对象编程不仅使我们能够创建**插件体系结构**，并在项目中建立灵活性。OOP comes with the 4 principles of OOP (encapsulation, inheritance, polymorhism, and abstraction) that help us create **rich domain models**.OOP带有OOP的4条原则（封装，继承，多态性和抽象），可帮助我们创建**丰富的领域模型**。

Most developers learning Object-Oriented Programming never get to this part: learning how to create a software implementation of the problem domain, and locating it in the center of a **layered** web app.

Functional programming can seem like the means to all ends in this scenario, but I'd recommend getting acquainted with model-driven design and [Domain-Driven Design](https://khalilstemmler.com/articles/domain-driven-design-intro/) to understand the bigger picture on how object-modelers are able to encapsulate an entire business in a zero-dependency domain model.

> Why is that a huge deal?

It's huge because if you can create a mental-model of a business, you can create a software implementation of that business.

### Learning resources

-   Object-Design Style Guide, by Matthias Noback
-   Clean Architecture, by Robert C. Martin
-   Domain-Driven Design, by Eric Evans

## Stage 4: Design Principles  设计原则

At this point, you're understanding that Object-Oriented Programming is very useful for encapsulating rich domain models and solving the [3rd type of "Hard Software Problems"- Complex Domains](https://khalilstemmler.com/wiki/3-categories-of-hard-software-problems/).

But OOP can introduce some design challenges.

When should I use composition?
When should I use inheritance?
When should I use an abstract class?

Design principles are really well-established and battle-tested object-oriented best practices that you use as railguards.

Some examples of common design principles you should familiarize yourself with are:

-   Composition over inheritance
-   Encapsulate what varies
-   Program against abstractions, not concretions
-   The hollywood principle: "Don't call us, we'll call you"
-   The [SOLID principles](https://khalilstemmler.com/articles/solid-principles/solid-typescript/), especially the [Single responsibility principle](https://khalilstemmler.com/articles/solid-principles/single-responsibility/)
-   DRY (Do Not Repeat Yourself)
-   [YAGNI (You Aren't Gonna Need It)](https://khalilstemmler.com/wiki/yagni/)

Make sure to come to your _own_ conclusions, though. Don't just follow what someone else says you should do. Make sure that it makes sense to you.

### Learning resources

-   Head First Design Patterns, by various authors
-   GoF Design Patterns, by various authors

## Stage 5: Design Patterns 设计模式

Just about every problem in software has been categorized and solved already. We call these patterns: design patterns, actually.

There are 3 categories of design patterns: **creational**, **structural**, and **behaviour**.
**创造型**，**结构型**和**行为型**。

### Creational

Creational patterns are patterns that control how objects are created.创建模式是控制对象创建方式的模式。

Examples of creational patterns include:

-   The **Singleton pattern**单例模式, for ensuring only a single instance of a class can exist
-   The **Abstract Factory pattern**抽象工厂模式, for creating an instance of several families of classes
-   The **Prototype pattern**原型模式, for starting out with an instance that is cloned from an existing one

### Structural

Structural patterns are patterns that simplify how we define relationships between components.

Examples of structural design patterns include:

-   The **Adapter pattern**, for creating an interface to enable classes that normally can't work together, to work together.
-   The **Bridge pattern**, for splitting a class that should actually be one or more, into a set of classes that belong to a hierarchy, enabling the implementations to be developed independently of each other.
-   The **Decorator pattern**, for adding responsibilities to objects dynamically.

### Behavioural

Behavioural patterns are common patterns for facilitating elegant communication between objects.

Examples of behavioural patterns are:

-   The **Template pattern**, for deferring the exact steps of an algorithm to a subclass.
-   The **Mediator pattern**, for defining the exact communication channels allowed between classes.
-   The **Observer pattern**, for enabling classes to subscribe to something of interest, and to be notified when a change occurred.

---

### Design pattern criticisms

Design patterns are great and all, but sometimes they can an additional complexity to our designs. It's important to remember YAGNI and attempt to keep our designs as simple as possible. Only use design patterns when you're really sure you need them. You'll know when you will.

---

If we know what each of these patterns are, when to use them, and when to _not even bother_ using them, we're in good shape to begin to understand how to architect larger systems.

The reason behind that is because **architectural patterns are just design patterns blown-up in scale to the high-level**, where design patterns are low-level implementations (closer to classes and functions).

### Learning resources

-   Head First Design Patterns, by various authors

## Stage 6: Architectural Principles  架构原则

Now we're at a higher level of thinking beyond the class level.

We now understand that the decisions we make towards organzing and building relationships between components at the high-level and the low-level, will have a significant impact on the maintainability, flexibility, and testability of our project.

Learn the guiding principles that helps you build in the flexibility that your codebase needs in order to be able to react to new features and requirements, with as little effort as possible.

Here's what I'd recommend learning right off the bat:

-   Component design principles: [The Stable Abstraction Principle](https://khalilstemmler.com/wiki/stable-abstraction-principle/), [The Stable Dependency Principle](https://khalilstemmler.com/wiki/stable-dependency-principle/), and The Acyclic Dependency Principle, for how to organize components, their dependencies, when to couple them, and the implications of accidentally creating dependency cycles and relying on unstable components.
-   [Policy vs. Detail](https://khalilstemmler.com/articles/enterprise-typescript-nodejs/clean-nodejs-architecture/), for understanding how to separate the rules of your application from the implementation details.
-   Boundaries, and how to identify the [subdomains](https://khalilstemmler.com/articles/enterprise-typescript-nodejs/application-layer-use-cases/) that the features of your application belongs within.

Uncle Bob discovered and originally documented many of these principles, so the best resource to learn about this is again, "[Clean Architecture](https://www.amazon.ca/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882/ref=asc_df_0132350882/?tag=googleshopc0c-20&linkCode=df0&hvadid=292982483438&hvpos=1o2&hvnetw=g&hvrand=13521899336201370454&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9000834&hvtargid=pla-435472505264&psc=1)".

### Learning resources

-   Clean Architecture, by Robert C. Martin

## Stage 7: Architectural Styles 架构风格

Architecture is about the stuff that matters.

It's about identifying what a system needs in order for it to be successful, and then stacking the odds of success by choosing the architecture that best fits the requirements.

For example, a system that has a lot of **business logic complexity** would benefit from using a **layered architecture** to encapsulate that complexity.

A system like Uber needs to be able to handle a lot of **real time-events** at once and update drivers' locations, so **publish-subscribe** style architecture might be most effective.

I'll repeat myself here because it's important to note that the 3 categories of architectural styles are similar to the 3 categories of design patterns, because **architectural styles are design patterns at the high-level**.

### Structrual

Projects with _varying levels_ of components and wide-ranging functionality will either benefit or suffer from adopting a structural architecture.

Here are a few examples:

-   **Component-based** architectures emphasize separation of concerns between the _individual components_ within a system. Think **Google** for a sec. Consider how many applications they have within their enterprise (Google Docs, Google Drive, Google Maps, etc). For platforms with lots of functionality, component-based architectures divide the concerns into loosely coupled independent components. This is a _horizontal_ separation.
-   **Monolithic** means that the application is combined into a single platform or program, deployed altogether. _Note: You can have a component-based AND monolithic architecture if you separate your applications properly, yet deploy it all as one piece_.
-   **Layered** architectures separate the concerns _vertically_ by cutting software into infrastructure, application, and domain layers.

![Clean Architecture](https://khalilstemmler.com/img/blog/software-architecture-design/app-logic-layers.svg)

> An example of cutting the concerns of an application _vertically_ by using a layered architecture. Read [here](https://khalilstemmler.com/articles/software-design-architecture/organizing-app-logic/) for more information on how to do this.

### Messaging

Depending on your project, messaging might be a really important component to the success of the system. For projects like this, message-based architectures build on top of functional programming principles and behavioural design patterns like the observer pattern.

Here are a few examples of message-based architectural styles:

-   **Event-Driven** architectures view all signficant changes to state as events. For example, within a [vinyl-trading app](https://github.com/stemmlerjs/white-label), a offer's state might change from "pending" to "accepted" when both parties agreee on the trade.
-   **Publish-subscribe** architectures build on top of the Observer design pattern by making it the primary communication method between the system itself, end-users / clients, and others systems and components.

### Distributed

A distributed architecture simply means that the components of the system are deployed separately and operate by communicating over a network protocol. Distributed systems can be very effective for scaling throughput, scaling teams, and delegating (potentially expensive tasks or) responsibility to other components.

A few examples of distributed architectural styles are:

-   **Client-server** architecture. One of the most common architectures, where we divide the work to be done between the client (presentation) and the server (business logic).
-   **Peer-to-peer** architectures distribute application-layer tasks between equally-privileged participants, forming a peer-to-peer network.

### Learning resources

-   Clean Architecture, by Robert C. Martin
-   Software Architect's Handbook, by Joseph Ingeno

## Stage 8: Architectural Patterns 架构模式

Architectural _patterns_ explain in greater tactical detail how to actually implement one of those architectural _styles_.

Here are a couple of examples of architectural patterns and the styles that they inherit from:

-   **[Domain-Driven Design](https://khalilstemmler.com/articles/domain-driven-design-intro/)** is an approach to software development against really complex problem domains. For DDD to be most successful, we need to implement a **layered architecture** in order to separate the concerns of a domain model from the infrastrural details that makes the application actually run, like databases, webservers, caches, etc.
-   **Model-View Controller** is probably the most well-known architectural pattern for developing user interface-based applications. It works by dividing the app into 3 components: model, view, and controller. MVC is incredibly useful when you're first starting out, and it helps you piggyback towards other architectures, but there hit's a point when we realize [MVC isn't enough](https://khalilstemmler.com/articles/enterprise-typescript-nodejs/when-crud-mvc-isnt-enough/) for problems with lots of business logic.
-   **Event sourcing** is a functional approach where we store only the transactions, and never the state. If we ever need the state, we can apply all the transactions from the beginning of time.

### Learning resource

-   Domain-Driven Design, by Eric Evans
-   Implementing Domain-Driven Design, by Vaughn Vernon

## Stage 9: Enterprise patterns

Any architectural pattern you choose will introduce a number of constructs and technical jargon to familiarize yourself with and decide on whether it's worth the effort to use or not.

Taking an example that many of us know, in **MVC**, the _view_ holds all the presentation layer code, the _controller_ is translates commands and queries from the _view_ into requests that are handled by the _model_ and returned by the _controller_.

Where in the Model (M) do we handle these things?:

-   validation logic
-   invariant rules
-   domain events
-   use cases
-   complex queries
-   and business logic

If we simply use an ORM (object-relational mapper) like [Sequelize](https://khalilstemmler.com/articles/software-design-architecture/full-stack-software-design/) or [TypeORM](https://khalilstemmler.com/articles/software-design-architecture/full-stack-software-design/) as the _model_, all that important stuff to gets left to interpretation on where it should go, and it finds itself in some unspecified layer between (what should be a rich) _model_ and the _controller_.

![mvc-2](https://www.freecodecamp.org/news/content/images/2019/10/mvc-2.svg)

> Taken from "3.1 - Slim (Logic-less) models" in [solidbook.io](https://solidbook.io/).

If there's something I've learned so far in my journey going beyond MVC, it's that **there is a construct for everything**.

For each of those things that MVC fails to address, in [Domain-Driven Design specifically](https://khalilstemmler.com/articles/domain-driven-design-intro/), there exist several **enterprise patterns** to solve them. For example:

-   **[Entities](https://khalilstemmler.com/articles/typescript-domain-driven-design/entities/)** describe models that have an identity.
-   **[Value Objects](https://khalilstemmler.com/articles/typescript-value-object/)** are models that have no identity, and can be used in order to encapsulate validation logic.
-   **[Domain Events](https://khalilstemmler.com/articles/typescript-domain-driven-design/chain-business-logic-domain-events/)** are events that signify some relevant business event occurring, and can be subscribed to from other components.

Depending on the architectural style you've chosen, there are going to be _a ton_ of other enterprise patterns for you to learn in order to implement that pattern to it's fullest potential.

### Learning resources

These are just a few different learning resources mostly focused on Domain-Driven Design and Enteprise Application Architecture. But this is where there is the _most_ to learn, and where you can _dive the deepest_ in your learning, because it builds ontop of everything we've learned thus far.

-   Patterns of Enterprise Application Architecture, by Martin Fowler
-   Enterprise Integration Patterns, by Gregor Hohpe
-   Domain Driven Design, by Eric Evans
-   Implementing Domain-Driven Design, by Vaughn Vernon

## Resources & Conclusion

We talk a lot about [Domain-Driven Design](https://khalilstemmler.com/articles/domain-driven-design-intro/) on this blog, but there's a lot readers would benefit from knowing first (like layered architectures, oop, model-driven design, design principles and patterns) before we dive deep on building rich domain models with TypeScript.