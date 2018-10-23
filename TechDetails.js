
let i = 0;
let topcard = 0;
var LineChartTimer = setInterval(function() {

  i +=1;
  let Sims =  ['img/simO2.png', 'img/simVodafone.png', 'img/simDeutcheTelekom.png', 'img/LycaTelekom.png','img/simTele.png']
  let Countries =  ['UK', 'France', 'Germany', 'Ukraine', 'Spain']
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

 
  
  }else{
    $('#FrontImg').attr('src',Sims[i +1]);
    $('#CountryTextFront').html(Countries[i +1]);
    
    topcard = 0;
 
  
  }
}
  
   


$('.card').toggleClass('flipped');
 
  },3500);


