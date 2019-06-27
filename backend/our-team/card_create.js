var animalContainer = document.getElementById("animal-info");

function GetXHRData(){
    var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'backend/our-team/dept.json');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      create_div(ourData);
      deptwise(ourData);
      setTimeout(loadimg(ourData), 3000);

    } else {
      console.log("We connected to the server, but it returned an error.");
    }
    
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();
}

function create_div(data){
    var str1 = '';
    for(var m = 0;m < data.length ;m++){
    var dept_name = data[m].deptName;

    str1 += `<h5 class="section-title h1 batman" id="title_`+dept_name.replace(" ","-")+`">`+ dept_name +`</h5>
    <div class="row" id="`+dept_name.replace(" ","-")+`"></div>`;
    }
    document.getElementById("whole").innerHTML = str1;
}


function deptwise(data){
    var html ="";

    for(var i = 0;i < 11 ;i++){
        var dept_name = data[i].deptName;
        var row = document.getElementById(dept_name.replace(" ","-"));
        var row_html = "";
        
        for(var j = 0 ; j < data[i].grpMember.length ; j++){
            var person_name = data[i].grpMember[j];
            var img_src = person_name.replace(" ","-");
            if(dept_name == "Captain"){
                dept_name = "Vice-Captain";
            }
            if(dept_name == "Team-Leads"){
                if(j == 0){
                    dept_name = "Captain";
                }
            }

            
            if(j == 0){
                var pose = "System Head"; 
            }else{
                pose = "";
            }

            if(window.innerWidth > 600){
                if(j%4 == 0){
                    row_html += "</div><div class='row'>";
                }
            }else{
                if(j%2 == 0){
                    row_html += "</div><div class='row'>";
                }
            }
            if(innerWidth > 600){
                row_html += `<!-- Team member ` + i + ` -->
                    <div class="col-xs-6 col-lg-3">
                        <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                            <div class="mainflip">
                                <div class="frontside">
                                    <div class="card">
                                        <div class="card-body text-center">
                                            <p><img class="profile_pic" id="img`+i+''+j+`tor" src="images/our%20team/default-team.jpg" alt="` + person_name + `"></p>
                                            <h4 class="card-title">`+ person_name +`</h4>
                                            <p class="card-text">`+ dept_name +`</p>
                                            <a href="#" class="btn btn-success btn-sm">`+pose+`</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="backside">
                                    <div class="card">
                                        <div class="card-body text-center mt-4">
                                            <h4 class="card-title">`+ dept_name +`</h4>
                                            <img src="images/logos/logo_black.png" class="tkr-logo">
                                            <p class="card-text">`
                                            + data[i].deptDescription + 
                                            `</p>
                                            
                                            <a class="social-icon text-xs-center" target="_blank" href="http://kratosracing.com">
                                                KratosRacing.com
                                            </a>
                                                
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <!-- ./Team member -->`; 
            }else{
                row_html += `<!-- Team member ` + i + ` -->
                    <div class="col-xs-6 col-lg-3">
                        <div class="image-flip">
                            <div class="mainflip">
                                <div class="frontside">
                                    <div class="card">
                                        <div class="card-body text-center">
                                            <p>
                                            <div class="img-hold">
                                                <img class="profile_pic" id="img`+i+''+j+`tor" src="images/our%20team/default-team.jpg" alt="` + person_name + `"></p>
                                            </div><h4 class="card-title">`+ person_name +`</h4>
                                            <p class="card-text">`+ dept_name +`</p>
                                            <a href="#" class="btn btn-success btn-sm">`+pose+`</i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <!-- ./Team member -->`; 
            }
        } 
        row.innerHTML = row_html;
    }

}

function loadimg(data){
    var data = data;
    
    for(var i = 0;i < 11 ;i++){
        for(var j = 0 ; j < data[i].grpMember.length ; j++){
            var timex = 1000; 
            var start = window.setTimeout(replace_img(i,j,data),timex);
            window.clearTimeout(start);
            errcheck(i,j,data)
        }
    }
}

function replace_img(i,j,data){
    var i = i;
    var data = data;
    var j = j;
    let person_name = data[i].grpMember[j];
    var img_src = person_name.replace(" ","-");
    var img = document.getElementById("img"+i+''+j+"tor");
    img.src = "../../images/our team/"+ img_src +".png";
}

function errcheck(i,j,data){
    var img = document.getElementById("img"+i+''+j+"tor");
    img.onerror = function(){
        img.src = "images/our%20team/default-team.jpg";
    }
}

window.onload = GetXHRData;
   