var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickPattern=[];
var level=0;
var h=0;


function nextSequence(){
    $("h1").text("Level "+level);  
    level++;
    var randonNumber=Math.floor(Math.random()*4);
    var randomColourChosen=buttonColours[randonNumber];
    gamePattern.push(randomColourChosen);
    $("#"+randomColourChosen).fadeOut(100).fadeIn(100);
    playSound(randomColourChosen);
    console.log(gamePattern);
}

$(".btn").click(function(){

   var userChosenColour=$(this).attr("id");
   userClickPattern.push(userChosenColour);
   playSound(userChosenColour);
   animate(userChosenColour);
   checkAnswer();
   
});

function playSound(colour){
    var audio=new Audio("sounds/"+colour+".mp3");
    audio.play();
}

function animate(colour){
   $("#"+colour).toggleClass("pressed");
   setTimeout(function() {

        $("#"+colour).toggleClass("pressed");
       
   }, 100);
   
}

$(document).keypress(function(){
    nextSequence();
    
});


function checkAnswer(){
    if(gamePattern.length<userClickPattern.length)
    {
        playSound("wrong");
        animate_wrong();
        $("h1").text("Game Over,Press any key to restart");
        userClickPattern.length=0;
        gamePattern.length=0;
        level=h=0;
    }
    else if(gamePattern[h]!==userClickPattern[h])
    {
        playSound("wrong");
        $("h1").text("Game Over,Press any key to restart");
        animate_wrong();
        userClickPattern.length=0;
        gamePattern.length=0;
        level=h=0;

    }
    else if(gamePattern.length===userClickPattern.length)    
    {
        userClickPattern.length=0;  
        h=0;
        setTimeout(function() {
            
            nextSequence();    
         }, 1000);    
    }
    else{
        h++;
    }
    
    
  } 
  function animate_wrong(){
   
    $("body").toggleClass("game-over");
   setTimeout(function() {

        $("body").toggleClass("game-over");
       
   }, 200);
  }



    
    





