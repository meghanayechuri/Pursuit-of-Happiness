

/**********************  

      Set up the page 

************************/
var margin = {top: 10, right: 20, bottom: 10, left: 80};
var width = 1300 - margin.left - margin.right;
var height = 700 - margin.top - margin.bottom;

// Create SVG
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");
  
  // X and Y range + domain 
  var x = d3.scaleLinear().range([0, 750]);
  var y = d3.scaleLinear().range([750, 0]);
  
  x.domain([0, 50]);
  y.domain([0, 50]);
  

    /******************************
  
   Array for setting up  the polygons.

   Contains: 
    name: polygon + #

    points: location where shapes are on screen
      Generally (though not always):
      (x1, y1): bottom left
      (x2, y2): top left
      (x3, y3): top right
      (x4, y4): bottom right

    color: the color to be used (hue chosen by category)

    stressori: stressor + some number; used to print the text on the shape, more than one of these indicates the stressor is printed on multiple lines

    ID: category the stressor belongs to

    stressorID: full name of stressor

    xlab, ylab, dx, dy: stores location of text 
  
  *******************************/

  var arrayOfPolygons =  [
  {
    "name": "polygon 1",
    "points":[
      {"x":5, "y":43},
        {"x":11,"y":48},
        {"x":23,"y":49}, 
        {"x":20,"y":42} 
    ],
    "color": "#0894a1",
    "stressor": "School-Social Life Balance",
    "ID": "Connection",
    "stressorID": "School-Social Life Balance",
    //Label properties 
    "xlab": 165,
    "ylab": 30,
    "dx": -30,
    "dy": "3em"
  },{
    "name": "polygon 2",
    "points":[
      {"x":5, "y":43},
        {"x":20,"y":42},
        {"x":26,"y":37}, 
        {"x":18,"y":33} 
    ],
    "color": "#25A1AC",
    "stressor": "Homesickness",
    "ID": "Connection",
    "stressorID": "Homesickness",
    //label properties 
    "xlab": 300,
    "ylab": 120,
    "dx": -100,
    "dy": "3em"
  },{
    "name": "polygon 3",
    "points":[
      {"x":10, "y":27},
        {"x":5,"y":43},
        {"x":18,"y":33}, 
        {"x":17,"y":28} 
    ],
    "color": "#43AEB7",
    "stressor": "Language Barrier &",
    "stressor2": "Cultural Differences",
    "ID": "Connection",
    "stressorID": "Language Barrier and Cultural Differences",
    //label properties 
    "xlab": 75,
    "ylab": 105,
    "dx": 55,
    "dy": "11em",
    "dy2": "12em"
  },{
    "name": "polygon 4",
    "points":[
      {"x":5, "y":16},
        {"x":10,"y":27},
        {"x":17,"y":28}, 
        {"x":15,"y":15} 
    ],
    "color": "#61BBC3",
    "stressor": "Social Life",
    "stressor2": "Improvement",
    "stressorID": "Social Life Improvement",
    "ID": "Connection",
    //label properties 
    "xlab": 150,
    "ylab": 345,    
    "dx": -25,
    "dy": "6em",
    "dy2": "7em"
  },{
    "name": "polygon 5",
    "points":[
      {"x":20, "y":42},
        {"x":23,"y":49},
        {"x":27,"y":49.5}, 
        {"x":29,"y":41},
        {"x":26,"y":37} 
    ],
    "color": "#7FC8CE",
    "stressor": "Relationship",
    "stressor2": "Difficulties",
    "ID": "Connection",
    "stressorID": "Relationship Difficulties",
    //label properties 
    "xlab": 345,
    "ylab": 31,    
    "dx": -15,
    "dy": "4em",
    "dy2": "5em"
  },{
    "name": "polygon 6",
    "points":[
      {"x":18, "y":33},
        {"x":29,"y":41},
        {"x":31,"y":32}, 
        {"x":23,"y":29}
    ],
    "color": "#9DD5D9",
    "stressor": "Extracurriculars",
    "ID": "Connection",
    "stressorID" : "Extracurriculars",
    //label properties 
    "xlab": 435,
    "ylab": 135,    
    "dx": -100,
    "dy": "8em"
  },{
    "name": "polygon 7",
    "points":[
      {"x":14.3, "y":15},
        {"x":18,"y":33},
        {"x":23,"y":29},
        {"x":26,"y":26}, 
        {"x":20,"y":16}
    ],
    "color": "#BBE2E5",
    "stressor": "Loneliness",
    "ID": "Connection",
    "stressorID": "Loneliness",
    //label properties 
    "xlab": 275,
    "ylab": 255,    
    "dx": -15,
    "dy": "10em"
  },{
    "name": "polygon 8",
    "points":[
      {"x":14.3, "y":15},
        {"x":20,"y":16},
        {"x":26,"y":12}, 
        {"x":19,"y":7}
    ],
    "color": "#47AB6C",
    "stressor": "Deadlines",
    "ID": "Commitments",
    "stressorID": "Deadlines",
    //label properties 
    "xlab": 300,
    "ylab": 510,    
    "dx": -30,
    "dy": "4em"
  },{
    "name": "polygon 9",
    "points":[
      {"x":29, "y":41},
        {"x":27,"y":49.5},
        {"x":37,"y":47.5}, 
        {"x":38.1,"y":40}
    ],
    "color": "#61B781",
    "stressor": "Time Management",
    "ID": "Commitments",
    "stressorID": "Time Management",
    //label properties 
    "xlab": 405,
    "ylab": 7.5,    
    "dx": 30,
    "dy": "6em"
  },{
    "name": "polygon 10",
    "points":[
      {"x":23, "y":29},
        {"x":31,"y":32},
        {"x":33.6,"y":24.2},
        {"x":31,"y":20}
    ],
    "color": "#7CC396",
    "stressor": "Academic",
    "stressor2": "Performance",
    "ID": "Commitments",
    "stressorID": "Academic Performance",
    //label properties 
    "xlab": 465,
    "ylab": 270,    
    "dx": -60,
    "dy": "5em",
    "dy2": "6em"
  },{
    "name": "polygon 11",
    "points":[
      {"x":20, "y":16},
        {"x":25.7,"y":26},
        {"x":31,"y":20}, 
        {"x":26,"y":12}
    ],
    "color": "#97CFAB",
    "stressor": "Homework &",
    "stressor2": "Assignment",
    "stressor3": "Management",
    "ID": "Commitments",
    "stressorID": "Homework and Assignment Management",
    //label properties 
    "xlab": 385.5,
    "ylab": 360,    
    "dx": -45,
    "dy": "8em",
    "dy2": "9em",
    "dy3": "10em"
  },{
    "name": "polygon 12",
    "points":[
      {"x":31, "y":32},
        {"x":29,"y":41},
        {"x":38.1,"y":40}, 
        {"x":40,"y":32}
    ],
    "color": "#B2DBC0",
    "stressor": "Work-Study",
    "stressor2": "Balance",
    "ID": "Commitments",
    "stressorID": "Work-Study Balance",
    //label properties 
    "xlab": 435,
    "ylab": 135,    
    "dx": 40,
    "dy": "5em",
    "dy2": "6em"
  },{
    "name": "polygon 13",
    "points":[
      {"x":26, "y":12},
        {"x":33.6,"y":24.2},
        {"x":36,"y":17}, 
        {"x":36.5,"y":7}
    ],
    "color": "#CDE8D6",
    "stressor": "Fear of",
    "stressor2": "Failure",
    "ID": "Commitments",
    "stressorID": "Fear of Failure",
    //label properties 
    "xlab": 505,
    "ylab": 387,    
    "dx": -50,
    "dy": "9em",
    "dy2": "10em"
  },{
    "name": "polygon 14",
    "points":[
      {"x":36, "y":17},
        {"x":31,"y":32},
        {"x":40,"y":32}, 
        {"x":44,"y":24}
    ],
    "color": "#f0a515",
    "stressor": "Healthy Eating",
    "ID": "Care",
    "stressorID": "Healthy Eating",
    //label properties 
    "xlab": 465,
    "ylab": 270,    
    "dx": 50,
    "dy": "6em",
  },{
    "name": "polygon 15",
    "points":[
      {"x":43, "y":45},
        {"x":37,"y":47.5},
        {"x":46,"y":50}, 
        {"x":61,"y":42}
    ],
    "color": "#f6c25f",
    "stressor": "Illness",
    "ID": "Care",
    "stressorID": "Illness",
    //label properties 
    "xlab": 555,
    "ylab": 38,    
    "dx": 110,
    "dy": "1em"
  },{
    "name": "polygon 16",
    "points":[
      {"x":39.75, "y":33},
        {"x":38.1,"y":40},
        {"x":37,"y":47.5},
        {"x":43,"y":45}, 
        {"x":49,"y":36}
    ],
    "color": "#f7ce7f",
    "stressor": "Staying Active",
    "ID": "Care",
    "stressorID": "Staying Active",
    //label properties 
    "xlab": 572,
    "ylab": 150,    
    "dx": 20,
    "dy": "1em"
  },{
    "name": "polygon 17",
    "points":[
      {"x":44, "y":24},
        {"x":40,"y":32},
        {"x":39.75,"y":33},
        {"x":49,"y":36}, 
        {"x":53,"y":29}
    ],
    "color": "#fae2b3",
    "stressor": "Difficulty Sleeping",
    "ID": "Care",
    "stressorID": "Difficulty Sleeping",
    //label properties 
    "xlab": 600,
    "ylab": 270,    
    "dx": 45,
    "dy": "2em"
  },{
    "name": "polygon 18",
    "points":[
      {"x":36.5, "y":7},
        {"x":36,"y":17},
        {"x":44,"y":24}, 
        {"x":52,"y":14}
    ],
    "color": "#f49484",
    "stressor": "Personal Finance",
    "ID": "Career",
    "stressorID": "Personal Finance",
    //label properties 
    "xlab": 540,
    "ylab": 495,    
    "dx": 45,
    "dy": "2em"
  },{
    "name": "polygon 19",
    "points":[
      {"x":53, "y":29},
        {"x":43,"y":45},
        {"x":61,"y":42}, 
        {"x":60,"y":28}
    ],
    "color": "#ed553b",
    "stressor": "Public Speaking",
    "stressor2": "& Presentations",
    "ID": "Career",
    "stressorID": "Public Speaking and Presentations",
    //label properties 
    "xlab": 645,
    "ylab": 75,    
    "dx": 120,
    "dy": "8em",
    "dy2": "9em"
  },{
    "name": "polygon 20",
    "points":[
      {"x":44,"y":24},
        {"x":53,"y":29},
        {"x":60,"y":28}, 
        {"x":52,"y":14}
    ],
    "color": "#f06d57",
    "stressor": "Career Anxiety",
    "ID": "Career",
    "stressorID": "Career Anxiety",
    //label properties 
    "xlab": 795,
    "ylab": 315,    
    "dx": -60,
    "dy": "7em"
  }
];

