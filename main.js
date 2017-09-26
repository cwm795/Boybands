console.log("hi");
var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegtables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];


var bandLoopCount = bands.length;
var veggieLoopCount = vegtables.length;

var currentBand = "";
var currentVeggie = "";


var bandElement = document.getElementById("Boybands");




var veggieElement = document.getElementById("vegtables");




for (var i = 0; i < bandLoopCount; i += 1) {




   bandElement.innerHTML += `<p>${bands[i]}</p>`;
}
for (var i = 0; i < veggieLoopCount; i += 1) {
   veggieElement.innerHTML += `<p>${vegtables[i]}</p>`;



};
