const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,platform1,platform2,polygon,slingshot;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var block11,block12,block13,block14,block15,block16,block17,block18,block19;

function preload() {
    polygon_img = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,390,1200,20)
    platform1 = new Ground(590,300,200,20);
    block1 = new Box(530,235,30,40);
    block2 = new Box(560,235,30,40);
    block3 = new Box(590,235,30,40);
    block4 = new Box(620,235,30,40);
    block5 = new Box(650,235,30,40);
    block6 = new Box(560,195,30,40);
    block7 = new Box(590,195,30,40);
    block8 = new Box(620,195,30,40);
    block9 = new Box(590,155,30,40);
    platform2 = new Ground(990,240,200,20);
    block11 = new Box(930,195,30,40);
    block12 = new Box(960,195,30,40);
    block13 = new Box(990,195,30,40);
    block14 = new Box(1020,195,30,40);
    block15 = new Box(1050,195,30,40);
    block16 = new Box(960,155,30,40);
    block17 = new Box(990,155,30,40);
    block18 = new Box(1020,155,30,40);
    block19 = new Box(990,115,30,40);

    polygon = Bodies.circle(50,200,50);
    World.add(world,polygon);

    slingshot = new SlingShot(this.polygon,{x:150,y:200});
}

function draw(){
    background("Black");
    Engine.update(engine);
    ground.display();
    platform1.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    platform2.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    slingshot.display();
    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);
}

function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
            if(keyCode === 32){
                slingshot.attach(polygon);
            }
}