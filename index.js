document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
    document.getElementById("DarinaPhoto").addEventListener("click", DarinaLebensLaufShow);
    document.getElementById("GaultierPhoto").addEventListener("click", GaultierLebensLaufShow);
   
});

var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
  triggerElement: '.Truck-Top',
  triggerHook: .7
})
.setClassToggle('.Truck-Top', 'show')
.addIndicators()
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '.Truck-Top',
  triggerHook: .7
})
.setClassToggle('.Truck-Text', 'show')
.addIndicators()
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '.Fleet-Managment-Text',
  triggerHook: 0.97
})
.setClassToggle('.Fleet-Managment-Text', 'PopUp')
.addIndicators()
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '.Wheel',
  triggerHook: 0.97
})
.setClassToggle('.Wheel', 'MoveWheel')
.addIndicators()
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '#GPSTechContent',
  triggerHook: 0.5
})
.setClassToggle('.test1', 'visable')
.addIndicators()
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '.WhiteLine',
  triggerHook: 0.5
})
.setClassToggle('.WhiteLine', 'WhiteLineBigger')
.addIndicators()
.addTo(controller);







function DarinaLebensLaufShow() {
  

  document.getElementById("LebensLaufName")
  LebensLaufShow();
  var LebensLaufName = document.getElementById("LebensLaufName");
  var LebensLaufTitle  = document.getElementById("LebensLaufTitle");
  LebensLaufTitle.innerHTML = "Founder & CEO";
  LebensLaufName.innerHTML = "Darina Onoprienko";
}

function GaultierLebensLaufShow() {
  LebensLaufShow();
  var x = document.getElementById("LebensLaufName");
  x.innerHTML = "Gaultier Lobry";
  LebensLaufTitle.innerHTML = "Founder & CTO";
}

function LebensLaufShow() {
  if($('#LebensLauf').css('display') !== 'none'){
    $("#LebensLauf").slideToggle();
  }
  $("#LebensLauf").slideToggle();
  return false;
}



//Fleet-Managment-Text