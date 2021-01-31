//options
var calculatorOn = 1;
var calculator = document.getElementById("calculator");
var colorOn = 0;
var color = document.getElementById("color");
var root = document.documentElement;

var bac = document.getElementById("backColor");
bac.value = "#d3d3d3";
var boc = document.getElementById("boxColor");
boc.value = "#808080";
var obc = document.getElementById("optBackColor");
obc.value = "#696969";
var buc = document.getElementById("buttonColor");
buc.value = "#a9a9a9";
var tc = document.getElementById("textColor");
tc.value = "#000000";

//color option stuff
{
  let button = document.getElementById("optionColor");
  button.onclick = function () {calculatorOn = 0;colorOn = 1;}
}
function changeColor () {
 requestAnimationFrame(changeColor);
  root.style.setProperty("--backgroundColor", bac.value);
  root.style.setProperty("--boxColor", boc.value);
  root.style.setProperty("--optionBackgroundColor", obc.value);
  root.style.setProperty("--buttonColor", buc.value);
  root.style.setProperty("-textColor", tc.value);
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