var allStressors = ["School-Social Life Balance", "Homesickness", "Relationship Difficulties",
"Time Management", "Illness", "Staying Active", "Work-Study Balance", "Public Speaking and Presentations",
"Language Barrier and Cultural Differences", "Social Life Improvement", "Loneliness", "Deadlines", 
"Extracurriculars", "Academic Performance", "Healthy Eating", "Difficulty Sleeping", "Fear of Failure", 
"Career Anxiety", "Homework and Assignment Management", "Personal Finance"];
  
/*******************************

    CREATE THE POLYGONS

    Note: .on("click") added; has two functions:
      1. turn the shape to grey when clicked on
      2. saves the name of the stressor clicked on to an array

********************************/

// Get the selected stressors from window URL 
var selectedStressorsArr = [];
var id = window.location.href.split('_');
console.log(id);
var len = id.length;
for(var i =0; i < len-1; i++) {
    //console.log(i);
    var current = id.pop().replace(/%20/g, " ");
    //If the current stressor is NOT already in the list and it is a stressor, add it 
    if (selectedStressorsArr.indexOf(current) <= -1 && allStressors.indexOf(current) > -1) {
        selectedStressorsArr[i] = current;
    }
}
console.log(selectedStressorsArr);

/*
    Filter the data by only those polygons that were selected by the user
*/
filteredData = arrayOfPolygons.filter(function (d) {
    return selectedStressorsArr.indexOf(d.stressorID) > -1;
});
console.log(filteredData);


