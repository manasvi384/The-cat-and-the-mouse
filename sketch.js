var tom, tomImg1, tomImg2;
var jerry, jerryImg1, jerryImg2;
var garden, gardenImg;

function preload() {
    //load the images here
    tomImg1 = loadImage("images/cat1.png");
    tomImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    tomImg3 = loadAnimation("images/cat4.png");
    jerryImg1 = loadImage("images/mouse1.png");
    jerryImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    jerryImg3 = loadAnimation("images/mouse4.png");
    gardenImg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    garden = createSprite(800, 500)
    garden.addImage(gardenImg)
    garden.scale=1; 
    //create tom and jerry sprites here
tom = createSprite(850, 700);
tom.addImage(tomImg1);
tom.scale = 0.15;
jerry = createSprite(380, 700);
jerry.addImage(jerryImg1);
jerry.scale = 0.1;
jerry.addAnimation("mouseTeasing", jerryImg2);
tom.addAnimation("TomWalking", tomImg2);
tom.addAnimation("tomHappy", tomImg3);
jerry.addAnimation("jerryHappy", jerryImg3);


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if(tom.x-jerry.x < (tom.width - jerry.width)/2){
    jerry.changeAnimation("jerryHappy", jerryImg3);
    tom.changeAnimation("tomHappy", tomImg3);
    tom.velocityX = 0;
    tom.x = 500;
    console.log('check');
}
keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyDown("LEFT")){
    jerry.changeAnimation("mouseTeasing", jerryImg2);
    tom.velocityX = -2;
    tom.changeAnimation("TomWalking", tomImg2);
}

}


