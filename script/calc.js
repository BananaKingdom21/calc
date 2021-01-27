var mathArea = document.getElementById("answerArea");
var someMath;
var test = 0;

function solve(math){
    someMath.replace("=","");
    return Function("return (" + math + ")")();
}

function calc1 () {
  requestAnimationFrame(calc1);
    
  if (someMath || someMath.search("=") === -1) {test = 1;}else {test = 0;}
      
  if (test === 0) {
  someMath = mathArea.value;
      }else {
  mathArea.value = solve(someMath);
      }

}
requestAnimationFrame(calc1);
