---
layout: post
title: 'Welcome to the Playground'
date: 2016-11-04
published:
author:
---

In September, Apple unveiled a new programming environment alongside iOS10 that stakes its claim for mind and marketshare in the [#csforall](http://cacm.acm.org/news/208725-making-computer-science-accessible-to-all-students/fulltext) movement.  [Swift Playgrounds](https://developer.apple.com/swift/playgrounds/) is a new free iPad application that allows students different opportunities to explore and learn coding. With this entry, Apple joins other high profile technology companies, such as [Google](https://www.cs-first.com/en/home) and [Microsoft](https://education.minecraft.net/) who are making investments in the future of computer science education.    With these tools Apple claims that they “have reinvented how to learn to code”. While the marketing department may played a role in this bold assertion, there is a component of this initiative that has the potential to live up to this claim: the Swift programming language.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Apple_II_tranparent_800.png/600px-Apple_II_tranparent_800.png)
_Figure 1: An Apple ][ computer in 1982._

## Apple in Education
To understand the significance of this new release, it is useful to have an understanding of Apple in education.  Historically, Apple has had a very strong presence in education, but predominantly from a hardware perspective.  Beige Apple ][s were a fixture in elementary school libraries in the 80's while brightly colored iMacs lined tables in 90's.  The refined industrial design and more approachable interfaces made them attractive for schools (and parents), despite the high costs. In 1984 an Apple ][ cost $2,638 (approximately $7,000 after adjusting to 2016 dollars).   As lower cost PCs flooded schools and the Internet browser brought parity through online software titles, Apple [lost considerable marketshare in education](http://www.macworld.com/article/1006764/education.html).  Efforts to appeal directly to the education market with the eMac in the early 2000s, failed to revive its position.

On January 27, 2010, Steve Jobs introduced the iPad and many saw it as an opportunity for Apple to regain dominance in the education market.  The intuitive touch interface, prolific third-party applications, and highly portable form factor seemed to be the perfect match for schools.  In addition, the [accessibility features in iOS](http://www.apple.com/accessibility/) provided new and revolutionary was to help children with special learning needs.  Many schools have embraced iPads and have brought them in to classrooms, albeit in different ways.  The spectrum ranges from a few shared devices for a school to 1-to-1 programs, where every student receives an iPad.  However once again, a low cost alternative Chromebooks -- inexpensive laptops running Google’s Chrome operating system -- have risen to challenge the iPadas the latest technology for dominance in education.

<!-- There were many [high profile examples](http://www.forbes.com/sites/michaelthomsen/2015/06/16/do-ipads-belong-in-schools/#3b918663792f) of schools.  http://fortune.com/2016/05/23/maine-schools-ipad-macbook-air/-->

## Everyone Can Code
Apple's release of _Swift Playgrounds_ is the company's most significant entry into the computer science education market from a software perspective[^link-squeak]. Alongside the release of _Swift Playgrounds_, Apple has released a new initiative and series of education titles under the name ["Everyone Can Code"](http://www.apple.com/education/everyone-can-code/).  The _Swift Playgrounds_ iPad app is part of this initiative, along with a book series, teacher resources, and an educators' forum.

![](http://images.apple.com/v/swift/playgrounds/b/images/overview/run_my_code_medium_2x.jpg)
_Figure 2. The Learning to Code 1: The "Fundamental of Swift" playground on the Swift Playgrounds iPad application_

If you decompose "Everyone Can Code", you will find that it has the the same elements as almost every other early computer science education effort: a programming environment, curriculum materials and teacher learning materials.  If you look at other efforts you will see one important thing that Apple lacks: an active community supporting it.  Since this is a new offering only time will tell if educators and curriculum developers will support Apple's initiative, but, it should be noted that _Swift Playgrounds has a built-in mechanism for sharing and distributing materials.

![](http://images.apple.com/v/swift/playgrounds/b/images/overview/code_library_medium_2x.jpg)
Figure 2: From with the _Swift Playgrounds_ app, users can download new playgrounds.  Currently all the offerings are from Apple.  Users can share their own playgrounds via email or Air Drop. Image from Apple.com.


## The Swift Programming Language
The [Swift](http://www.apple.com/swift/)[^swift-bird] programming language is the unique proposition in "Everyone Can Code".   Introduced in 2014, Swift is the modern programming language used to develop applications for all of Apple's platforms (e.g. iOS, macOS, watchOS, tvOS).  _Swift Playgrounds_ is the iPad application that provides a text-based programming environment to teach kids coding using the same Swift language used to develop for the App Store.

The text-based approach to early computer science education contrasts the current trends in block-based languages.  To overcome the syntactic precision required for text-based environments, block-based environments arose to ensure that 'bugs' were semantic errors, not a result of typing or syntax error[^cite-lewis-acm-2010].  For an overview of block-based environments, see [^cite-weintrop-acm-2015].  

Today, block-based languages such as [Scratch](https://scratch.mit.edu/), [Tynker](https://www.tynker.com/), [Blocky](https://developers.google.com/blockly/) dominate early computer science exposure for their perceived ease of use and have been embraced by both formal (eg. [CS Principles](http://www.csprinciples.org/), [Exploring Computer Science Curriculum](http://www.exploringcs.org/),  [Code.org](http://code.org)) and informal (eg. [Hour of Code](), [Made with Code]()) coding curriculum.  Many are browser based and operate independently of any specific platform.  Some take advantage of the touch interfaces provided by the iPad and other touch based computing devices (eg. [Tynker](https://www.tynker.com/), [Scratch Jr.](https://www.scratchjr.org/), [The Foos](http://thefoos.com/)).

Apple has a history of making decision that seem to go against the current trends in computing, as highlighted in the "Mac vs. PC" campaign of the 2000s.  However, their choice to make their environment text-based can be seen to address some of the recurring questions that revolve around student perceptions in block-based environments, namely that students do not identify block-based environments as authentic or 'real coding'[^cite-lewis-acm-2010],[^cite-disalvo-2014],[^cite-weintrop-acm-2015].  (At this time, the literature is inconclusive to the effects of exposure to block-based environments before text-based on later student performance.)

Apple addressed these concerns head-on with its choice of Swift as the programing language for learning computer science.  Using _Swift Playgrounds_ students are learning the programming language that is used to code the apps that they use every day and they immediately see the connection to 'real coding'.  The underlying message is that while learning a block-based language will help you learn another programming language, learning Swift will help you make an app.  Currently, Swift is one of the most in-demand programming language in industry, so its use in education may better address the nations current STEM deficit.

## The Swift Playgrounds Approach
_Swift Playgrounds_ provides a highly interactive first experience through its 'Fundamentals of Swift' playground (Figure 2).  This playground provides a walkthrough of the Swift programming language by navigating a character, Byte, through a 3D world with commands like `moveForward` and `turnLeft`.  As the lessons progress, these commands are combined with conditionals and loops to introduce new concepts and perform more advanced navigation (Figure 3).

![](http://images.apple.com/v/swift/playgrounds/b/images/overview/code_playground_medium_2x.jpg)
_Figure 3. The Fundamentals of Swift playground teaches the Swift programming language through interaction in a 3D world._

The ‘Fundamentals of Swift’ playground highlights the best and worst of the environment. It positively shows how rich text and executable code can be interspersed in a Playground. If you see Figure 3, the Playground text states the goal, supporting text, and instructional steps 1, 2, or 3. Below the line is code that can be edited and run in the Playground using the "Run My Code" button.  It also showcases the innovative QuickType coding keyboard and Shortcut bar.  Figure 3 shows the Shortcut bars limited number of text options:`for`, `collectGem()`, `moveForward()` and `turnRight()` for the currently selected context.  

However, while the experience in Apple's highly produced playgrounds is immersive and engaging it is not representative of what the typical playground experience may be.  It highlights one of the biggest obstacle _Swift Playgrounds_ faces, namely content development.  At this time, anyone wishing to develop a playground has to be a Swift developer and comfortable working with HTML and Javascript to produce more complex playgrounds.  There are no authoring tools other than, ironically, a text editor.

If we assume that a strong community of curriculum developers and software engineers comes together to create fantastic content for _Swift Playgrounds_, it still does not address the biggest obstacle facing it.  _Swift Playgrounds_ runs only on the iPad.  In the current landscape of computing hardware in education, it is challenging to see how _Swift Playgrounds_ will become a formidable option in early computer science education given this constraint.  The success of the 'Everyone Can Code' initiative may be too tightly coupled to hardware sales to gain wide adoption.

## LTEC at the Playground
Everyday Computing is actively exploring all the opportunities to deliver the best integrated computer science and mathematics educational experiences into the classroom, including the examining the environments that support this.  In future posts, we will take a closer look at how _Swift Playgrounds_ may play a role in this.

### References

[^link-squeak]:Squeak is a programming language developed by Apple over 20 years ago.  For more information, read: Ingalls, Dan, Ted Kaehler, John Maloney, Scott Wallace, and Alan Kay. "Back to the future: the story of Squeak, a practical Smalltalk written in itself." In ACM SIGPLAN Notices, vol. 32, no. 10, pp. 318-326. ACM, 1997.

[^swift-bird]: The language is named for a bird, not a commentary on the performance of the language.  Although, in benchmarks it is faster than Apple's previous development language Objective-C.

[^cite-lewis-acm-2010]:Lewis, Colleen M. "How programming environment shapes perception, learning and goals: logo vs. scratch." In Proceedings of the 41st ACM technical symposium on Computer science education, pp. 346-350. ACM, 2010.

[^cite-weintrop-acm-2015]:Weintrop, David, and Uri Wilensky. "To block or not to block, that is the question: students' perceptions of blocks-based programming." In Proceedings of the 14th International Conference on Interaction Design and Children, pp. 199-208. ACM, 2015.
[^cite-disalvo-2014]:DiSalvo, Betsy. "Graphical Qualities of Educational Technology." (2014).
