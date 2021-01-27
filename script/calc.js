var mathArea = document.getElementById("answerArea");
var someMath;

function solve(math){
    someMath.replace("=","");
    return Function("return (" + math + ")")();
}

function calc1 () {
  requestAnimationFrame(calc1);
    
  if (someMath.search("=") < 0) {
  someMath = mathArea.value;
  }
  
  if (someMath.search("=") >= 0) {
  mathArea.value = solve(someMath);
  }

}
requestAnimationFrame(calc1);
