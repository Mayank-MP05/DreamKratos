i1 = 1;
i2 = 1;
i3 = 1;
i4 = 1;

setInterval(() => {
    /*for(i1 = 1 ; i1 < 30;i1++){*/
    if(i1 < 30){
        document.getElementById('Awards').innerHTML = i1;
        i1+=1;
    }
	
	if(i2 < 8){
        document.getElementById('cars').innerHTML = i2;
        i2+=1;
    }
	
	if(i3 < 8){
        document.getElementById('competitions').innerHTML = i3;
        i3+=1;
    }
	
	if(i4 < 5){
        document.getElementById('years').innerHTML = i4;
        i4+=1;
    }
}, 350);