var mathArea = document.getElementById("answerArea");
var someMath;

function solve(math){
    someMath.replace("=","");
    return Function('return (' + math + ')')();
}

function calc1 () {
  requestAnimationFrame(calc1);
  
  someMath = mathArea.value;
  
  if (someMath.search("=") >= 0) {
  mathArea.textContent = solve(someMath);
  }

}
requestAnimationFrame(calc1);
