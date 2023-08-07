//Main Vars:

var TextSizeRatio;
//Game Vars:

var SnakeGame;
var Asteroids;
var TheColorMachine;
var SnakePic;
var AsteroidsPic;
var TheColorMachinePic;



function preload() {
    
    /*SnakePic = loadImage("Pics/SnakePic.png");

    AsteroidsPic = loadImage("Pics/AsteroidsPic.png");

    TheColorMachinePic = loadImage("Pics/TheColorMachine.png");*/
}




function CreateButton(Name, StageName, Mobile, X, Y, Image, Site) {

    Name = createSprite(X, Y, 100, 100);
  
    Name.addImage(Image);
  
    Name.onMouseReleased = function() {

        window.location.href = Site;
    }

    Name.onMouseOver = function() { cursor(HAND) };
    Name.onMouseOut = function() { cursor(ARROW) };

    if(Mobile == "√") text(StageName + " " + "√", X, Y + 75);

    if(Mobile != "√") text(StageName, X, Y + 75);
}


function setup() {
    createCanvas(windowWidth, windowHeight);

    TextSizeRatio = Math.min(width, height);

    Div = createDiv("Updates:<br><br>Added a color picker to a Color Machine.");
    Div.style('font-size', TextSizeRatio / 30 + 'px');
    Div.style("text-align", "center");
    //Div.style("margin", "25px");
    Div.position(width / 2, 150);
    Div.center("horizontal");


    CreateButton(SnakeGame, "Snake Game", "X", width / 5, 420, loadImage("Pics/SnakePic.png"), "https://tybreen.github.io/Snake-Game/");

    CreateButton(Asteroids, "Asteroids", "X", (width / 5) * 2, 420, loadImage("Pics/AsteroidsPic.png"), "https://tybreen.github.io/Asteroids/");

    CreateButton(TheColorMachine, "The Color Machine", "√", (width / 5) * 3, 420, loadImage("Pics/TheColorMachine.png"), "https://tybreen.github.io/The_Color_Machine/");

    Uno = createSprite((width / 5) * 4, 420, 100, 100);

    Uno.shapeColor = color("white");
  
    Uno.onMouseReleased = function() {

        window.location.href = "https://tybreen.github.io/Uno/";
    }

    Uno.onMouseOver = function() { cursor(HAND) };
    Uno.onMouseOut = function() { cursor(ARROW) };

    

}


function draw() {
    
    background(255);

    drawSprites();

    textSize(TextSizeRatio / 7);

    textAlign(CENTER);

    fill("green");

    text("Tyler's Games", width / 2, 110);

    textSize(TextSizeRatio / 40);

    fill(0);

    text("√ = Mobile Friendly", width / 2, 20);

    //line(width / 2, 0, width / 2, height);

    text("Snake Game", width / 5, 495);
    text("Asteroids", (width / 5) * 2, 495);
    text("The Color Machine" + " " + "√", (width / 5) * 3, 495);
    text("Uno " + "√", (width / 5) * 4, 420 + 75);

    noStroke();    

    fill("red");
    rect((width / 5) * 4 - 50, 370, 50, 50);

    fill("blue");
    rect((width / 5) * 4, 370, 50, 50);

    fill("green");
    rect((width / 5) * 4, 420, 50, 50);

    fill("yellow");
    rect((width / 5) * 4 - 50, 420, 50, 50);

    textSize(30);
    fill("black")
    text("Uno", (width / 5) * 4, 430);




    



}