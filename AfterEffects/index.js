
  document.addEventListener("DOMContentLoaded", function(event) {
    var animation = bodymovin.loadAnimation({
      container: document.getElementById('bm'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'AfterEffects/data3.json'
    })
  

    console.log("AfterEffectsLoaded");
  });