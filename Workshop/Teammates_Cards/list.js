
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
      tabulate(ourData);
    } else {
      console.log("We connected to the server, but it returned an error.");
    }
    
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();
  pageCounter++;
  if (pageCounter > 3) {
    btn.classList.add("hide-me");
  }
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
}