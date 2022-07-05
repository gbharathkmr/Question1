const prompt = require("prompt-sync")();
var words = ["Sixpep", "Mexico", "Earphones", "Laptop", "Family", "Movies"]; //Random Words
var randomNum = Math.random() * 6;
var randomArray = Math.floor(randomNum); //Random Array numbers
var score = 0;
var highscore = 0;
console.log("Test your typing speed.");
while (userInput != 4) {
  var userInput = prompt("1.New word 2.Score 3. High score 4.save and quit");
  if (userInput === "1") {
    console.log("Player input is 1");
    console.log("Your new word is " + words[randomArray] + ". Type now");

    var seconds = 0;
    var timer = setInterval(function () {
      seconds = seconds + 1;
    }, 1000);
    var new_word = prompt();
    clearInterval(timer);
    if (seconds < 2) {
      score = score + 2;
    } else if (seconds < 3) {
      score = score + 1;
    } else if (seconds > 3) {
      score = score;
    } else if (new_word != words[randomArray]) {
      score = score - 1;
    }

    console.log(
      "Time taken to type " + words[randomArray] + " is " + seconds + " seconds"
    );
  } else if (userInput === "2") {
    console.log(score);
  } else if (userInput === "3") {
    console.log(highscore);
  }
}
if (score > highscore) {
  highscore = score;
}
