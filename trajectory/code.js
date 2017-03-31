$(function(){ // on dom ready

  var cy = cytoscape({

    container: document.getElementById('cy'),

    boxSelectionEnabled: false,
    autounselectify: true,

    elements: {
      nodes: [
        {
          data: { id: '1U', name: '1U: Understand that a condition is a statement that can be classified as true or false. \n \n 1A: Assess truth-value of a condition.', href: '<li id="callout"><a href=“http://everydaycomputing.org/resource/article/ahZzfmV2ZXJ5ZGF5Y29tcHV0aW5nb3Jnci4LEgdBcnRpY2xlIgdhcnRpY2xlDAsSB0FydGljbGUiDWxpdTIwMTRtYWtpbmcM/”>Liu, Jiangjiang Lin, Cheng-Hsien Wilson, Joshua Hemmenway, David Hasson, Ethan Barnett, Zebulun Xu, Yingbo . "Making games a snap with Stencyl: a summer computing workshop for K-12 teachers." (2014). 169-174.</a></li>' },
          position: {x: 0, y:0},
          classes: 'beginning unplugged'
        },
        {
          data: { id: '2U', name: '2U: Understand that a conditional is a statement that connects a condition to a corresponding consequence or outcome. \n \n 2A: Make decisions based on conditionals.', href: '<li id="callout"><a href=“http://everydaycomputing.org/resource/article/ahZzfmV2ZXJ5ZGF5Y29tcHV0aW5nb3JncjMLEgdBcnRpY2xlIgdhcnRpY2xlDAsSB0FydGljbGUiEmZyYW5rbGluMjAxMWFuaW1hbAw/”>Franklin, Diana Conrad, Phillip Aldana, Gerardo Hough, Sarah . "Animal tlatoque: attracting middle school students to computing through culturally-relevant themes." None. (2011). 453-458.</a></li><li id="callout"><a href=“http://everydaycomputing.org/resource/article/ahZzfmV2ZXJ5ZGF5Y29tcHV0aW5nb3JncjALEgdBcnRpY2xlIgdhcnRpY2xlDAsSB0FydGljbGUiD3dlcm5lcjIwMTJmYWlyeQw/”>Werner, Linda Denner, Jill Campe, Shannon Kawamoto, Damon Chizuru . "The fairy performance assessment: measuring computational thinking in middle school." None. (2012). 215-220.</a></li><li id="callout"><a href=“http://everydaycomputing.org/resource/article/ahZzfmV2ZXJ5ZGF5Y29tcHV0aW5nb3JncjULEgdBcnRpY2xlIgdhcnRpY2xlDAsSB0FydGljbGUiFGd1emRpYWwyMDA4ZWR1Y2F0aW9uDA/”>Guzdial, Mark . "Education Paving the way for computational thinking." Communications of the ACM. (2008). 25-27.</a></li><li id="callout"><a href=“http://everydaycomputing.org/resource/article/ahZzfmV2ZXJ5ZGF5Y29tcHV0aW5nb3JnckALEgdBcnRpY2xlIgdhcnRpY2xlDAsSB0FydGljbGUiH0dyb3ZlcjoyMDE0OkFDTDoyNTkxNzA4LjI1OTE3MTMM/”>Grover, Shuchi Cooper, Stephen Pea, Roy . "Assessing Computational Learning in K-12." None. (2014). 57-62.</a></li><li id="callout"><a href=“http://everydaycomputing.org/resource/article/ahZzfmV2ZXJ5ZGF5Y29tcHV0aW5nb3JncjILEgdBcnRpY2xlIgdhcnRpY2xlDAsSB0FydGljbGUiEWJhc3UyMDE0YXNzZXNzaW5nDA/”>Basu, Satabdi Kinnebrew, John S Biswas, Gautam . "Assessing student performance in a computational-thinking based science learning environment." None. (2014). 476-481.</a></li><li id="callout"><a href=“http://everydaycomputing.org/resource/article/ahZzfmV2ZXJ5ZGF5Y29tcHV0aW5nb3JncjcLEgdBcnRpY2xlIgdhcnRpY2xlDAsSB0FydGljbGUiFmZsYXRsYW5kMjAxNXN1cHBvcnRpbmcM/”>Flatland, Robin Lim, Darren Matthews, James Vandenberg, Scott . "Supporting CS10K: A new computer science methods course for mathematics education students." None. (2015). 302-307.</a></li>' },
          position: {x: 150, y:150},
          classes: 'beginning unplugged'
        },
        {
          data: { id: '1.1U', name: '1.1U: Understand that a Boolean is a variable with values T or F. \n \n 1.1A: Use a Boolean variable.', href: '<li id="callout"><a href="http://everydaycomputing.org/resource/article/ahZzfmV2ZXJ5ZGF5Y29tcHV0aW5nb3JncjMLEgdBcnRpY2xlIgdhcnRpY2xlDAsSB0FydGljbGUiEmxpdTIwMTFpbnRyb2R1Y2luZww/">Liu, Jiangjiang Lin, Cheng-Hsien Hasson, Ethan Philip Barnett, Zebulun David . "Introducing computer science to K-12 through a summer computing workshop for teachers." (2011). 389-394.</a></li><li id="callout"><a href="http://everydaycomputing.org/resource/article/ahZzfmV2ZXJ5ZGF5Y29tcHV0aW5nb3JncjQLEgdBcnRpY2xlIgdhcnRpY2xlDAsSB0FydGljbGUiE2dyb3ZlcjIwMTVkZXNpZ25pbmcM/">Grover, Shuchi Pea, Roy Cooper, Stephen . "Designing for deeper learning in a blended computer science course for middle school students." Computer Science Education. (2015). 199-237.</a></li>' },
          position: {x: 150, y:0},
          classes: 'advanced programming'
        },
        {
          data: { id: '6bU', name: '6bU: Understand that conditional operators such as AND and OR can be used to express compound conditions. \n \n 6bA: Use conditional operators to create compound conditions in conditional statements.', href: '<li id="callout"><a href=“http://everydaycomputing.org/resource/article/ahZzfmV2ZXJ5ZGF5Y29tcHV0aW5nb3JncjMLEgdBcnRpY2xlIgdhcnRpY2xlDAsSB0FydGljbGUiEmxpdTIwMTFpbnRyb2R1Y2luZww/”>Liu, Jiangjiang Lin, Cheng-Hsien Hasson, Ethan Philip Barnett, Zebulun David . "Introducing computer science to K-12 through a summer computing workshop for teachers." None. (2011). 389-394.</a></li><li id="callout"><a href=“http://everydaycomputing.org/resource/article/ahZzfmV2ZXJ5ZGF5Y29tcHV0aW5nb3JncjQLEgdBcnRpY2xlIgdhcnRpY2xlDAsSB0FydGljbGUiE2dyb3ZlcjIwMTVkZXNpZ25pbmcM/”>Grover, Shuchi Pea, Roy Cooper, Stephen . "Designing for deeper learning in a blended computer science course for middle school students." Computer Science Education. (2015). 199-237.</a></li>' },
          position: {x: 300, y:00},
          classes: 'advanced programming'
        },
        { data: { id: '1.2U', name: '1.2U: Understand that often there are multiple conditions to be considered in a situation. \n \n 1.2A: List all the conditions that you might need to consider when solving a problem.', href: '<li id="callout"><a href=“http://everydaycomputing.org/resource/article/ahZzfmV2ZXJ5ZGF5Y29tcHV0aW5nb3JncjMLEgdBcnRpY2xlIgdhcnRpY2xlDAsSB0FydGljbGUiEmZyYW5rbGluMjAxMWFuaW1hbAw/”>Franklin, Diana Conrad, Phillip Aldana, Gerardo Hough, Sarah . "Animal tlatoque: attracting middle school students to computing through culturally-relevant themes." None. (2011). 453-458.</a></li><li id="callout"><a href=“http://everydaycomputing.org/resource/article/ahZzfmV2ZXJ5ZGF5Y29tcHV0aW5nb3JncjALEgdBcnRpY2xlIgdhcnRpY2xlDAsSB0FydGljbGUiD2FybW9uaTIwMTRlYXJseQw/”>Armoni, Michal Gal-Ezer, Judith . "Early computing education: why? what? when? who?." ACM Inroads. (2014). 54-59.</a></li>' },
        position: {x: 0, y:150},
        classes: 'intermediate unplugged'
      },
      { data: { id: '4.1U', name: '4.1U: Understand that sometimes conditions overlap, and more than one can be applicable at a time. \n \n 4.1A: Identify examples of overlapping conditions. Create and interpret conditionals that consider how conditions overlap.', href: '<li id="callout"><a href=“http://everydaycomputing.org/resource/article/ahZzfmV2ZXJ5ZGF5Y29tcHV0aW5nb3JncjMLEgdBcnRpY2xlIgdhcnRpY2xlDAsSB0FydGljbGUiEmZyYW5rbGluMjAxMWFuaW1hbAw/”>Franklin, Diana Conrad, Phillip Aldana, Gerardo Hough, Sarah . "Animal tlatoque: attracting middle school students to computing through culturally-relevant themes." None. (2011). 453-458.</a></li>' },
      position: {x: 0, y:150},
      classes: 'intermediate unplugged'
    },
    { data: { id: '3aU', name: '3aU: Understand that it may be necessary to specify an outcome to correspond with BOTH states of a condition (true and false). \n \n 3aA: Consider both states of a condition when creating conditional statements.', href: '<li id="callout"><a href=“http://everydaycomputing.org/resource/article/ahZzfmV2ZXJ5ZGF5Y29tcHV0aW5nb3JncjALEgdBcnRpY2xlIgdhcnRpY2xlDAsSB0FydGljbGUiD2FybW9uaTIwMTRlYXJseQw/”>Armoni, Michal Gal-Ezer, Judith . "Early computing education: why? what? when? who?." ACM Inroads. (2014). 54-59.</a></li>' },
    position: {x: 0, y:150},
    classes: 'beginning unplugged'
  },

  { data: { id: '4U', name: '4U: Understand that computers require all actions to be specified, and that you have to create a conditional to prompt a computer to complete each action. \n \n 4A: Make a complete list of the required actions and their associated conditions, and create the necessary conditionals.', href: '<li id="callout"><a href=“http://everydaycomputing.org/resource/article/ahZzfmV2ZXJ5ZGF5Y29tcHV0aW5nb3JncjULEgdBcnRpY2xlIgdhcnRpY2xlDAsSB0FydGljbGUiFGd1emRpYWwyMDA4ZWR1Y2F0aW9uDA/”>Guzdial, Mark . "Education Paving the way for computational thinking." Communications of the ACM. (2008). 25-27.</a></li><li id="callout"><a href=“http://everydaycomputing.org/resource/article/ahZzfmV2ZXJ5ZGF5Y29tcHV0aW5nb3JncjMLEgdBcnRpY2xlIgdhcnRpY2xlDAsSB0FydGljbGUiEmZyYW5rbGluMjAxMWFuaW1hbAw/”>Franklin, Diana Conrad, Phillip Aldana, Gerardo Hough, Sarah . "Animal tlatoque: attracting middle school students to computing through culturally-relevant themes." None. (2011). 453-458.</a></li>' },
  position: {x: 0, y:150},
  classes: 'intermediate programming'
},

  { data: { id: '5U', name: '5U: Understand that command such as if-then, if-then-else, and event handlers signal a computer to evaluate conditions and decide how to act based on conditions. \n \n 5A: Create a program with conditionals.', href: '<li id="callout"><a href=“http://everydaycomputing.org/resource/article/ahZzfmV2ZXJ5ZGF5Y29tcHV0aW5nb3JncjMLEgdBcnRpY2xlIgdhcnRpY2xlDAsSB0FydGljbGUiEmxpdTIwMTFpbnRyb2R1Y2luZww/”>Liu, Jiangjiang Lin, Cheng-Hsien Hasson, Ethan Philip Barnett, Zebulun David . "Introducing computer science to K-12 through a summer computing workshop for teachers." None. (2011). 389-394.</a></li><li id="callout"><a href=“http://everydaycomputing.org/resource/article/ahZzfmV2ZXJ5ZGF5Y29tcHV0aW5nb3JncjALEgdBcnRpY2xlIgdhcnRpY2xlDAsSB0FydGljbGUiD3dlcm5lcjIwMTJmYWlyeQw/”>Werner, Linda Denner, Jill Campe, Shannon Kawamoto, Damon Chizuru . "The fairy performance assessment: measuring computational thinking in middle school." None. (2012). 215-220.</a></li><li id="callout"><a href=“http://everydaycomputing.org/resource/article/ahZzfmV2ZXJ5ZGF5Y29tcHV0aW5nb3JncjMLEgdBcnRpY2xlIgdhcnRpY2xlDAsSB0FydGljbGUiEmZyYW5rbGluMjAxMWFuaW1hbAw/”>Franklin, Diana Conrad, Phillip Aldana, Gerardo Hough, Sarah . "Animal tlatoque: attracting middle school students to computing through culturally-relevant themes." None. (2011). 453-458.</a></li>' },
  position: {x: 0, y:150},
  classes: 'beginning programming'
},

{ data: { id: '3bU', name: '3bU: Understand conditional branching, that is, the reach of the effects of a conditional statement and how conditionals can affect the path of execution. \n \n 3bA: Use the if/else construct to divert the default pathway through a program. Create different pathways in programs using conditional statements.', href: '<li id="callout"><a href=“http://everydaycomputing.org/resource/article/ahZzfmV2ZXJ5ZGF5Y29tcHV0aW5nb3JncjMLEgdBcnRpY2xlIgdhcnRpY2xlDAsSB0FydGljbGUiEndlcm5lcjIwMTVjaGlsZHJlbgw/”>Werner, Linda Denner, Jill Campe, Shannon . "Children programming games: a strategy for measuring computational learning." ACM Transactions on Computing Education TOCE. (2015). 24.</a></li><li id="callout"><a href=“http://everydaycomputing.org/resource/article/ahZzfmV2ZXJ5ZGF5Y29tcHV0aW5nb3JncjALEgdBcnRpY2xlIgdhcnRpY2xlDAsSB0FydGljbGUiD3dlcm5lcjIwMTJmYWlyeQw/”>Werner, Linda Denner, Jill Campe, Shannon Kawamoto, Damon Chizuru . "The fairy performance assessment: measuring computational thinking in middle school." None. (2012). 215-220.</a></li><li id="callout"><a href=“http://everydaycomputing.org/resource/article/ahZzfmV2ZXJ5ZGF5Y29tcHV0aW5nb3Jnci0LEgdBcnRpY2xlIgdhcnRpY2xlDAsSB0FydGljbGUiDHBlbHVzb2ltcGFjdAw/”>Peluso, Eileen M Sprechini, Gene . "The Impact of Alice on the Attitudes of High School Students Toward Computing."</a></li><li id="callout"><a href=“http://everydaycomputing.org/resource/article/ahZzfmV2ZXJ5ZGF5Y29tcHV0aW5nb3Jnci4LEgdBcnRpY2xlIgdhcnRpY2xlDAsSB0FydGljbGUiDWxpdTIwMTRtYWtpbmcM/”>Liu, Jiangjiang Lin, Cheng-Hsien Wilson, Joshua Hemmenway, David Hasson, Ethan Barnett, Zebulun Xu, Yingbo . "Making games a snap with Stencyl: a summer computing workshop for K-12 teachers." None. (2014). 169-174.</a></li><li id="callout"><a href=“http://everydaycomputing.org/resource/article/ahZzfmV2ZXJ5ZGF5Y29tcHV0aW5nb3Jnci4LEgdBcnRpY2xlIgdhcnRpY2xlDAsSB0FydGljbGUiDWxpdTIwMTRtYWtpbmcM/”>Liu, Jiangjiang Lin, Cheng-Hsien Wilson, Joshua Hemmenway, David Hasson, Ethan Barnett, Zebulun Xu, Yingbo . "Making games a snap with Stencyl: a summer computing workshop for K-12 teachers." (2014). 169-174.</a></li>' },
position: {x: 0, y:150},
classes: 'intermediate programming'
},

{ data: { id: '6aU', name: '6aU: Understand that conditional statements can be nested or combined in different ways to accomplish complex goals. \n \n 6aA: Combine conditions using nesting or other techniques to accomplish complex goals.', href: '' },
position: {x: 0, y:150},
classes: 'intermediate unplugged'
},

{ data: { id: '7aU', name: '7aU: Understand how to evaluate and apply different approaches to combining conditional statements for particular problem.', href: '<li id="callout"><a href=“http://everydaycomputing.org/resource/article/ahZzfmV2ZXJ5ZGF5Y29tcHV0aW5nb3JncjILEgdBcnRpY2xlIgdhcnRpY2xlDAsSB0FydGljbGUiEWhhcm1zMjAxNWVuYWJsaW5nDA/”>Harms, Kyle J Rowlett, Noah Kelleher, Caitlin . "Enabling independent learning of programming concepts through programming completion puzzles." None. (2015). 271-279.</a></li>' },
position: {x: 0, y:150},
classes: 'advanced programming'
},
/*
{ data: { id: '7bU', name: '7bU: Understand that different programming/computing environments have different features/looks/input.   Recognize that conditionals can be performed by any of these.', href: 'http://js.cytoscape.org' },
position: {x: 0, y:150},
classes: 'advanced programming'
},
*/


], // close nodes
edges: [
  { data: { source: '1U', target: '1.1U' } },
  { data: { source: '1U', target: '1.2U' } },
  { data: { source: '1U', target: '2U' } },
  { data: { source: '1.1U', target: '6bU' } },
  { data: { source: '1.2U', target: '4.1U' } },
  { data: { source: '2U', target: '3aU' } },
  { data: { source: '3aU', target: '5U' } },
  { data: { source: '2U', target: '5U' } },
  { data: { source: '4.1U', target: '4U' } },
  { data: { source: '6bU', target: '4U' } },
  { data: { source: '5U', target: '3bU' } },
  { data: { source: '4U', target: '6aU' } },
  { data: { source: '6aU', target: '7aU' } },
]
},

layout: {
  name: 'breadthfirst',
  directed: true,

  padding: 100,
  //name: 'preset',
  fit: true,
  avoidOverlap: true,
  avoidOverlapPadding: 150
},

ready: function(){
  window.cy = this;
},

style:[
  { selector: 'edge',
  style: {
    'width':'10',
    'target-arrow-shape': 'triangle',
    'curve-style': 'bezier',
    'control-point-step-size': 40
  }
},
{
  selector: 'node',
  style: {
    'shape': 'rectangle',
    'text-wrap': 'wrap',
    'text-max-width': 225,
    'text-valign': 'center',
    'height': 250,
    'width': 250,
    'padding': 10,
    'label': 'data(name)'
  }
},
{
  selector: 'node.beginning',
  style: {
    'border-width': 20,
    'border-color': 'black',
    'border-style': 'solid'
  }
},
{
  selector: 'node.intermediate',
  style: {
    'border-width': 20,
    'border-color': '#64906B',
    'border-style': 'solid'
  }
},
{
  selector: 'node.advanced',
  style: {
    'border-width': 20,
    'border-color': '#C87D30',
    'border-style': 'solid',
  }
},
{
  selector: 'node.unplugged',
  style: {
    'background-color': 'lightskyblue'
  }
},
{
  selector: 'node.programming',
  style: {
    'background-color': 'white'
  }
}
]

});

// you can use qtip's regular options
// see http://qtip2.com/
/*
cy.$('*').qtip({
content: 'Hello!',
position: {
my: 'top center',
at: 'bottom center'
},
style: {
classes: 'qtip-bootstrap',
tip: {
width: 16,
height: 8
}
}
});
*/

cy.nodes().qtip({
  content: function(){
    return this.data('href');
  }
});

cy.zoom(4);

var advancedButton = document.getElementById('advanced');
advancedButton.addEventListener('click', function() {
  cy.$("*").show();
});

var intermediateButton = document.getElementById('intermediate');
intermediateButton.addEventListener('click', function() {
  cy.$("*").show();
  cy.$(".advanced").hide();
});

var beginningtButton = document.getElementById('beginning');
beginningtButton.addEventListener('click', function() {
  cy.$("*").show();
  cy.$(".advanced").hide();
  cy.$(".intermediate").hide();
});
//
//
/*
cy.on('tap', 'node', function(){
try { // your browser may block popups
window.open( this.data('href') );
} catch(e){ // fall back on url change
window.location.href = this.data('href');
}
});
*/

}); // on dom ready
