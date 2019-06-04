function row_maker(data){
    var main = document.getElementById("main_container");
    var html = "";

    for(var i = 0; i < data.length;i++){

        var title_code = '';
        var row_code = '';
        

        title_code += `
                        <hr/><div class="row text-center align-self-center" id="`+ data[i].category +`">
                            <h1 class="align-self-center">` + data[i].category + `Mayank</h1>
                        </div><hr/>
                        `;

        row_code += `
            <div class="row text-center align-self-center" id="`+data[i].category+`_cardsrow">
                Content Row `+i+`
            </div>
        `;
        html = html + title_code + row_code;
    }

    main.innerHTML = html;

}


function card_maker(data){
    var html = "";

    for(var i = 0; i < data.length;i++){
        var row = document.getElementById(data[i].category);
        var card_code = "";
        for(var j = 0; j < data[i].list.length;j++){
            let company = data[i].list[j].sponsName;
            let website = data[i].list[j].sponsWebsite;

            card_code += `
            <div class="col-xs-12 col-sm-6 col-md-4">
                <a href="`+website+`">
                <div class="card">
                    <img class="card-img-top" src="../../images/sponsers/Gold/Autodisir.54.23.png" alt="`+ company +`">
                    <div class="card-body">
                        <h3>`+ company +`</h3>
                        <h4>`+ website +`</h4>
                    </div>
                </div>
            </div>
            `;

        }
        row.innerHTML = card_code;
    }
}


btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'backend/sponsers/spons.json');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      
      /* funstions to Create and Show Data */
        console.log(ourData);
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
});