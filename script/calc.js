var mathArea = document.getElementById("answerArea");
var prob;
var answer;


function solve (problem) {
  answer = function(""+problem+"")();
}


function calc1 () {
  requestAnimationFrame(calc1);
  
  mathValue = mathArea1.value;
  
  if (mathValue.search("=") < 0) {
  solve();
  }

}
requestAnimationFrame(calc1);
