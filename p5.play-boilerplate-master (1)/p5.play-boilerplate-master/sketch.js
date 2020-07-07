var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
  createCanvas(1600,400);

  roof=new Roof(800,100,200,20)

  bob1=new Bob(800,300,20);
  rope1=new Rope(bob1.body, roof.body, -bobDiameter*2, 0);

  bob2=new Bob(845,300,20);
  rope2=new Rope(bob2.body, roof.body, -bobDiameter*2, 0);
  
  bob3=new Bob(755,300,20);
  rope3=new Rope(bob3.body, roof.body, -bobDiameter*2, 0);

  bob4=new Bob(700,300,20);
  rope4=new Rope(bob4.body, roof.body, -bobDiameter*2, 0);

  bob5=new Bob(890,300,20);
  rope5=new Rope(bob5.body, roof.body, -bobDiameter*2, 0);
}

function draw() {
  background(255,255,255);

  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
}