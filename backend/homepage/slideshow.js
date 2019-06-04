/*for(var i = 0 ; i < 7 ; i++){
    console.log(i);
    var img = document.getElementById('slide_img');
    img.src = 
}*/


var delayInMilliseconds = 200; //1 second
var img = document.getElementById('slide_img');
var i = 0;

setTimeout(function() {
    i++;
    img.src = "images/home/slides/slide_" + i + ".jpeg";
}, delayInMilliseconds);