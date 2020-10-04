var nodes = [];
var canvas;

const INT_MAX = 100000;
const N_NODES = 50;
var nodecount = 0;
function setup() {
  createCanvas(480,480);
  // canvas.mousePressed(addPoint);
  makeGraph(nodes);
 
  // button = createButton("Clear");
  // button.mousePressed(clearPoints);
}

// function clearPoints(){
//   points.pop();
// }

// function addPoint(){
//   nodes.push(new Point(mouseX,mouseY, nodecount++));
// }

function edgeComperator(a,b){
  return a.distSq - b.distSq;
}

function MSTKruskal(nodes){
  var edges = [];
  for(var i=0; i<nodes.length;i++){
    for(var j=0;j<nodes.length;j++){
      if(nodes[i].id < nodes[j].id){
        edges.push(new Edge(nodes[i],nodes[j]));
        // console.log(edges);
      }
    }
  }
  var grouping = new DisjointSet(edges.length);
  // console.log(edges)
  edges.sort(edgeComperator);
  // console.log(edges)
  for(var i=0;i<edges.length;i++){
    if(grouping.find(edges[i].a.id) != grouping.find(edges[i].b.id)){
      edges[i].a.addEdge(edges[i].b);
      grouping.union(edges[i].a.id, edges[i].b.id);
    }
  }
}

function makeGraph(nodes){
  var nodeCount = 0;
  // var nodes = [];
  for(var i=0;i<N_NODES;i++){
    nodes.push(new Point(random(width), random(height), nodeCount++));
  }
  MSTKruskal(nodes);
}


function draw() {
  background(231);
  // console.log(points.length);
  for(var i=0;i<nodes.length;i++){
    nodes[i].edges = [];
    nodes[i].wander();
  }
  MSTKruskal(nodes);
  for (var i=0;i<nodes.length;i++) {
    nodes[i].show();
  }
}

// function mouseClicked()
// {
//   makeGraph(nodes);  
// }