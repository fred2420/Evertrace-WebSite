//var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {});
let i = 0;
let TruckSelected = 0;


var GpsData = [
    {"speed":1.4, "DistanceToGo": 52.3, "Counter": 1 }, 
    {"speed":40.3, "DistanceToGo": 52.5,"Counter": 2 } ,
    {"speed":100.8, "DistanceToGo": 52.6 ,"Counter": 3 } ,
    {"speed":21.1, "DistanceToGo": 52.8 ,"Counter": 4 } ,
    {"speed":1.4, "DistanceToGo": 52.3, "Counter": 5 }, 
    {"speed":40.3, "DistanceToGo": 52.5,"Counter": 6 } ,
    {"speed":100.8, "DistanceToGo": 52.6 ,"Counter": 7 } ,
    {"speed":21.1, "DistanceToGo": 52.8 ,"Counter": 8 } ,
    {"speed":21.1, "DistanceToGo": 52.8 ,"Counter": 9 } ,
    {"speed":21.1, "DistanceToGo": 52.8 ,"Counter": 10 } ,
    {"speed":1.4, "DistanceToGo": 52.3, "Counter": 11 }, 
    {"speed":40.3, "DistanceToGo": 52.5,"Counter": 12 } ,
    {"speed":100.8, "DistanceToGo": 52.6 ,"Counter": 13 } ,
    {"speed":21.1, "DistanceToGo": 52.8 ,"Counter": 14 } ,
    {"speed":1.4, "DistanceToGo": 52.3, "Counter": 15 }, 
    {"speed":40.3, "DistanceToGo": 52.5,"Counter": 16 } ,
    {"speed":100.8, "DistanceToGo": 52.6 ,"Counter": 17 } ,
    {"speed":21.1, "DistanceToGo": 52.8 ,"Counter": 18 } ,
    {"speed":1.4, "DistanceToGo": 52.3, "Counter": 19 }, 
    {"speed":40.3, "DistanceToGo": 52.5,"Counter": 20 } 
 
  ];

var GpsData2 = [
    {"speed":1.4, "DistanceToGo": 52.3, "Counter": 1 }, 
    {"speed":40.3, "DistanceToGo": 52.5,"Counter": 2 } ,
    {"speed":100.8, "DistanceToGo": 52.6 ,"Counter": 3 } ,
    {"speed":21.1, "DistanceToGo": 52.8 ,"Counter": 4 } ,
    {"speed":1.4, "DistanceToGo": 52.3, "Counter": 5 }, 
    {"speed":40.3, "DistanceToGo": 52.5,"Counter": 6 } ,
    {"speed":100.8, "DistanceToGo": 52.6 ,"Counter": 7 } ,
    {"speed":21.1, "DistanceToGo": 52.8 ,"Counter": 8 } ,
    {"speed":21.1, "DistanceToGo": 52.8 ,"Counter": 9 } ,
    {"speed":21.1, "DistanceToGo": 52.8 ,"Counter": 10 } ,
    {"speed":1.4, "DistanceToGo": 52.3, "Counter": 11 }, 
    {"speed":40.3, "DistanceToGo": 52.5,"Counter": 12 } ,
    {"speed":100.8, "DistanceToGo": 52.6 ,"Counter": 13 } ,
    {"speed":21.1, "DistanceToGo": 52.8 ,"Counter": 14 } ,
    {"speed":1.4, "DistanceToGo": 52.3, "Counter": 15 }, 
    {"speed":40.3, "DistanceToGo": 52.5,"Counter": 16 } ,
    {"speed":100.8, "DistanceToGo": 52.6 ,"Counter": 17 } ,
    {"speed":21.1, "DistanceToGo": 52.8 ,"Counter": 18 } ,
    {"speed":1.4, "DistanceToGo": 52.3, "Counter": 19 }, 
    {"speed":40.3, "DistanceToGo": 52.5,"Counter": 20 } 
  ];

function loadDoc() {
 
  var directionsManager;


}




  function GetMap()
  {
      map = new Microsoft.Maps.Map('#myMap', {
          credentials: 'Ap-rYkxddKIJj0aTnUwot7dfHj98aomVnrq7SUie4oNnnzgpCANowuvTHUnEI5kd',
          center: new Microsoft.Maps.Location(47.616343, -122.203177),
    customMapStyle: {
        elements: {
            area: { fillColor: '#ffb6e591' },
            //water: { fillColor: '#ffffffff' },
            tollRoad: { fillColor: '#a964f4', strokeColor: '#a964f4' },
            arterialRoad: { fillColor: '#ffffff', strokeColor: '#d7dae7' },
            road: { fillColor: '#ffa35a', strokeColor: '#ff9c4f' },
            street: { fillColor: '#ffffff', strokeColor: '#ffffff' }
        },
        settings: {
            landColor: '#efe9e1'
        }
    }
      });
      
      map.setView({
       mapTypeId: Microsoft.Maps.MapTypeId.aerial,
      center: new Microsoft.Maps.Location(52.520008, 13.404954),
      zoom: 5,
     
    });

      //Load the directions module.
      Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
          //Create an instance of the directions manager.
          directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);

          
        var Postdam = new Microsoft.Maps.Location(52.540008, 13.404954);
        var pushpinPostdam = new Microsoft.Maps.Pushpin(Postdam, null);
        map.entities.push(pushpinPostdam);

        var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), null);
        map.entities.push(pushpin);

      //  Microsoft.Maps.Events.addHandler(pushpin, 'click', Truck1); 
      //  Microsoft.Maps.Events.addHandler(pushpinPostdam, 'click', Truck2);   
      });

     
  }

  function Truck1(){
    TruckSelected = 1;
    ShowBarChart(40)
    ShowPieChart(60);
    document.getElementById("DistanceLeftPercentage").innerHTML = "60%";
    DisplayMap('Berlin', 'Paris');
  }

   function Truck2(){
    ShowBarChart(70)
    ShowPieChart(30);
    document.getElementById("DistanceLeftPercentage").innerHTML = "30%";
       TruckSelected = 2;
       DisplayMap('Berlin', 'Prauge');
  }

  function DisplayMap(origin , destination){
    directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);
    var waypoint1 = new Microsoft.Maps.Directions.Waypoint({ address: origin });
        directionsManager.addWaypoint(waypoint1);

    var waypoint2 = new Microsoft.Maps.Directions.Waypoint({ address: destination });                
        directionsManager.addWaypoint(waypoint2);
        directionsManager.calculateDirections();
        ShowLineChart();
  };

  function ShowTraffic(){
    Microsoft.Maps.loadModule('Microsoft.Maps.Traffic', function () {
        var manager = new Microsoft.Maps.Traffic.TrafficManager(map);
        manager.show();

        
    });
      
  }

  var LineChartTimer = setInterval(function() {
    let LC = document.getElementById("LineChart");
    let steve = parseInt(window.getComputedStyle(LC).marginLeft);
    LC.style.marginLeft = (steve - 2) + "px";
  },100);

