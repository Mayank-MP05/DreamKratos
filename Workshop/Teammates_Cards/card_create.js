
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'dept.json');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      create_div(ourData);
      deptwise(ourData);

    } else {
      console.log("We connected to the server, but it returned an error.");
    }
    
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();
});


function create_div(data){
    var str1 = '';
    for(var m = 0;m < data.length ;m++){
    var dept_name = data[m].deptName;

    str1 += `<h5 class="section-title h1">`+ dept_name +`</h5>
    <div class="row" id="`+dept_name.replace(" ","-")+`"></div>`;
    }
    document.getElementById("whole").innerHTML = str1;
}


function deptwise(data){
    var html ="";

    for(var i = 0;i < 9 ;i++){
        var dept_name = data[i].deptName;
        var row = document.getElementById(dept_name);
        var row_html = "";
        for(var j = 0 ; j < data[i].grpMember.length ; j++){
            var person_name = data[i].grpMember[j];
            var img_src = person_name.replace(" ","-");

            
            row_html += `<!-- Team member ` + i + ` -->
            <div class="col-xs-6 col-sm-6 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src="../../images/our team/`+ img_src +`.png" alt="` + person_name + `"></p>
                                    <h4 class="card-title">`+ person_name +`</h4>
                                    <p class="card-text">`+ dept_name +`</p>
                                    <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">`+ dept_name +`</h4>
                                    <p class="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum labore cum fugit, ipsa culpa numquam nemo facere omnis provident quas!</p>
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="kratosracing.com">
                                                KratosRacing.com
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
        row.innerHTML = row_html;
    }

}