/* 
    Now, render polygons. If selected, color in the polygon. If not, make 
    it grey and allow it to be clicked on 
*/
  var g = svg.selectAll("g")
    .data(arrayOfPolygons)
    .enter().append("g");
  
  g.append("polygon")
  .attr("class", "polygon")
  .data(arrayOfPolygons)
    .attr("points",function(d) { 
        return d.points.map(function(d) {
            return [x(d.x),y(d.y)].join(",");
        }).join(" ");
    })
    .attr("fill", function(d) {
        var color = "lightgrey";
        if (selectedStressorsArr.indexOf(d.stressorID) > -1) {
            color = d.color;
        }
        return color;
    })
    .on("click", function(d){
        if (selectedStressorsArr.indexOf(d.stressorID) <= -1) {
            d3.select(this).attr("fill", function (d) {return d.color;});
            selectedStressorsArr.push(d.stressorID);
            console.log(selectedStressorsArr); 
        }
    });
    
   g.append("text")
    .attr("id", "polygon-text")
    .data(arrayOfPolygons)
    .attr("x", function(d){return d.xlab})
    .attr("y", function(d){return d.ylab})
    .attr("dx", function(d){return d.dx})
    .attr("dy", function(d){return d.dy})
    .attr("fill", "#ffffff")
    .text(function(d) {return d.stressor});
  
  //For shapes that need a second line of text
   g.append("text")
    .attr("id", "polygon-text")
    .data(arrayOfPolygons)
    .attr("x", function(d){return d.xlab})
    .attr("y", function(d){return d.ylab})
    .attr("dx", function(d){return d.dx})
    .attr("dy", function(d){return d.dy2})
    .attr("fill", "#ffffff")
    .text(function(d) {return d.stressor2}); 

    //For shapes that need a third line of text
   g.append("text")
    .attr("id", "polygon-text")
    .data(arrayOfPolygons)
    .attr("x", function(d){return d.xlab})
    .attr("y", function(d){return d.ylab})
    .attr("dx", function(d){return d.dx})
    .attr("dy", function(d){return d.dy3})
    .attr("fill", "#ffffff")
    .text(function(d) {return d.stressor3}); 


