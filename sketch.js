var ground;
var plinko1, plinko2, plinko3, plink4, plink5, plinko6;
var particle;
var division;

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

var particles=[];
var plinkos=[];
var divisions=[];

var divisionHeight = 300;

for (var j = 0; j < particles.length; j++) {
  particles[j].display():
}
for (var k = 0;k < divisions.length; k++) {
  divisions[k].display();
}

plinko1.display();
plinko2.display();
plinko3.display();
plinko4.display();
plinko5.display();
plinko6.display();
division.display();
ground.display();
particle.display();