var mathArea1 = document.getElementById("answerArea");
var prob1 = undefined;
var answer = 0;

function solve () {
  for (var i = 0; i < prob1.length; i += 1) {
    if(prob1[i] === 0) {answer *= 10}
    if(prob1[i] === 1) {answer =  answer *10 + 1}
    if(prob1[i] === 2) {answer =  answer *10 + 2}
    if(prob1[i] === 3) {answer =  answer *10 + 3}
    if(prob1[i] === 4) {answer =  answer *10 + 4}
    if(prob1[i] === 5) {answer =  answer *10 + 5}
    if(prob1[i] === 6) {answer =  answer *10 + 6}
    if(prob1[i] === 7) {answer =  answer *10 + 7}
    if(prob1[i] === 8) {answer =  answer *10 + 8}
    if(prob1[i] === 9) {answer =  answer *10 + 9}
    
    
  }
}


function calc1 () {
  requestAnimationFrame(calc1);
  
  prob1 = mathArea1.value.split("");

}
requestAnimationFrame(calc1);
