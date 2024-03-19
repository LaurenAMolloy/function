//Write a Function
var startMyDay = function () {
  return "Time for coffee and a shower!";
};

//Write a Function with 1 Parameter
console.log(startMyDay());

var favouriteCookie = function (cookie) {
  return `My favorite cookie is ${cookie}`;
};

console.log(favouriteCookie("chocolate chip"));

//Write a Function with 2 Parameters
var introduce = function (name, occupation) {
  return `My name is ${name} and I work as a ${occupation}!`;
};
console.log(introduce("Pete", "Teacher"));

//Create a Function to Capture Input

var hydrationFeedback = function () {
  var numGlasses = Number(
    prompt("How many glasses of water did you drink today?")
  );

  if (numGlasses >= 8) {
    console.log("Amazing you must feel great!");
  } else if (numGlasses < 8) {
    console.log("Not bad, not bad. Let us try for a bit more tomorrow!");
  }
};

hydrationFeedback();