/*************************************************
    CREATE THE LEGENDS
  legend numbers go from top left to bottom right
**************************************************/
//adding legends
//width and height of each rectangle
var w = 120, h = 175;
//legend 1
var legend1 = svg.append("defs").append("svg:linearGradient").attr("id", "gradient").attr("x1", "100%").attr("y1", "0%").attr("x2", "100%").attr("y2", "100%").attr("spreadMethod", "pad");
legend1.append("stop").attr("offset", "0%").attr("stop-color", "#f9ccc5").attr("stop-opacity", 1);
legend1.append("stop").attr("offset", "100%").attr("stop-color", "#ed553b").attr("stop-opacity", 1);
//append rectangle legend to svg
g.append("rect").attr("width", w - 100).attr("height", h - 100).style("fill", "url(#gradient)").attr("transform", "translate(875,-10)" + "rotate(90)");
//label for legend 1
g.append("text")
  .attr("x", 800)
  .attr("y", 28)
  .text("commitment")
  .attr("id", "legend-text");
//legend 2
var legend2 = svg.append("defs").append("svg:linearGradient").attr("id", "gradient2").attr("x1", "100%").attr("y1", "0%").attr("x2", "100%").attr("y2", "100%").attr("spreadMethod", "pad");
legend2.append("stop").attr("offset", "0%").attr("stop-color", "#fae2b3").attr("stop-opacity", 1);
legend2.append("stop").attr("offset", "100%").attr("stop-color", "#f0a515").attr("stop-opacity", 1);
svg.append("rect").attr("width", w - 100).attr("height", h - 100).style("fill", "url(#gradient2)").attr("transform", "translate(975,-10)" + "rotate(90)");
//label for legend 2
svg.append("text")
  .attr("x", 900)
  .attr("y", 28)
  .text("care")
  .attr("id", "legend-text");
