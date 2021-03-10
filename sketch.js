const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var MaxDrops = 100
function preload(){
    
}

function setup(){

    var canvas = createCanvas(600,600);

    engine = Engine.create();
    world = engine.world;

    umbrella  = new UmbrellaMan(300, 350);
    
    droplets = [];

    for(var i=0; i<MaxDrops; i++){
        droplets.push(new createDrop(random(0,600),random(0,600)));
    }
}


function draw(){

    background(0);
    
    Engine.update(engine);

    umbrella.display();

    for(var i = 0; i<MaxDrops; i++){
        droplets[i].showDrop();
        droplets[i].updateY(); 
    }

}   


