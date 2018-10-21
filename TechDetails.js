
let i = 0;
let topcard = 0;
var LineChartTimer = setInterval(function() {

  i +=1;
  let Sims =  ['img/simO2.png', 'img/simVodafone.png', 'img/simDeutcheTelekom.png', 'img/LycaTelekom.png']
  let Countries =  ['UK', 'France', 'Germany', 'Ukraine']
// reset counter
  if(i > Sims.length ){
    i = 0;
  }

  if (i === 0){
    $('#FrontImg').attr('src',Sims[i]);
    $('#CountryTextFront').html(Countries[i]);
    $('#BackImg').attr('src',Sims[i+1]);
    $('#CountryTextBack').html(Countries[i+1]);
    topcard = 0;
  }
  else{
  if (topcard === 0){
    $('#BackImg').attr('src',Sims[i+1]);
    $('#CountryTextBack').html(Countries[i+1]);

    topcard = 1;

 
    console.log("top");
  }else{
    $('#FrontImg').attr('src',Sims[i +1]);
    $('#CountryTextFront').html(Countries[i +1]);
    
    topcard = 0;
    
 
    console.log("bottom");
  }


}



  
 
    console.log("flipped");
   


$('.card').toggleClass('flipped');


    
   
  },3500);


