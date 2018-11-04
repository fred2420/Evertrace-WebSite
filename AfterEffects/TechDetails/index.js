
  document.addEventListener("DOMContentLoaded", function(event) {
    var animation = bodymovin.loadAnimation({
      container: document.getElementById('TechDetailsAnimation'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'AfterEffects/TechDetails/TechDetails.json'
    })
  

    console.log("AfterEffectsLoaded");
  });