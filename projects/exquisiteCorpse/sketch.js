let x, y, x2, y2, y3;
let d;
let rot;
let r, g, b;
let xC, yC, rad, lR, wR;
let rB, gB, bB;
let rS, gS, bS;





function setup() {
  createCanvas(400, 600);
}

function draw() {
  background('rgb(248,248,235)');
  background(rB, gB, bB);
  
  
  //mousePressed('rB,gB,bB');
  
  r = 248
  g = 248
  b = 235
  
  // push();
  // stroke('rgb(180,220,229)');
  // line(0,200,400,200);
  // line(0,400,400,400)
  // pop();
  
  //making the stars / head
  
  
  //star 1
  push (); 
  
  x = 100
  y = 75
  d = 15
  x2 = 10
  y2 = 7
  y3 = 3
  rot = 3
  
  push();
  
  //fill('black');
  drawStar(100,25,15,10,7,3,3); //a
  drawStar(125,25,15,10,7,3,3); //b
  drawStar(60,100,15,10,7,3,3); //c
  drawStar(85,100,15,10,7,3,3); //d
  drawStar(100,180,15,10,7,3,3); //e
  
  line(95,35,65,90); //ac
  line(120,35,90,90); //bd
  line(65,110,95,170); //ce
  line(90,110,100,170); //de
  
  pop();
  //face
  
  push();
  
  //fill('white');
  fill(rS, gS, bS);
  stroke(rS, gS, bS);
  drawStar(150,120,15,10,7,3,3) //a
  drawStar(250,120,15,10,7,3,3) //b
  drawStar(200,70,15,10,7,3,3) //c
  drawStar(200,170,15,10,7,3,3) //d
  

  line(155,115,195,70)//ac
  line(205,70,245,115)//cb
  line(245,120,205,165)//bd
  line(195,165,155,120)//da
  
  pop();
  
  pop();
  
//body
  
//neck
  push();
  noStroke();
  fill('rgb(191,224,241)')
  rect(185,185,30,50)
  pop();
  
  
  push();

  
  //fill(r, g, b);
  
  fill(rB, gB, bB);
  
  noStroke()
  push();
  translate(180,210);
  rotate(PI/18)
  ellipse(0,0,25,50)
  pop();
  
  push();
  translate(220,210);
  rotate(-PI/18)
  ellipse(0,0,25,50)
  pop();
  
  pop();
  
  //shoulders
  push();
  translate(185, 235);
  rotate(PI/6);
  noStroke();
  ellipse(0, 0, 30,40);
  pop();
  
  push();
  translate(215, 235);
  rotate(-PI/6);
  noStroke();
  ellipse(0, 0, 30,40);
  pop();
  
  //body
  
  push();
  noStroke();
  rect(150, 235, 100, 150);
  pop();
  
  //body shape
  push();
  
  //fill(r, g, b);
  
  fill(rB, gB, bB);
  
  noStroke();
  
  push();
  translate(150,310);
  rotate(PI/20)
  ellipse(0,0,40,170)
  pop();

  
  push();
  translate(250,310);
  rotate(-PI/20)
  ellipse(0,0,40,170)
  pop();
  
  pop();
  
  //arms
  
  push();
  noStroke();
  translate(128,295);
  rotate(PI/5)
  ellipse(0,0,40,170)
  pop();
  
  push();
  noStroke();
  translate(270,295);
  rotate(-PI/5)
  ellipse(0,0,40,170)
  pop();
  
  //arm shape
  
  push()
  
  //fill(r, g, b);
  
  fill(rB, gB, bB);
  
  push();
  noStroke();
  translate(110,295);
  rotate(PI/5)
  ellipse(0,0,40,170)
  pop();
  
  push();
  noStroke();
  translate(288,295);
  rotate(-PI/5)
  ellipse(0,0,40,170)
  pop();
  
  pop();
  
  //hands

  push();
  
  //fingers
  push();
  fill('rgb(191,224,241)');
  drawPetals(80,360,20,40,)
  drawPetals(315,360,20,40,)
  pop();
  
  //palms
  push();
  fill('rgb(186,186,240)');
  drawCircle(80,360);
  drawCircle(315,360);
  pop();
  
  pop();
  
  
 
  
  //legs
  
  push();
  noStroke();
  rect(180,400,13,170);
  rect(200,400,13,170);
  pop();
  
  //feet
  push();
  noStroke();
  fill('rgb(191,224,241)');
  circle(187,570,15);
  circle(207,570,15);
  pop();
  
  //skirt
  push();
  noStroke();
  quad(150,380,250,380,370,580,250,580);
  quad(150,380,210,380,150,580,50,580);
  ellipse(80,570,150,50);
  ellipse(320,570,150,50);
  pop();
  

 
}

function drawStar(x,y,d,x2,y2,y3,rot){
  push();
  
  frameRate(5);
  rS = gS = bS = random(150,255);
  
  fill(rS, gS, bS);
  circle(x,y,d);
  pop();
  
  
  push();
  
  fill('white');
  //fill('rgb(248,248,235)');
  fill(rB, gB, bB);
  
  push();
  translate(x - x2,y - y2);
  rotate(PI/rot);
  noStroke();
  ellipse(0,0,d,20);
  pop();
  
  push();
  translate(x + x2, y - y2);
  rotate(-PI/rot);
  noStroke();
  ellipse(0,0,d,20);
  pop();
  
  push();
  translate(x + x2, y + y3);
  rotate(PI/rot);
  noStroke();
  ellipse(0,0,d,20);
  pop();
  
  
  push();
  translate(x - x2,y + y3);
  rotate(-PI/rot);
  noStroke();
  ellipse(0,0,d,20);
  pop();
  
  pop();
  
  
}



function drawCircle(xC,yC,rad = 15){
  circle(xC,yC, rad)
}


function drawPetals(xC,yC,lR,wR){
  
  push();
  noStroke();
  
  ellipse(xC,yC,10,60);
  
  push();
  
  translate(xC,yC);
  rotate(0.7);
  ellipse(0,0,10,60);
  pop();
  
  
  push();
  translate(xC,yC);
  rotate(1.4);
  ellipse(0,0,10,60);
  pop();
  
  push();
  translate(xC,yC);
  rotate(2.1);
  ellipse(0,0,10,60);
  pop();
  
  pop();
}

function mousePressed(){
  
  rB = gB = bB = 0
  
  
}