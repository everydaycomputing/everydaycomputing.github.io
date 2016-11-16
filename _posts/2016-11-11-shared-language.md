---
layout: post
title: 'Shared language, differing meanings.
When do the differences matter?'
date: 2016-11-11
published: true
author:
---

![]({{ site.images }}/blog/2016-11-11-shared-language-b2f0edf1.png)

When looking at the subject-specific terminology used in mathematics and computer science, the two disciplines appear to be fast friends. Computer scientists develop algorithms; so do mathematicians. Mathematicians abstract away details of a problem situation and focus on underlying structures; so do computer scientists. Computer scientists use variables to represent changing quantities; so do mathematicians. It’s natural to assume compatibility between processes and areas of focus that are described using the same words. But can this assumed compatibility hold up to careful scrutiny?


<!--excerpt-->


One of the most interesting themes that has come up in discussions among our project staff -- a group mostly made up of individuals who have significant mathematics expertise or significant computer science expertise, but not both -- is the discovery of differences in understanding of words like algorithm, abstraction, and variable.


Sometimes these differences are captured in published definitions of the term. Consider these definitions of [variable](http://www.oed.com/view/Entry/4959?redirectedFrom=algorithm#eid) (n) from the Oxford English Dictionary:

> “a. Math. and Physics. A quantity or force which, throughout a mathematical calculation or investigation, is assumed to vary or be capable of varying in value.”

>“b. Computing. A data item that can take on more than one value during or between programs and is stored in a particular designated area of memory; the area of memory itself; (also variable name) the name referring to such an item or location.”


In both cases, a variable is a representation of a value that can change. However, this is where the similarity ends.


In mathematics, the variable expresses a mathematical relationship of a variable to other values and/or variables. These relationships can hold for a particular problem statement or for an entire domain. For example, if we have five cookies, then we look later and there are only three, we might want to know how many were eaten. `5 – x = 3` expresses a relationship between the number `x` and the values `3` and `5`. We can easily solve this to determine that x = 2. In another case, we might say that Sally is 5 years older than Jose. This mathematical relationship between the ages of Sally and Jose can be expressed as s = j + 5, where `s` is Sally’s age and `j` is Jose’s age. While we don’t know the precise values of `s` and `j`, this expresses that the relationship between them is static. If Sally is 95, then Jose is 90. Likewise, if Sally is 40, then Jose is 35. So, while the value of the variable s can change, the relationship between the two values `s` and `j` stays constant. Finally, variables can also express relationships that are not tied to a particular problem. In this case, it simultaneously represents all values within a given domain, such as in the expression of the commutative property of addition as `a + b = b + a`[^ref-bell].


In computer science, however, a variable designates a name for a memory location, and that memory location holds a value at any point in the problem. Instructions in the program modify the values referred to by a variable. For example, the statement `x = 2` is not a relationship between `x` and `2` that holds for the entire program. Instead, it is an action that places the value `2` into the location specified by `x`. Likewise, `s = j + 5` does not specify a permanent relationship between `s` and `j`. Instead, it reads the value currently held by `j`, adds `5` to it, and places the result in `s`. The relationship specified by the equation holds at the conclusion of the instruction, but it may not hold the instruction before this one, nor may it hold after the next instruction. It specifies an action, not a relationship.

For other words, the definition itself states that the two disciplines define a term the same, but their usage in the two fields may be different. Consider the Oxford English Dictionary’s definition of [algorithm]( Bell, M., Bell, J., Bretzlauf, J., Dillard, A., Flanders, J., .... Saecker, P. 2012. Everyday Mathematics Teacher’s Reference Manual, Grades 4-6. Chicago, IL: McGraw-Hill Education.) (n):

> “2. Math. and Computing. A procedure or set of rules used in calculation and problem-solving; (in later use spec.) a precisely defined set of mathematical or logical operations for the performance of a particular task.”


Our internal team conversations quickly exposed issues with the assumed compatibility of this shared definition – enough that we need a follow-up post to fully discuss these issues. In mathematics, students often use pre-defined algorithms which work well to operate on entire classes of inputs (e.g. addition algorithm). In CS, there is far greater variety, with algorithms being invented for computers to follow.


This discussion is not intended to suggest that the perceived synergies between mathematics and computer science are too problematic to be assumed. Rather, we have been struck by the realization that while large overlap exists, so do a number of subtle differences. This raises a number of interesting research questions about students’ understanding of these concepts and terms, and whether and when the subtle differences are important to point out to students in an integrated math/CS curriculum. We are excited to investigate these issues as our work continues.


[^ref-bell]: Bell, M., Bell, J., Bretzlauf, J., Dillard, A., Flanders, J., .... Saecker, P. (2012). Everyday Mathematics Teacher’s Reference Manual, Grades 4-6. Chicago, IL: McGraw-Hill Education.
