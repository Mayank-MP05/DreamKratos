
function printName(data){
    frame = document.getElementById("our-cars-iframe");

    var data = data;

    var link = ``;

    switch(data){
        case 40:link = "4.0";
        break;
        case 31:link = "3.1";
        break;
        case 30:link = "3.0";
        break;
        case 21:link = "2.1";
        break;
        case 20:link = "2.0";
        break;
        case 10:link = "1.0";
        break;
        default:link = "4.0";
    }

    var code = `ourCars/Fireblade`+link+`.html`;
    frame.src = code;
}
