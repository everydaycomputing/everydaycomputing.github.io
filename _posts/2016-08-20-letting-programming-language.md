---
layout: post
title: Letting Programming Language Navigate
date: 2016-08-20
published: true
author: 
---

This week, we continue on our quest to answer questions that will lead to an integrated mathematics / computational thinking curriculum.  [Last week](http://blog.everydaycomputing.org/2016/08/11/letting-computational/){:target="_blank"}, we looked at how to create computational thinking learning goals and tie those to grade levels. A complementary approach  is to imagine how we might create activities that align to particular grade levels. This week, we’re looking at one type of connection between mathematics and computer science via programming activities. While programming is not the only type of activity that can support computational thinking, it is an important, concrete venue in which to apply computational thinking skills.

<!--excerpt-->

There are several aspects to a programming activity -- the context of the activity, the programming environment, and the programming language (which defines the individual instructions students will use). At the elementary school level, the programming language is typically integrated with the programming environment, so those are chosen together. The most popular language / programming environment in use today is Scratch, a visual block-based language (VBBL) designed for grades 3 and higher. VBBL’s are interactive, visual environments in which students choose from a list of blocks (instructions) and drag and drop them into sequences of instructions (scripts).

In order to better understand the connections between mathematics and Scratch blocks, we identified the mathematical dependencies for each block and the grade level for which those concepts are introduced in the Common Core State Standards for Mathematics (CCSS-M). Several common blocks (e.g. position, changing size, pausing execution) have mathematical dependencies in 5th grade or higher[^fn-hill-2015]. Student success in Scratch can be very correlated with academic achievement in other subjects[^fn-seiter-13], and we would like to better target learning environments so that more students can succeed.


![Figure 1]({{ site.images }}/images/BlogPost5-Image1.png)
<br/>Figure 1. A rotation block using increasingly sophisticated mathematical inputs for CCSS-M-designated grade levels.
<br/>

So, we did what all good researchers do -- we made stuff up! We took the existing block, placed it into the CCSS-M-designated grade level, and reasoned about how one could accomplish similar (if not as precise) actions with a block that has fewer or different mathematical dependencies. What resulted were strands of blocks that students controlled using increasingly sophisticated mathematical inputs. Figure 1 shows the rotation block as an example. It transitions from a picture, then through various mathematical notations for fractions (a fraction of a turn), leading to the ending block that uses degrees.

We are not claiming that an environment should use a different block each year in a K–6 curriculum. In some circumstances, changing the block each year could be more disruptive to the computer science than teaching students the concepts. Instead, we’re investigating what blocks would look like at each grade so that we have a suite of choices when designing a single learning environment that a child can use from Kindergarten until their transition to typed languages. And we’re having fun doing it!

### References ###

[^fn-hill-2015]:Hill, C., Dwyer, H., Martinez, T. Iveland, A., Hansen, A., Harlow, D., Franklin, D., Floors and Flexibility: Designing a programming environment for 4th-6th grade classrooms In Proceedings of the Symposium on Computer Science Education (SIGCSE), Kansas City, MO, March 2015.
		
[^fn-seiter-13]:Linda Seiter and Brendan Foreman. 2013. Modeling the learning progressions of computational thinking of primary grade students. In Proceedings of the ninth annual international ACM conference on International computing education research (ICER '13). ACM, New York, NY, USA, 59-66. DOI=http://dx.doi.org/10.1145/2493394.2493403
