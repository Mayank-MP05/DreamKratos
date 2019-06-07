window.onload = StartCount;

function StartCount(){
var Cars = document.getElementById("Cars_count");
var Awards = document.getElementById("Awards_count");
var Comp = document.getElementById("Competitions_count");

var delayCars = 100; //1 second
var i = 1 ;
while( i < 8){
setTimeout(function() {
  Cars.innerHTML = "Cars : "+ i ;
  Comp.innerHTML = "Competitions : "+ i ;
  i++;
}, delayCars);
}

var delayAwards = 100; //1 second
for(var j = 1 ; j < 30 ; j++){
setTimeout(function() {
  Awards.innerHTML = "Awards : "+ j ;
}, delayAwards);
}
}