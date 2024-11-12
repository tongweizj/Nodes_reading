原文
https://overreacted.io/goodbye-clean-code/

摘要

I see now that my “refactoring” was a disaster in two ways:  
我现在发现我的“重构”在两个方面是一场灾难：

- Firstly, **I didn’t talk to the person who wrote it**. I rewrote the code and checked it in without their input. Even if it _was_ an improvement (which I don’t believe anymore), this is a terrible way to go about it. A healthy engineering team is constantly _building trust_. Rewriting your teammate’s code without a discussion is a huge blow to your ability to effectively collaborate on a codebase together.  
> 修改同事的代码，及时你是希望 clean code， 也要遵循对方的同意。
- Secondly, **nothing is free**. My code traded the ability to change requirements for reduced duplication, and it was not a good trade. For example, we later needed many special cases and behaviors for different handles on different shapes. My abstraction would have to become several times more convoluted to afford that, whereas with the original “messy” version such changes stayed easy as cake.  
    
Am I saying that you should write “dirty” code? No. I suggest to think deeply about what you mean when you say “clean” or “dirty”. Do you get a feeling of revolt? Righteousness? Beauty? Elegance? How sure are you that you can name the concrete engineering outcomes corresponding to those qualities? How exactly do they affect the way the code is written and [modified](https://overreacted.io/optimized-for-change/)?  


But don’t stop there. **Don’t be a clean code zealot. Clean code is not a goal.** It’s an attempt to make some sense out of the immense complexity of systems we’re dealing with. It’s a defense mechanism when you’re not yet sure how a change would affect the codebase but you need guidance in a sea of unknowns.  
