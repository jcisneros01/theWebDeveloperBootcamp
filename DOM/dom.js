  // <p id="first" class="special">Hello</p>

var selected1 = document.getElementsByTagName('p');
var selected2 = document.getElementById("first");
var selected3 = document.getElementsByClassName("special");
var selected4 = document.querySelector(".special");

console.log(selected1);
console.log(selected2);
console.log(selected3);
console.log(selected4);