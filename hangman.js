window.alert("Welcome to a Javascript created Hangman!");
alert("Good Luck!");
    
//Words for the game
var words = [
 "javascript", 
 "digital",
 "laptop",
 "computer",
 "internet",
 "basketball",
 "soccer",
 "texas",
 "oklahoma",
 "mexico",
 "tacos",
 "steak",
 "italian"];


var word = words[Math.floor(Math.random() * words.length)];

// Answer array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
answerArray[i] = "_";
}

var remainingLetters = word.length;
var guessNumber = 15;

// Game loop
while (remainingLetters > 0 && guessNumber > 0) {
// Show the player their progress in the word
 alert(answerArray.join(" "));

//  Guess from the player
 var guess = prompt("Guess a letter or click Cancel to stop playing.");
 if (guess === null) {
   // a.Exit the game loop
   break;
    // Check to enter one letter
 } else if (guess.length !==1 ) {
   alert("Please enter a single letter!");
 } else {
   guess = guess.toLowerCase();
   guessNumber--;

   // Update the game w/ the guess
   for (var j = 0; j < word.length; j++) {
     if (word[j] === guess && answerArray[j] === "_") {
       answerArray[j] = guess;
       remainingLetters--;
     }
   }
 }

}
//Show the answer and congratulate the player
alert(answerArray.join(" "));

if (guessNumber > 0) {
alert("Good job! The word was" + word );
} else {
alert("Aww... maybe next time! The word was" + word );
}
  




function myFunction() {
  document.getElementById("learnMore").innerHTML = "What's the most popular sport in the world?"}