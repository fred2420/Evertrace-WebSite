
let i = 0;
var LineChartTimer = setInterval(function() {

  i +=1;
  let Sims =  ['img/simO2.png', 'img/simVodafone.png', 'img/simDeutcheTelekom.png']

  if(i > Sims.length -1){
    i = 0;
  }

  
 
    console.log("flipped");
    $('.card').toggleClass('flipped');
    $('#FrontImg').attr('src',Sims[i]);
   
  },3500);


  function flip() {
   
}