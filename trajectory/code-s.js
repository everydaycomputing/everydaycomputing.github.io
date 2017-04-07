$(function(){ // on dom ready
  console.log('hi');
  var cy = cytoscape({

    container: document.getElementById('cy'),

    boxSelectionEnabled: false,
    autounselectify: true,

    elements: {
      nodes: [
        {
          data: {
            id: '1U',
            name: '1U: Understand that a condition is a statement that can be classified as true or false. \n \n 1A: Assess truth-value of a condition.',
            href: [
              {
                text:"apple",
                link:"http://www.apple.com"
              },
              {
                text:"google",
                link:"http://www.google.com"
              },
            ]
          },
          position: {x: 0, y:0},
          classes: 'beginning unplugged'
        },
      {
        data: {
          id: '1.1U',
          name: '1.1U: Understand that a Boolean is a variable with values T or F. \n \n 1.1A: Use a Boolean variable.',
          href: ['a','b','c']
        },
        position: {x: 150, y:0},
        classes: 'advanced programming'
      },


    ], // close nodes

    edges: [
      { data: { source: '1U', target: '1.1U' } },
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
    var links = ""
    json = eval(this.data('href'));
    console.log(json);
    json.forEach(function(entry) {
      linkData = eval(entry)
      console.log(entry);
      links = links + '<li><a href="'+linkData['link']+'">'+linkData['text']+'</a></li>';
    });
    //return this.data('href');
    return links;
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
