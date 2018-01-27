// given the html select the first paragraph in the list 4 different ways and populate it to the console.

//  #1 select element by the getElementById method
var slct = document.getElementById("initial");
// log to console
console.log(" selection #1");
console.log(slct);

// #2 select element by the getElementByClass method
var slctr = document.getElementsByClassName("especial")[0];
// log to console
console.log(" selection #2");
console.log(slctr);

//#3 select element by the getElementById method
var slcto = document.querySelector("#initial");
// log to console
console.log(" selection #3");
console.log(slcto);

//#4 select element by the getElementById method
var slcta = document.getElementsByTagName("li")[0];
// log to console
console.log(" selection #4");
console.log(slcta);
