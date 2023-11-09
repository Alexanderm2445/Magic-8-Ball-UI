document.getElementById('askButton').addEventListener('click', function(){
    var randomNum = Math.floor(Math.random() * 9);
    var answer;

if (randomNum === 0) {
    answer = "Yes";
} else if (randomNum === 1) {
    answer = "No";
} else if (randomNum === 2) {
    answer = "It is uncertain";
} else if (randomNum === 3) {
    answer = "Absolutely";
} else if (randomNum === 4) {
    answer = "Almost Certainly";
} else if (randomNum === 5) {
    answer = "Almost Certainly Not";
} else if (randomNum === 6) {
    answer = "With Certainty";
} else if (randomNum === 7) {
    answer = "Unclear, try again";
} else if (randomNum === 8) {
    answer = "It's foretold.";
} else {
    answer = "It's not going to happen.";
}

console.log("The magic eightball says: " + answer);

});