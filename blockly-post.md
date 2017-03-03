
<style>
iframe {border:none;}
.framed-demo {
  display: block;
  width: calc(100% - 44px);
  height: calc((100vw - 304px)*12/16);
  margin-left: auto;
  margin-right: auto;
  margin-top: 22px;
  margin-bottom: 22px;
  max-width: 960px;
  max-height: 540px;
}
</style>

![](https://lh3.googleusercontent.com/-V3U254SXl9-Q0WD61bg8krSWqhYLC9SyKLsMRqVUHz_GGqEzo5mJCJf5dApo9X2-GVaDoncacSQZtBxocPr3Drd_BgT4w=s1376)

In an effort to survey the landscape of programming environments suitable for early Computer Science learning, we turn our attention this week to Google’s [Blockly](https://developers.google.com/blockly/).  Blockly is a unique proposition in this space as it is not a full fledged programming environment but instead a library for building visual programming editors and applications.  As Google states in the documentation, Blockly is for developers. Blockly apps are for students.

<!— excerpt —>

For users, Blockly looks very similar to other block-based programming environments.  Programs are constructed by dragging interlocking blocks together on a workspace canvas similar to other environments such as Scratch, Snap, Tinker. In its most basic implementation, Blockly can be used an drop-in alternative to any of these.  Below is a fully working Blockly workspace.

<iframe src="blockly.html" class="framed-demo" scrolling="no"></iframe>

What separates Blockly from other offerings is that, while it can function as a standalone programming environments, it a library by which you can build your own custom programming environment.  Blockly exposes an application programming interface (API) by which a developer constructs Blocky applications that can be completely customized to particular needs.  This allows not only the creation of custom blocks coded to perform specific tasks, but also the entire editor and workspace that a user will see.

In our STEM+C project, where the focus is on integration of computer science into math curriculum, this level of customization provides the opportunity to ensure that math concepts are equally represented in computer science constructs.  In the following workspace, we designed a custom Fraction block that allows for an intuitive representation of a fractional number using the numerator and denominator.  With this block, students can use fractions natively in the context of a program they are developing.

<iframe src="blockly-fractions.html" class="framed-demo" scrolling="no"></iframe>

// KATIE: Do you want to add something about your algorithm here?
// I took these screenshots of a solution that we could use.

There are a couple of other features of Blockly that make it a strong contender in the educational space.  First, it is cross-platform, meaning that applications built with the library can run in web browsers and natively on Android and iOS devices.  This addresses concerns we had in a previous [post]() about the Apple’s new Swift Playgrounds, an exclusive iPad application.  Next, Blockly is open source, so the complete source code is available for download and use.  This can ensure that the any applications developed with the library can continue to work even if the Blockly project is abandoned.  Finally, Blockly produces exportable code, that is programs written in blocks can be translated into text-based programming languages such as Javascript or Python.  Developers can even show the block and text-based programs side-by-side (as we have done in our examples).  This can help provide a smooth transition between languages and address perceptions of block-based languages not being "real programming".

These might be some of the reasons why ogranizations such as code.org and 'made with code', have chosen  Blockly for their programming environments for their computer science education efforts.

There is another proposition that makes Blockly extremely compelling for curriculum developers, educators and students and it the ability to embed code editors inline with instructional materials (as we have done in this post).  The flexibility and customization provides unique opportunities to allow students to progress through lessons in a highly-interactive way.  For example, the block library could expand over a series of activities in a single lesson.  Perhaps an debugging activity using multiple editors could provide the ability to progress step-by-step through a crashing program towards getting in to work.  Each bug could be detailed in rich text and a live editor could allow students to see the effects of their corrections.

Blockley is a formidable challenger in the every increasing options in early computer science education.  With backing from one of the world's largest technology company and a list of high-profile adopters, it has the pedigree that would make it a sensible choice for any new initiatives.  Even with drawback that Blockley applications can be complex and require a high level of proficiency in programming to develop them, the results of those efforts represent a great opportunity for students.
