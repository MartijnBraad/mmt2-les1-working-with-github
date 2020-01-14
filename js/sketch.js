function setup() {
  // put setup code here
  createCanvas (500,500);
  background(240);
}

function draw() {
  // put drawing code here

  noStroke();
  fill(255,0,0);
  rect(50,50,50,50);

  fill(255,255,0);
  rect(150,50,50,50);

  fill(0,255,255);
  rect(250,50,50,50);

  fill(0,255,0);
  rect(350,50,50,50);

  stroke("black");
  fill(255);
  rect(50,150,50,50);

  fill(200);
  rect(150,150,50,50);

  fill(150);
  rect(250,150,50,50);

  fill(75);
  rect(350,150,50,50);
  
}