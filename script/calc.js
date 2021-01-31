//options
var calculatorOn = 1;
var calculator = document.getElementById("calculator");
var colorOn = 0;
var color = document.getElementById("color");

var bac = document.getElementById("backColor");
bac.value = "rgb(211, 211, 211)"
var boc = document.getElementById("boxColor");
boc.value = "rgb(128, 128, 128)"
var obc = document.getElementById("optBackColor");
bc.value = "rgb(105, 105, 105)"
var buc = document.getElementById("buttonColor");
bc.value = "rgb(169, 169, 169)"
var tc = document.getElementById("textColor");
bc.value = "rgb(255, 255, 255)"

//color option stuff
{
  let button = document.getElementById("optionColor");
  button.onclick = function () {calculatorOn = 0;colorOn = 1;}
}
function changeColor () {
 requestAnimationFrame(changeColor);
  
}
requestAnimationFrame(changeColor);


//normal calculator stuff
{let t,e=document.getElementById("answerArea");function solve(t){return Function("return ("+t+")")()}function swap(){t=(t=(t=(t=(t=(t=e.value).replace(/=/g,"")).replace(/x/g,"*")).replace(/÷/g,"/")).replace(/\^/g,"**")).replace(/√/,"Math.sqrt"),e.value=solve(t)}function button(t,n){document.getElementById(t).onclick=function(){e.value.endsWith("()")?(e.value=e.value.slice(0,-1),e.value=e.value+=n):e.value+=n}}function clearButton(){document.getElementById("ac").onclick=function(){e.value=""}}function deleteButton(){document.getElementById("del").onclick=function(){e.value=e.value.slice(0,-1)}}function equalButton(){document.getElementById("equal").onclick=function(){swap()}}e.onkeydown=function(t){var e=t.key;"="!==e&&"Enter"!==e||swap()},button("openBracket","("),button("closeBracket",")"),button("exponent","^()"),button("squareRoot","√()"),equalButton(),button("b1","1"),button("b2","2"),button("b3","3"),button("multiply","x"),button("b4","4"),button("b5","5"),button("b6","6"),button("divide","÷"),button("b7","7"),button("b8","8"),button("b9","9"),button("add","+"),button("b0","0"),button("dot","."),clearButton(),deleteButton(),button("substract","-")}

//make options visible
function visibility () {
  requestAnimationFrame(visibility);
  if (calculatorOn === 1) {calculator.style.visibility = "visible";color.style.visibility = "hidden";}else if (colorOn === 1) {color.style.visibility = "visible";calculator.style.visibility = "hidden";}
}
requestAnimationFrame(visibility);
