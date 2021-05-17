const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var time;
function preload() {



}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    getBackgroundImg();
}

function draw(){
if(backgroundImg){
    background(backgroundImg);
}


    Engine.update(engine);

    text("time: "+time, 50,50)


}

async function getBackgroundImg(){

var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responseJSON =  await response.json();
var datetime = responseJSON.datetime;

hour = datetime.slice(11,13);
time = hour;
if (hour >= 04 && hour <= 06)
{
// sunrise 1
bg = "sunrise1.png"
} 
else if (hour >= 23 && hour == 0)
{
// sunrise 2
bg = "sunrise2.png"
} 
else if (hour == 0 && hour<= 03)
{
// sunset 11
bg = "sunset11.png"
} 
else 
{
// sunset 12
(bg = "sunset12.png")
}
    //load the image in backgroundImg variable here
backgroundImg = loadImage(bg);

}


