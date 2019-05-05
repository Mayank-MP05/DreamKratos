
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
      create_card(ourData);
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
    htmlString += "<p>" + data[i].deptName + " is a " + data[i].species + " that likes to eat ";
    
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
        <th>Teammate deptName</th>
        <th>Image<th>
    </tr>`;

    code2 = "";
    count = 0;
    code3 = "</table>";
    for(var i=0; i < data.length ; i++){
        console.log(data[i].deptName);

            for(var j = 0; j < data[i].grpMember.length;j++){
                count++;
                
                let img_src = data[i].grpMember[j].replace(" ","-");
                img_src += ".png";

                code2 += `
                <tr>
                    <td>` + count + `</td>
                    <td>` + i + `</td>
                    <td>` + data[i].deptName + `</td>`;

                code2 += `<td>` + data[i].grpMember[j] + `</td>
                <td><img src="../../images/our team/` + img_src + `"></td>
                </tr>`;

            }
    }
    html = code1 + code2 + code3;
    op.innerHTML = html;
}

function cardify(data){

    var row_code = "";

    for(var i=0; i < data.length ; i++){
        /*console.log(data[i].deptName);*/

        row_code += `<div class="row align-self-center"><h5 class="section-title h1">`+ data[i].deptName +` :</h5></div><hr/>`;
        var card_code = '';

        for(var j = 0; j < data[i].grpMember.length;j++){
            let img_src = data[i].grpMember[j].replace(" ",'-');
            img_src += ".png";
            /*console.log(img_src);*/
            card_code += `<div class="row">`;

            if(j == 4 || j == 7){
                card_code += `<div class="row">`;
                card_code += `<!-- Team member -->
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                        <div class="mainflip">
                            <div class="frontside">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <p><img class=" img-fluid" src="../../images/our team/` + img_src + `" alt=" `+ data[i].grpMember[j] +`"></p>
                                        <h4 class="card-title">` + data[i].grpMember[j] + `</h4>
                                        <p class="card-text">` + data[i].deptName + `</p>
                                        <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="backside">
                                <div class="card">
                                    <div class="card-body text-center mt-4">
                                        <h4 class="card-title">` + data[i].deptName + `</h4>
                                        <p><img class=" img-fluid" src="` +  + `" alt=" `+ +`"></p>
                                                <a class="social-icon text-xs-center" target="_blank" href="#">
                                                    Team Kratos Racing
                                                </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <!-- ./Team member -->`;
            }else{
            card_code += `<!-- Team member -->
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src="../../images/our team/` + img_src + `" alt=" `+ data[i].grpMember[j] +`"></p>
                                    <h4 class="card-title">` + data[i].grpMember[j] + `</h4>
                                    <p class="card-text">` + data[i].deptName + `</p>
                                    <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">` + data[i].deptName + `</h4>
                                    <p><img class=" img-fluid" src="` +  + `" alt=" `+ +`"></p>
                                            <a class="social-icon text-xs-center" target="_blank" href="#">
                                                Team Kratos Racing
                                            </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ./Team member -->`;
            }
            
        
            /* If Else Finishes Here*/
        }
            card_code += "<hr/>";
        }
        html = row_code + card_code;
        op.innerHTML = html;
    }
    

    function create_card(data){
        var row_code = "";
        row_code += `<div class="row align-self-center"><h5 class="section-title h1">`+ data[0].deptName +` :</h5></div><hr/>`;
        var card_code = '';

        let img_src = data[0].grpMember[0].replace(" ",'-');
            img_src += ".png";
            /*console.log(img_src);*/
            card_code += `<div class="row">`;

                card_code += `<div class="row">`;
                card_code += `<!-- Team member -->
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                        <div class="mainflip">
                            <div class="frontside">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <p><img class=" img-fluid" src="../../images/our team/` + img_src + `" alt=" `+ data[0].grpMember[0] +`"></p>
                                        <h4 class="card-title">` + data[0].grpMember[0] + `</h4>
                                        <p class="card-text">` + data[0].deptName + `</p>
                                        <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="backside">
                                <div class="card">
                                    <div class="card-body text-center mt-4">
                                        <h4 class="card-title">` + data[0].deptName + `</h4>
                                        <p><img class=" img-fluid" src="` +  + `" alt=" `+ +`"></p>
                                                <a class="social-icon text-xs-center" target="_blank" href="#">
                                                    Team Kratos Racing
                                                </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <!-- ./Team member -->`;
           
            html = row_code + card_code;
            op.innerHTML = html;
    }

}

