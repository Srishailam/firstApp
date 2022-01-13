var button1 = document.getElementById("btn-1");
button1.style.border = "2px solid red";
var counter = 0;

var button3 =  document.createElement("button");
button3.innerHTML = "This is button 3";

document.getElementsByTagName("body")[0].appendChild(button3);

function openAlert() {
  window.alert("Hello World!");
}

function openGoogle() {
  window.open("https://www.google.com");
}

function addNewButton(){
  var newButton = document.createElement("button");
  newButton.innerHTML = "This is button" + (counter + 1);
  counter++;
  document.getElementsByTagName("body")[0].appendChild(newButton);
}