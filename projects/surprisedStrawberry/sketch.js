let eyeD, eyeD2, mouthW, browH, tilt, tilt2;
let r, g, b;
let rf, gf, bf;
let rb, gb, bb;
let ts;




function setup() {
  createCanvas(400, 400);
}

function draw(){
  //background('#E6CCFA');
  background(rb,gb,bb);
  
//strawberry
  push();
  fill(r,g,b);
  stroke(r,g,b);
  
  //curved sides
  push();
  stroke('black');
  push();
  translate(150,225)
  rotate(1);
  ellipse(0,0,190,20);
  pop();
  
  push();
  translate(250, 225);
  rotate(-1);
  ellipse(0, 0, 190, 20);
  pop();
  
  push();
  ellipse(200, 146, 203, 20)
  pop();
  pop();
  
  //strawberry body
  triangle (99,147,301,147,198,303)
  
  pop();
//strawberry end
  
  
  //hair
  push();
  fill('rgb(169,241,189)');
  stroke('green');
  triangle(130,100,190,150,150,150);
  triangle(170,150,230,150,200,90);
  triangle(210,150,250,150,270,100);
  pop();
  
  //eyes
  push();
  fill('white')
  eyeD = mouseX/20
  eyeD2 = mouseX/30
  circle(170,190,eyeD);
  circle(230,190,eyeD);
  pop();
  
  push();
  fill('black');
  circle(170,190,eyeD2);
  circle(230,190,eyeD2);
  pop();
  
  
  
  //nose
  push();
  fill(r,g,b);
  ellipse(200,210,15,10)
  pop();
  
  push();
  fill(r,g,b);
  stroke(r,g,b);
  quad(190,199,210,199,210,214,190,214,);
  pop();
  
  //mouth
  push();
  mouthW = mouseY/15
  fill('black');
  ellipse(200,240,25,mouthW);
  
  pop();
  
  
  //eyebrows
  push();
  browH = mouseY/28
  //tilt = random(0,2)
  fill('rgb(169,241,189)')
  strokeWeight(1);
  stroke('rgb(39,104,57)');
  
  push();
  
  push();
  translate(170,175-browH);
  rotate(-PI/tilt);
  arc(0,0,10,15,-1.04,1.04,CHORD)
  pop();
  
  push();
  translate(230,175-browH);
  rotate(-PI/tilt2);
  arc(0,0,10,15,-1.04,1.04,CHORD)
  pop();
  
  pop();
  
  //blush
  push();
  fill('white');
  fill(rf,gf,bf);
  stroke(rf,gf,bf);
  circle(168,210,3);
  circle(164,207,3);
  circle(172,207,3);
  
  circle(232,210,3);
  circle(228,207,3);
  circle(236,207,3);
  pop();

  //text
  fill(rf,gf,bf);
  ts = 20+mouseY/5
  textSize(ts);
  text('surprised strawberry',20,30);
 
}

function mouseClicked(){
  r = random (200,255);
  g = random (0,255);
  b = random (0,210);
  tilt = random(1.5,2);
  tilt2 = random(1,1.7)
  rb = random(200,255);
  gb = random(0,255);
  bb = random(200,255);
  
}

function mousePressed(){
  rf = random (0,255);
  gf = random (0,255);
  bf = random (0,255);
  
}