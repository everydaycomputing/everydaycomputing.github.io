---
layout: post
title: 'Revealing Students’ Computational Thinking in Problem-Solving Using Cognitive Interviews and Think-Aloud Protocols'
date: 2019-07-17
published: true
author: Feiya Luo
---

Author: Feiya Luo
Contributors (names in alphabetical order): John Hampton, Maya Israel, Todd Lash, Ruohan Liu, Michael McKelvey, Wei Yan.

This Spring semester, we piloted a series of [Action Fractions](https://www.canonlab.org/actionfractionslessons) lessons with 4th-grade students. During the lessons, students built projects using computational thinking (CT) skills such as decomposition, sequencing, and repetition to solve math projects focused on fractions. As part of the effort to understand students’ thinking during problem solving, we conducted “cognitive interviews,” also known as the think-aloud protocol (TAP), to solicit students’ immediate thoughts and reactions during problem solving. In our case, the purposes were to a) have students verbalize their thinking as they solved the CT+fractions problems, b) identify learning gaps and pitfalls in regard to CT understanding, and c) help us validate the assessment items--i.e. to see if there is any misalignment between students’ actual problem-solving and the item developers’ intention. 

The assessment items used in the cognitive interviews were selected from the CT assessments designed to assess student learning after they go through the Action Fractions lessons. To ensure meaningful data collection, the items included multiple-choice, open-ended, and fill-in-the-blank questions that covered all important CT concepts present in the lessons. From a data collection perspective, no True or False questions were selected, since they would not provide as much rich data compared to the other question formats used. 

<!--excerpt-->

Thirteen students participated in the cognitive interview. Each participant was presented with 3 items, which took them an average of 10-15 minutes to complete the items while verbalizing and sharing their thoughts. Each interview started with a brief introduction of what the participants were expected to do and the interviewer modeling what a fourth-grade fraction problem “think-aloud” looked like. With a total of 37 item responses, intriguing patterns emerged. The following are some highlights:

## Sequencing:

Sequencing turned out to be the concept that students were most comfortable with. Almost all responses to the sequence items (see Fig. 1 for example) were correct and students presented problem-solving rationale intended by the items.

<figure><img src="{{ site.images }}blog/2019-07-17-figure-1.png" alt="Sequencing assessment item asking students \"Write instructions for how to move along the path from the X to the %\" followed by a graphic showing quadrant 1 of a coordinate plane from the origin to (4,5) with an X on (1,1) connected to a % (percent sign) at (3,4) via a path from (1,1) to (2,1) to (2,4) to (3,4)" title="Sequencing assessment item asking students Write instructions for how to move along the path from the X to the % followed by a graphic showing quadrant 1 of a coordinate plane from the origin to (4,5) with an X on (1,1) connected to a % (percent sign) at (3,4) via a path from (1,1) to (2,1) to (2,4) to (3,4)"><figcaption>Fig. 1 Sample sequencing item</figcaption></figure>

## Conditional logic

Items tapping into conditional logic (e.g., if...then statements) revealed that while participants may understand this concept in daily life contexts, such as “If it is cold, then put on a jacket,” they did not know how to evaluate the condition in computing. For example, when asked to tell what would happen when “If (7<5), sound pop; else, sound bing” (see Fig. 2), none of the three participants answered it correctly. The practical implication was that when teaching conditional logic, it is important to explicitly explain that students have to first decide if a condition is True or False (in this case, decide that the condition “7<5” is false) before moving to the next line of code.

<figure><img src="{{ site.images }}blog/2019-07-17-figure-2.png" alt="Conditional logic assessment item asking students 'Describe what will happen when the following Scratch script is run' followed by a graphic showing a 'When green flag clicked' block containing an If-Else block with the condition '7 < 5'; 'then' contains a 'start sound pop' block, while 'else' contains a 'start sound bing' block" title="Conditional logic assessment item asking students 'Describe what will happen when the following Scratch script is run' followed by a graphic showing a 'When green flag clicked' block containing an If-Else block with the condition '7 < 5'; 'then' contains a 'start sound pop' block, while 'else' contains a 'start sound bing' block"><figcaption>Fig. 2 Sample conditional logic item</figcaption></figure>

## Decomposition

Decomposition items received mixed responses. For example, while the 20-second audio snippet shows how this participant correctly answered the following decomposition item (Fig. 3), another participant was lost over the fact that there were more than one unknown values in the equation.

<figure>
    <figcaption>Listen to the students discuss the decomposition item shown in Fig. 3:</figcaption>
    <audio
        controls
		preload="metadata"
        src="{{ site.files }}2019-07-17/2019-07-17-20-sec-snippet.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

Audio file transcript:

  Because someone already ran two. So, if we plus 3, that would equal 5. And, then add two more and that’d be 7. And, since it’s 7 miles and it’s a team, they would win because it equals up to 7.

<figure><img src="{{ site.images }}blog/2019-07-17-figure-3.png" alt="Decomposition assessment item asking students 'You, Ariel, and Samir completed a 7-mile race as a team. You ran 2 of the 7 miles. How many miles could Juan and Samir have each run?' followed by a graphic showing a 2-column table with the headings 'One possible set of distances' and 'Another possible set of distances', each with the same 3 statements below them: Ariel ran ___ miles, Samir ran ___ miles. Together, they ran 7 miles. The first column has a number scratched out and the number 3 written in for Ariel's distance and 2 written in for Samir's distance. The second column has 4 written in for Ariel's distance and 1 written in for Samir's distance." title="Decomposition assessment item asking students 'You, Ariel, and Samir completed a 7-mile race as a team. You ran 2 of the 7 miles. How many miles could Juan and Samir have each run?' followed by a graphic showing a 2-column table with the headings 'One possible set of distances' and 'Another possible set of distances', each with the same 3 statements below them: Ariel ran ___ miles, Samir ran ___ miles. Together, they ran 7 miles. The first column has a number scratched out and the number 3 written in for Ariel's distance and 2 written in for Samir's distance. The second column has 4 written in for Ariel's distance and 1 written in for Samir's distance."><figcaption>Fig. 3 Sample decomposition item</figcaption></figure>

## Other findings

The cognitive interview also revealed that the phrasing of items designed to assess CT in the context of math may need to be distinguished from typical math word problems. The reason is that, when students see a problem that involves math, they are inclined to directly solve the math instead of providing the steps (decomposing) to solve the problem. Therefore, distinctly-worded CT items may be more efficient in prompting students to use computational thinking during problem-solving.

## Conclusion

Please note that the aforementioned assessment items are only in their “beta versions.” The findings of this study will be used by researchers on this project to revisit, redesign, and/or revise these items before large-scale administration in the following years. If you have any questions or concerns, please feel free to contact us for more details.

_Acknowledgement: CTRL thanks Dr. Brian Douglas Gane (Visiting Research Assistant professor at UIC), Dr. James Pellegrino (Distinguished Professor at UIC), and Noor Elagha (doctoral student at UIC) for providing support to this study._
