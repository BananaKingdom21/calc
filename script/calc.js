var mathArea = document.getElementById("answerArea");
var someMath;
var test = 0;

//do the math
function solve (math){return Function("return (" + math + ")")();}

function swap () {someMath = mathArea.value;someMath = someMath.replace("=","");someMath = someMath.replace("x","*");someMath = someMath.replace("÷","/");mathArea.value = solve(someMath);}

mathArea.onkeydown = function(event){
    var key = event.key;
    if (key === "=" || key === "Enter") {swap();}
}

function button (button, numORsym) {
    var thing = document.getElementById(button);
    thing.onclick = function () {mathArea.value += numORsym;}
}
function clearButton () {
    var thing = document.getElementById("ac");
    thing.onclick = function () {mathArea.value = "";}
}

button("b1", "1");
button("b2", "2");
button("b3", "3");
button("multiply", "x");

button("b4", "4");
button("b5", "5");
button("b6", "6");
button("divide", "÷");

button("b7", "7");
button("b8", "8");
button("b9", "9");
button("add", "+");

button("b0", "0");
button("dot", ".");
clearButton();
button("substract", "-");

