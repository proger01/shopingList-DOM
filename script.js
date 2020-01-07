// change of ul block style
var ul = document.querySelector("ul");

function trigger() {
  return ul.classList.toggle("done");
}

ul.addEventListener("click", trigger);

// activate the button "delete me"
var button1 = document.getElementsByClassName("delitem1")[0];
var button2 = document.getElementsByClassName("delitem2")[0];
var button3 = document.getElementsByClassName("delitem3")[0];
var button4 = document.getElementsByClassName("delitem4")[0];
var button5 = document.getElementsByClassName("delitem5")[0];
var button6 = document.getElementsByClassName("delitem6")[0];

function removeLi1() {
  var parentOfButton = button1.parentElement;
  ul.removeChild(parentOfButton);
}

function removeLi2() {
  var parentOfButton = button2.parentElement;
  ul.removeChild(parentOfButton);
}

function removeLi3() {
  var parentOfButton = button3.parentElement;
  ul.removeChild(parentOfButton);
}

function removeLi4() {
  var parentOfButton = button4.parentElement;
  ul.removeChild(parentOfButton);
}

function removeLi5() {
  var parentOfButton = button5.parentElement;
  ul.removeChild(parentOfButton);
}

function removeLi6() {
  var parentOfButton = button6.parentElement;
  ul.removeChild(parentOfButton);
}

button1.addEventListener("click", removeLi1);
button2.addEventListener("click", removeLi2);
button3.addEventListener("click", removeLi3);
button4.addEventListener("click", removeLi4);
button5.addEventListener("click", removeLi5);
button6.addEventListener("click", removeLi6);

// adding and active the button next to new items
var input = document.getElementById("userinput");
var button = document.getElementById("enter");

function createNewElement() {
  var newButton = document.createElement("button");
  newButton.appendChild(document.createTextNode("delete me"));
  var newLi = document.createElement("li");
  var newTextInLi = document.createTextNode(input.value);
  newLi.appendChild(newTextInLi);
  newLi.appendChild(newButton);
  ul.appendChild(newLi);
  input.value = "";
  function newRemoveLi() {
    ul.removeChild(newLi);
  }
  newButton.addEventListener("click", newRemoveLi);
}

function addItemToList() {
  if (input.value.length > 0) {
    createNewElement();
  }
}

function addItemToListByKeyword(event) {
  if (input.value.length > 0 && event.which === 13) {
    createNewElement();
  }
}

button.addEventListener("click", addItemToList);
input.addEventListener("keypress", addItemToListByKeyword);