var x = setInterval(function() {
    i += 1;
    document.getElementById("Counter").innerHTML ="Counter " + i ;

    if (i > GpsData.length -1)
    {
        i = 0;
    } ;

    if(TruckSelected === 1){
        
        document.getElementById("CurrentSpeed").innerHTML = GpsData[i]["speed"] + "Km/h";
        document.getElementById("DistanceLeft").innerHTML = GpsData[i]["DistanceToGo"] + "Km/h";
        document.getElementById("OriginHeader").innerHTML ="Berlin";
        document.getElementById("DestinationHeader").innerHTML ="Paris"; 
        document.getElementById("PricePerTon").innerHTML = "€2.45"
    }
    else if(TruckSelected === 2){
        document.getElementById("CurrentSpeed").innerHTML = GpsData2[i]["speed"] + "Km/h";
        document.getElementById("DistanceLeft").innerHTML = GpsData2[i]["DistanceToGo"] + "Km/h";
        document.getElementById("OriginHeader").innerHTML ="Berlin";
        document.getElementById("DestinationHeader").innerHTML ="Prauge";
        document.getElementById("PricePerTon").innerHTML = "€3.15"
    }
       
}, 2000);

function ShowLineChart(){
    document.getElementById("LineChart").innerHTML = "";

console.log("hi");
var h = 150;
var w = 1600;


var linefun = d3.svg.line()
.x(function(d) { return d.Counter * 100; })
.y(function(d) { return d.speed ;})
.interpolate("linear");

var area = d3.svg.area()
    .x(function(d) { return d.Counter * 100; })
    .y0(h)
    .y1(function(d) { return d.speed ;})

var svg = 
d3.select(document.getElementById("LineChart")).append("svg").attr({
    width:w, height:h});

    var defs = svg.append("defs");

var gradient = defs.append("linearGradient")
   .attr("id", "svgGradient")
   .attr("x1", "0%")
   .attr("x2", "100%")
   .attr("y1", "0%")
   .attr("y2", "100%");

gradient.append("stop")
   .attr('class', 'start')
   .attr("offset", "0%")
   .attr("stop-color", "darkblue")
   .attr("stop-opacity", 1);

gradient.append("stop")
   .attr('class', 'end')
   .attr("offset", "100%")
   .attr("stop-color", "#4fb5fe")
   .attr("stop-opacity", 1);


    svg.append("path")
    .datum(GpsData)
    .attr("class", "area")
    .attr("d", area);

   

var viz =svg.append("path")
.attr({
    d: linefun(GpsData),
    "stroke": "url(#svgGradient)",
    "stroke-width": 2,
    "fill": "none"
    });

  

     

//.attr("class", "area")
    var x = d3.scale.ordinal()
	.domain([0,1,2,3,4,5])
    .rangeBands([0,w]);
    
    var y = d3.scale.linear()
	.domain([0,100])
    .range([h ,0]);

    var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .ticks(10);

    var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(5);

svg.append("g")
    .attr("transform", "translate(0,100)")
    .attr("class","axis")
    .call(xAxis);
    
svg.append("g")
    .attr("transform", "translate( 0 , 0)")
    .attr("class","axis")
    .attr("class", "axisRed")
    .call(yAxis);


}

function ShowPieChart(Complete) {
    $('.chart').easyPieChart({
        barColor:'blue',
        size: '220',
        lineWidth: '12',
        barColor: function(Complete) {
            var ctx = this.renderer.getCtx();
            var canvas = this.renderer.getCanvas();
            var gradient = ctx.createLinearGradient(0,0,canvas.width,0);
                  gradient.addColorStop(1, "darkblue");
                  gradient.addColorStop(0, "#4fb5fe");
               // gradient.addColorStop(0, "#ffe57e");
               // gradient.addColorStop(1, "#de5900");
            return gradient;
          }
    });
    $('.chart').data('easyPieChart').update(Complete);
};




function ShowBarChart(weight){
   let Barchart = document.getElementById('WeightBarChart');
   Barchart.className = '';
   if (weight === 70){
   Barchart.classList.add('WeightBarChart70');
   document.getElementById('WeightPercentage').innerHTML = "70%";
   }
   else if (weight === 40){
    Barchart.classList.add('WeightBarChart40');
    document.getElementById('WeightPercentage').innerHTML = "40%";

   }
}

var countDownDate = new Date("Jan 5, 2019 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("ETA").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("ETA").innerHTML = "EXPIRED";
  }
}, 1000);


