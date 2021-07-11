var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["378f1838-b7b0-4557-bdc4-a3d2c1483c23"],"propsByKey":{"378f1838-b7b0-4557-bdc4-a3d2c1483c23":{"name":"abstract_16_1","sourceUrl":"assets/api/v1/animation-library/gamelab/OEa2gEbbvs2v84AZcjbUfOw_7tVqVKJr/category_backgrounds/abstract_16.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"OEa2gEbbvs2v84AZcjbUfOw_7tVqVKJr","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/OEa2gEbbvs2v84AZcjbUfOw_7tVqVKJr/category_backgrounds/abstract_16.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

    // Keep the box in the air by moving the paddle with the left and right arrows.
var bg = createSprite(200,200);
bg.setAnimation("abstract_16_1");

var paddle = createSprite(200, 375, 50, 15);
var ball = createSprite(150, 250, 20, 20);
ball.shapeColor="white";
paddle.shapeColor= "lightpink";
var score="0";
var gameState= "serve";

//Row 1
var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";

// Row 2
var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="blue";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="blue";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
var box13 = createSprite(225, 125, 50, 50);
box13.shapeColor="blue";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="blue";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";
var score= 0;

function draw() {
  background("white");
        
  
  if(keyDown("enter")){
    ball.velocityX = 3;
    ball.velocityY = 4;
  }
  if (ball.isTouching(box1));
  createEdgeSprites();
  ball.bounceOff(rightEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(topEdge);


  paddle.x=World.mouseX;
  //display welcome text
    textSize(25);
    text("Welcome! Press Enter to start.",30,200);
  
  

  
  if(ball.isTouching(box1)){
    box1.destroy();
 score= score+1 }
  
  if(ball.isTouching(box2)){
    box2.destroy();
 score= score+1  }
  
  if(ball.isTouching(box3)){ 
    box3.destroy();
 score= score+1  }
  
  if(ball.isTouching(box4)){
    box4.destroy();
 score= score+1  }
  
   if(ball.isTouching(box5)){ 
     box5.destroy();
 score= score+1  }
  
   if(ball.isTouching(box6)) {
     box6.destroy();
 score= score+1  }
  
  if(ball.isTouching(box7)) { 
    box7.destroy();
 score= score+1  }
  
  if(ball.isTouching(box8)){
    box8.destroy();
  score= score+1 }
  // row 2 
  if(ball.isTouching(box9)){
    box9.destroy();
 score= score+1  }
  
  if(ball.isTouching(box10)){
    box10.destroy();
score= score+1   }
  
  if(ball.isTouching(box11)){ 
    box11.destroy();
 score= score+1  }
  
  if(ball.isTouching(box12)){
    box12.destroy();
score= score+1   }
  
   if(ball.isTouching(box13)){ 
     box13.destroy();
  score= score+1 }
  
   if(ball.isTouching(box14)) {
     box14.destroy();
  score= score+1 }
  
  if(ball.isTouching(box15)) { 
    box15.destroy();
  score= score+1 }
  
  if(ball.isTouching(box16)){
    box16.destroy();
 score= score+1  }
  if(gameState == "serve")
  {
    
  }
  
  if(gameState == "play")
  {
    
  }
  
  if(gameState == "end")
  {
    
  }
  
  
  ball.bounceOff(paddle);
  
  
  
  
  drawSprites();
  fill("White");
        textSize(30);
       textSize(30);
       text("score=" +score,260,30);
        

}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
