var mathArea = document.getElementById("answerArea");
var someMath;
var test = 0;

//do the math
function solve (math){return Function("return (" + math + ")")();}

function swap () {someMath = mathArea.value;someMath = someMath.replace(/=/g,"");someMath = someMath.replace(/x/g,"*");someMath = someMath.replace(/÷/g,"/");someMath = someMath.replace(/\^/g, "**");someMath = someMath.replace(/√/, "Math.sqrt");mathArea.value = solve(someMath);}

mathArea.onkeydown = function(event){
    var key = event.key;
    if (key === "=" || key === "Enter") {swap();}
}

function button (button, numORsym) {
    var thing = document.getElementById(button);
    
    
    thing.onclick = function () {if(mathArea.value.endsWith(")")){mathArea.value = mathArea.value.slice(0, -1);mathArea.value = mathArea.value += numORsym;}else{mathArea.value += numORsym;}}
}
function clearButton () {
    var thing = document.getElementById("ac");
    thing.onclick = function () {mathArea.value = "";}
}
function deleteButton () {
    var thing = document.getElementById("del");
    thing.onclick = function () {mathArea.value = mathArea.value.slice(0, -1);}
}
function equalButton () {
    var thing = document.getElementById("equal");
    thing.onclick = function () {swap();}
}

button("openBracket", "(");
button("closeBracket", ")");
button("exponent", "^()");
button("squareRoot", "√()");
equalButton();

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
deleteButton();
button("substract", "-");

function removeEqualSymbol () {requestAnimationFrame(removeEqualSymbol);if(mathArea.value.ensWith("=")){mathArea.value = mathArea.value.slice(0, -1);}}requestAnimationFrame(removeEqualSymbol);
