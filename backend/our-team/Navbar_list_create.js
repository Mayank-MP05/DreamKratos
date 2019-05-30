var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'backend/our-team/navbar_list.json');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      create_link(ourData);

    } else {
      console.log("We connected to the server, but it returned an error.");
    }
    
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();
});

function create_link(data){
    var link_code = ``;

    for(var i = 0; i < data[0].list.length;i++){
        console.log(data[0].list[i]);
        var link_code += `<li class="nav-item">
            <a class="nav-link">` + data[0].list[i] + `</a>
        </li>`;

    }

}