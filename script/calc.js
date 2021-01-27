var mathArea = document.getElementById("answerArea");
var someMath;
var answer;

function solve(math){
    return Function('return (' + math + ')')();
}

function calc1 () {
  requestAnimationFrame(calc1);
  
  mathValue = mathArea1.value;
  
  if (mathValue.search("=") < 0) {
  solve();
  }

}
requestAnimationFrame(calc1);
