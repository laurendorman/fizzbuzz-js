// FizzBuzzRun.js
var createItem = document.createElement('li');
var fizzNum = document.createTextNode(fizzBuzz.output(i));
createItem.appendChild(fizzNum);
for (var i = 0; i < 100; i++) {
  document.getElementById("#fizzBuzz").appendChild(createItem);
}