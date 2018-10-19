
let i = 0;
var LineChartTimer = setInterval(function() {

  i +=1;
  let Sims =  ['img/simO2.png', 'img/simVodafone.png', 'img/simDeutcheTelekom.png', 'img/LycaTelekom.png']
  let Countries =  ['UK', 'Steve Land', 'Germany', 'Poland']

  if(i > Sims.length ){
    i = 0;
  }

  
 
    console.log("flipped");
    $('.card').toggleClass('flipped');
    $('#FrontImg').attr('src',Sims[i]);
    $('#CountryTextFront').html(Countries[i]);


if((i + 1) < Sims.length) {
  $('#BackImg').attr('src',Sims[i+1]);
  $('#CountryTextBack').html(Countries[i+1]);
} else{
  $('#BackImg').attr('src',Sims[0]);
  $('#CountryTextBack').html(Countries[0]);

}




    
   
  },3500);


  function flip() {
   
}