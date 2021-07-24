const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;


var bg ;

function preload() {
    // create getBackgroundImg( ) here
    sunrise1 = loadImage("sunrise1.png");
    sunrise2 = loadImage("sunrise2.png");
    sunrise3 = loadImage("sunrise3.png");
    sunrise4 = loadImage("sunrise4.png");
    sunrise5 = loadImage("sunrise5.png");
    sunrise6 = loadImage("sunrise6.png");
    sunset7 = loadImage("sunset7.png");
    sunset8 = loadImage("sunset8.png");
    sunset10 = loadImage("sunset10.png");
    sunset11= loadImage("sunset11.png");
    sunset12= loadImage("sunset12.png");

    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
 getBackgroundImg();


}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here
    


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var responseJson = await response.json();
    var datetime = respnseJson.datetime;

    // write code slice the datetime
    hour = datetime.slice(11,13);



    // add conditions to change the background images from sunrise to sunset
    if(hour>=0 && hour<=04){
        bg = sunset12;
     } else if(hour>=04 && hour<=05){
        bg = sunrise1;
     } else if(hour>=05 && hour<=06){
        bg = sunrise2;
     } else if(hour>=06 && hour<=07){
        bg = sunrise3;
     } else if(hour>=07 && hour<=08){
        bg = sunrise4;
     } else if(hour>=11 && hour<=14){
        bg = sunrise5;
     } else if(hour>=14 && hour<=16){
        bg = sunrise6;
     } else if(hour>=16 && hour<=18){
        bg = sunset7;
     } else if(hour>=18 && hour<=19){
        bg = sunset8;
     } else if(hour>=19 && hour<=20){
        bg = sunset10;
     } else if(hour>=20 && hour<=21){
        bg = sunset11;
     } else{
        bg = sunset12;}
      










    


    //load the image in backgroundImg variable here

}
