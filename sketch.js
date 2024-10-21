let spunch;
let yodel;
let ed, bobert;
let hasplayed = false;

function preload() {
  spunch = loadSound("sponchbob.mp3");
  yodel = loadSound("yodel.mp3");
  bobert = loadImage("https://media.tenor.com/H6fgolY_XXoAAAAe/spongebob-angry.png");
  ed = loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU09KrN5MvTrgWwLB76v_5ZJCU2tV4xpzWYgJhhyL5LcwPhNl2l60OH_qADU5M3wosirE&usqp=CAU");
}

function setup() {
  createCanvas(600, 500);
  background(100);
  image(ed,0,0,600,500);
  image(bobert,0,0,600,100);
} 

function draw() {
  m = millis();
  if(m > 4000)
    {
      fill('yellow');
      ellipse(600/2,500/2,100); 
    }

  if(hasplayed == !true){
   spunch.play();
    //yodel.play()
    hasplayed = true;
  }
}

//ellipse (x,y,size) x++ to move it
//exensions - p5js.vscode
//ctrl+shift+p
//create p5js project