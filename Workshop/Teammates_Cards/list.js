
window.onload = function(){

var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");
var op = document.getElementById("op");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'dept.json');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      console.log(ourData);
      cardify(ourData);
    } else {
      console.log("We connected to the server, but it returned an error.");
    }
    
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();
 
});

/*
function renderHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
    
    for (ii = 0; ii < data[i].foods.likes.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].foods.likes[ii];
      } else {
        htmlString += " and " + data[i].foods.likes[ii];
      }
    }

    htmlString += ' and dislikes ';

    for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].foods.dislikes[ii];
      } else {
        htmlString += " and " + data[i].foods.dislikes[ii];
      }
    }

    htmlString += '.</p>';

  }

  animalContainer.insertAdjacentHTML('beforeend', htmlString);
}
*/

function tabulate(data){

    
    /* default Code */
    code1  = `<table>
    <tr>
        <th>Serial No.</th>
        <th>Dept. No</th>
        <th>Dept</th>
        <th>Teammate Name</th>
    </tr>`;

    code2 = "";
    count = 0;
    code3 = "</table>";
    for(var i=0; i < data.length ; i++){
        console.log(data[i].name);

            for(var j = 0; j < data[i].grpMember.length;j++){
                count++;
                
                code2 += `
                <tr>
                    <td>` + count + `</td>
                    <td>` + i + `</td>
                    <td>` + data[i].name + `</td>`;

                code2 += `<td>` + data[i].grpMember[j] + `</td>
                </tr>`;

            }
    }
    html = code1 + code2 + code3;
    op.innerHTML = html;
}

function cardify(data){
    console.log(data);

    team_member = `<!-- Team member -->
    <div class="col-xs-12 col-sm-6 col-md-4">
        <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
            <div class="mainflip">
                <div class="frontside">
                    <div class="card">
                        <div class="card-body text-center">
                            <p><img class=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png" alt="card image"></p>
                            <h4 class="card-title">Sunlimetech</h4>
                            <p class="card-text">This is basic card with image on top, title, description and button.</p>
                            <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                        </div>
                    </div>
                </div>
                <div class="backside">
                    <div class="card">
                        <div class="card-body text-center mt-4">
                            <h4 class="card-title">Sunlimetech</h4>
                            <p class="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <a class="social-icon text-xs-center" target="_blank" href="#">
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="social-icon text-xs-center" target="_blank" href="#">
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="social-icon text-xs-center" target="_blank" href="#">
                                        <i class="fa fa-skype"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="social-icon text-xs-center" target="_blank" href="#">
                                        <i class="fa fa-google"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ./Team member -->`;
}

}