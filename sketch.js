let spunch;
let yodel;
let ed, bobert;
let hasplayed = false;
let choice;
x = 600; 
y = 500;

function preload() {
  spunch = loadSound("sponchbob.mp3");
  yodel = loadSound("yodel.mp3");
  bobert = loadImage("https://media.tenor.com/H6fgolY_XXoAAAAe/spongebob-angry.png");
  ed = loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU09KrN5MvTrgWwLB76v_5ZJCU2tV4xpzWYgJhhyL5LcwPhNl2l60OH_qADU5M3wosirE&usqp=CAU");
}

function setup() {
  createCanvas(600, 500);
  background(100);

  // Random 0 and 1
  choice = floor(random(2)); 
}

function draw() {
  let m = millis();
  if (m > 4000) {
    fill('yellow');
    ellipse(x / 2, y / 2, 100); 
  }

  if (!hasplayed) {
  if (choice === 0) {
    image(ed, 0, 0, 600, 500);  
    yodel.play();  
  } else {
    image(bobert, 0, 0, 600, 500);  
    spunch.play(); 
  }
  hasplayed = true;
}

}