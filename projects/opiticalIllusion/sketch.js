let xR, yR, w, l;
let a, b, c, d;
let rQ, gQ, bQ, color;

function setup() {
  createCanvas(600, 600);
  frameRate(3);
}

function draw() {
  background(220);
  
  
  w = 5;
  l = 600;
  yR = 0;
  
  rQ= random(220, 255);
  gQ= random(230, 255);
  bQ = random(200,255);
  
  push();
  noFill();
  strokeWeight(5);
  stroke(rQ, bQ, gQ);
  for(let a = 100; a<= 600; a += 100)
    {
      for(let b = 200; b<=600; b +=200)
        {
          quad(a,b-200,a+100, b-100, a, b, 0, b-100)
        }
    }
  pop();
  
  
  
  
  
  for( let xR = 0; xR <= 600; xR += w + 5)
  {
    push();
    stroke('rgb(195,241,195)')
    
    fill('rgb(135,135,248)');
    rect(xR, yR, w, l);
    pop();
    
  }
  
  // push();
  // noFill();
  // strokeWeight(5);
  // stroke(rQ, bQ, gQ);
  // for(let a = 100; a<= 600; a += 100)
  //   {
  //     for(let b = 200; b<=600; b +=200)
  //       {
  //         quad(a,b-200,a+100, b-100, a, b, 0, b-100)
  //       }
  //   }
  // pop();
  
  
  
      }
  


// function stripe(xR, yR, l, w){
  
//   fill('black');
//   rect(xR, yR, w, l);