//legend 3
var legend3 = svg.append("defs").append("svg:linearGradient")
  .attr("id", "gradient3")
  .attr("x1", "100%")
  .attr("y1", "0%")
  .attr("x2", "100%")
  .attr("y2", "100%")
  .attr("spreadMethod", "pad");
legend3.append("stop").attr("offset", "0%").attr("stop-color", "#bbe2e5").attr("stop-opacity", 1);
legend3.append("stop").attr("offset", "100%").attr("stop-color", "#0894a1").attr("stop-opacity", 1);
svg.append("rect").attr("width", w - 100).attr("height", h - 100).style("fill", "url(#gradient3)").attr("transform", "translate(1075,-10)" + "rotate(90)");
//label for legend 3
svg.append("text")
  .attr("x", 1000)
  .attr("y", 28)
  .text("connection")
  .attr("id", "legend-text");
//legend 4
var legend4 = svg.append("defs").append("svg:linearGradient").attr("id", "gradient4").attr("x1", "100%").attr("y1", "0%").attr("x2", "100%").attr("y2", "100%").attr("spreadMethod", "pad");
legend4.append("stop").attr("offset", "0%").attr("stop-color", "#cde8d6").attr("stop-opacity", 1);
legend4.append("stop").attr("offset", "100%").attr("stop-color", "#47ab6c").attr("stop-opacity", 1);
svg.append("rect").attr("width", w - 100).attr("height", h - 100).style("fill", "url(#gradient4)").attr("transform", "translate(1175,-10)" + "rotate(90)");
//label for legend 4
svg.append("text")
  .attr("x", 1100)
  .attr("y", 28)
  .text("career")
  .attr("id", "legend-text");


/************************************************

    Setup for passing the url to the next page

*************************************************/


var button = document.getElementById("button");
console.log(button)
button.addEventListener('click', function() {
    var array = "array";
    var stressorStr = "/";
    for (i in selectedStressorsArr) {
        stressorStr += "_" + selectedStressorsArr[i];
    }
    //console.log(stressorStr);
    location.href=URL_add_parameter("imagestress.html", array, stressorStr);
    //console.log(location);
});

var buttonBack = document.getElementById("button-back");
console.log(buttonBack)
buttonBack.addEventListener('click', function() {
    var array = "array";
    var stressorStr = "/";
    for (i in selectedStressorsArr) {
        stressorStr += "_" + selectedStressorsArr[i];
    }
    //console.log(stressorStr);
    location.href=URL_add_parameter("stress_portrait.html", array, stressorStr);
    console.log(location);
});


function URL_add_parameter(url, param, value){
    var hash       = {};
    var parser     = document.createElement('a');

    parser.href    = url;

    var parameters = parser.search.split(/\?|&/);

    for(var i=0; i < parameters.length; i++) {
        if(!parameters[i])
            continue;

        var ary      = parameters[i].split('=');
        hash[ary[0]] = ary[1];
    }

    hash[param] = value;

    var list = [];  
    Object.keys(hash).forEach(function (key) {
        list.push(key + '=' + hash[key]);
    });

    parser.search = '?' + list.join('&');
    return parser.href;
};



