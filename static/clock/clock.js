var today;
let resource;
function preload() {
    resource = loadFont("./clock/resource.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  today = new Date();
  today.setHours(0,0,0,0);
  textFont(resource);
}

function draw() {
  var now = new Date();
  var fraction = (now - today) / 86400000;

  background(0);

  fill(255);
  rect(0, 0, fraction * width, height);
  fill(0);
  stroke(255);
  strokeWeight(3);
  var timeString = `now is today x ${fraction.toString().substring(0, 7)}`;
  textSize(width/40);
  let bbox = resource.textBounds(timeString, width/2 - 0.5 * textWidth(timeString), height/2, width/40); 
  fill(255);
  rect(bbox.x - 5, bbox.y - 7.5, bbox.w + 10, bbox.h + 15);
  fill(0);
  text(timeString, width/2 - 0.5 * textWidth(timeString), height/2);
  noStroke();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
