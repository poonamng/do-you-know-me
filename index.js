var readlineSync=require("readline-sync");
var score=0;
var userName=readlineSync.question("may i know your name ?")
// console.log(userNastudyme)

var welcomeMsg = " Welcome " + userName + " do you know Poonam !";
console.log(welcomeMsg)

// var score=0;
function anqu(question,answer){
  var userAnswer=readlineSync.question(question);
  if (userAnswer===answer){ 
    console.log("you are right !");
    score+=1;
  }else{
    console.log("you are wrong !");
    // score-=1
  }
  console.log(" your score is",score)
  console.log("_ _ _ _ _ _ _ _")
}
anqu("what are you doing right now ? ", "study")
anqu("whare do i work ?","jaipur")
anqu("what's your name ?", "poonam")
// console.log(" your score is",score)

var question={}