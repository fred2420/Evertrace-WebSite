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
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '.Truck-Top',
  triggerHook: .7
})
.setClassToggle('.Truck-Text', 'show')
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '.Fleet-Managment-Text',
  triggerHook: 0.97
})
.setClassToggle('.Fleet-Managment-Text', 'PopUp')
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '.Wheel',
  triggerHook: 0.97
})
.setClassToggle('.Wheel', 'MoveWheel')
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '#GPSTechContent',
  triggerHook: 0.5
})
.setClassToggle('.test1', 'visable')
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '.WhiteLine',
  triggerHook: 0.5
})
.setClassToggle('.WhiteLine', 'WhiteLineBigger')
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '.ProjectLine',
  triggerHook: 0.8
})
.setClassToggle('.ProjectLine', 'ProjectLineBigger')
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '.ProjectInsurance',
  triggerHook: 0.8
})
.setClassToggle('.ProjectInsurance', 'ShiftRight')
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '.ProjectTracking',
  triggerHook: 0.8
})
.setClassToggle('.ProjectTracking', 'ShiftRightDelay1')
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '.ProjectPayment',
  triggerHook: 0.8
})
.setClassToggle('.ProjectPayment', 'ShiftRightDelay2')
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '.ProjectOnePlatform',
  triggerHook: 0.8
})
.setClassToggle('.ProjectOnePlatform', 'ProjectOnePlatformShow')
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '.ProjectWhiteCover',
  triggerHook: 0.8
})
.setClassToggle('.ProjectWhiteCover', 'ProjectWhiteCoverreveal')
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '.ProjectWhiteCover1',
  triggerHook: 0.8
})
.setClassToggle('.ProjectWhiteCover1', 'ProjectWhiteCover1reveal')
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '.ProjectWhiteCover2',
  triggerHook: 0.8
})
.setClassToggle('.ProjectWhiteCover2', 'ProjectWhiteCover2reveal')
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