var cate = ["Title","Platinum","Gold","Silver"];

function row_maker(data){
    var main = document.getElementById("main_container");
    var html = "";


    for(var i = 0; i < data.length;i++){

        var title_code = '';
        var row_code = '';
        

        title_code += `
                        <hr/><div class="row text-center align-self-center" id="`+ data[i].category +`">
                            <h1 class="align-self-center">` + data[i].category + ` Sponsers</h1>
                        </div><hr/>
                        `;

        row_code += `
            <div class="row text-center align-self-center" id="`+ data[i].category +`_cardsrow">
                 `+cate[i]+` Sponsers
            </div>
        `;
        html = html + title_code + row_code;
    }

    main.innerHTML = html;

}


function card_maker(data){
    var html = "";
    

    for(var i = 0; i < data.length;i++){
        var row = document.getElementById(data[i].category + "_cardsrow");
        var card_code = "";
        for(var j = 0; j < data[i].list.length;j++){
            let company = data[i].list[j].sponsName;
            let website = data[i].list[j].sponsWebsite;
            
            if(window.innerHeight > 600){
              if(j % 4 == 0){
                card_code += "</div><div class='row'>";
              }
            }else{
              if(j % 2 == 0){
                card_code += "</div><div class='row'>";
              }
            }


            card_code += `
            <div class="col-xs-6 col-sm-6 col-md-3 loading">
                <a href="`+website+`">
                <div class="card">
                    <img class="card-img-top img-fluid" src="../../images/sponsers/` + cate[i] + "/" + company.replace(" ","-") + `.png" ` + `alt="`+ company +`">
                    <div class="card-body">
                        <h3>`+ company +`</h3>
                    </div>
                </div>
                </a>
            </div>
            `;

        }
        row.innerHTML = card_code;
    }
}

function loadData() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'backend/sponsers/spons.json');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      
      /* funstions to Create and Show Data */
     
      row_maker(ourData);
      card_maker(ourData);


    } else {
      console.log("We connected to the server, but it returned an error.");
    }
    
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();
}

window.onload = loadData;