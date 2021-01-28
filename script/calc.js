var mathArea = document.getElementById("answerArea");
var someMath;
var test = 0;

//do the math
function solve (math){return Function("return (" + math + ")")();}

function swap () {someMath = mathArea.value;someMath.replace("=","");someMath.replace("x","*");someMath.replace("÷","/");mathArea.value = solve(someMath);}

mathArea.onkeydown = function(event){
    var key = event.key;
    if (key === "=" || key === "Enter") {swap();}
}
