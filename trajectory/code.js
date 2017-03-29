$(function(){ // on dom ready

  var cy = cytoscape({

    container: document.getElementById('cy'),

    boxSelectionEnabled: false,
    autounselectify: true,

    elements: {
      nodes: [
        {
          data: { id: '1U', name: '1U: Understand that a condition is a statement that can be classified as true or false.', href: 'http://cytoscape.org' },
          position: {x: 0, y:0},
          classes: 'beginning unplugged'
        },
        {
          data: { id: '2U', name: '2U: Understand that a conditional is a statement that connects a condition to a corresponding consequence or outcome.', href: 'http://cytoscape.org' },
          position: {x: 150, y:150},
          classes: 'beginning unplugged'
        },
        {
          data: { id: '1.1U', name: '1.1U: Understand that a Boolean is a variable with values T or F.', href: 'http://js.cytoscape.org' },
          position: {x: 150, y:0},
          classes: 'advanced programming'
        },
        {
          data: { id: '6bU', name: '6bU: Understand that conditional operators such as AND and OR can be used to express compound conditions.', href: 'http://js.cytoscape.org' },
          position: {x: 300, y:00},
          classes: 'advanced programming'
        },
        { data: { id: '1.2U', name: '1.2U: Understand that often there are multiple conditions to be considered in a situation.', href: 'http://js.cytoscape.org' },
        position: {x: 0, y:150},
        classes: 'intermediate unplugged'
      },
      { data: { id: '4.1U', name: '4.1U: Understand that sometimes conditions overlap, and more than one can be applicable at a time.', href: 'http://js.cytoscape.org' },
      position: {x: 0, y:150},
      classes: 'intermediate unplugged'
    },
    { data: { id: '3aU', name: '3aU: Understand that it may be necessary to specify an outcome to correspond with BOTH states of a condition (true and false).', href: 'http://js.cytoscape.org' },
    position: {x: 0, y:150},
    classes: 'beginning unplugged'
  },

  { data: { id: '4U', name: '4U: Understand that computers require all actions to be specified, and that you have to create a conditional to prompt a computer to complete each action.', href: 'http://js.cytoscape.org' },
  position: {x: 0, y:150},
  classes: 'intermediate programming'
},

  { data: { id: '5U', name: '5U: Understand that command such as if-then, if-then-else, and event handlers signal a computer to evaluate conditions and decide how to act based on conditions.', href: 'http://js.cytoscape.org' },
  position: {x: 0, y:150},
  classes: 'beginning programming'
},

{ data: { id: '3bU', name: '3bU: Understand conditional branching, that is, the reach of the effects of a conditional statement and how conditionals can affect the path of execution.', href: 'http://js.cytoscape.org' },
position: {x: 0, y:150},
classes: 'intermediate programming'
},

{ data: { id: '6aU', name: '6aU: Understand that conditional statements can be nested or combined in different ways to accomplish complex goals.', href: 'http://js.cytoscape.org' },
position: {x: 0, y:150},
classes: 'intermediate unplugged'
},

{ data: { id: '7aU', name: '7aU: Understand how to evaluate and apply different approaches to combining conditional statements for particular problem.', href: 'http://js.cytoscape.org' },
position: {x: 0, y:150},
classes: 'advanced programming'
},
{ data: { id: '7bU', name: '7bU: Understand that different programming/computing environments have different features/looks/input.  Recognize that conditionals can be performed by any of these.', href: 'http://js.cytoscape.org' },
position: {x: 0, y:150},
classes: 'advanced programming'
},



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
    'text-max-width': 150,
    'text-valign': 'center',
    'height': 200,
    'width': 200,
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
    'background-color': '#eee'
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
    return 'hi<br/>bye<br/><a href="http://www.google.com">'+this.data('name')+'</a>'
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
