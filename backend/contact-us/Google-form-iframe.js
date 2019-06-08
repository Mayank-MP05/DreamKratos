function goto(str){
    var str = str;
    var src ="";
    if(str == "tech"){
        src = "https://docs.google.com/forms/d/e/1FAIpQLSdNk7muGRAg1_Ts9NT4nSA9J-5uE1BzYEh4PhZmomIiXqDTtA/viewform?embedded=true";// Technical Embed Link
    }else{
        src = "https://docs.google.com/forms/d/e/1FAIpQLSejIc2PW3jQiqXkWejjDNLzx1WymF_C_8-2_KmK6fJL_RV57w/viewform?embedded=true";// Technical Embed Link
    }
    form = document.getElementById('contact-us-form');
    form.src = src;
}

/*
// Technical Team Link 


<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdNk7muGRAg1_Ts9NT4nSA9J-5uE1BzYEh4PhZmomIiXqDTtA/viewform?embedded=true">Loading...</iframe>

// Management Team Form

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSejIc2PW3jQiqXkWejjDNLzx1WymF_C_8-2_KmK6fJL_RV57w/viewform?embedded=true">Loading...</iframe>

*/