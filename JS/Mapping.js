document.getElementById('myMap').innerHTML = '<object type="image/svg+xml" data="img/Jumping_logo.svg">Your browser does not support SVG</object> <h1 style="text-align: center; margin-top: -30%">Loading</h1>';
 
var GpsData = [
    { "speed": 0.4, "DistanceToGo": 52.3, "Counter": 1 },
    { "speed": 1.3, "DistanceToGo": 52.5, "Counter": 2 },
    { "speed": 3.8, "DistanceToGo": 52.6, "Counter": 3 },
    { "speed": 4.1, "DistanceToGo": 52.8, "Counter": 4 },
    { "speed": 3.4, "DistanceToGo": 52.3, "Counter": 5 },
    { "speed": 4.3, "DistanceToGo": 52.5, "Counter": 6 },
    { "speed": 1.8, "DistanceToGo": 52.6, "Counter": 7 },
    { "speed": 2.1, "DistanceToGo": 52.8, "Counter": 8 },
    { "speed": 83.3, "DistanceToGo": 52.8, "Counter": 9 },
    { "speed": 83.1, "DistanceToGo": 52.8, "Counter": 10 },
    { "speed": 84.4, "DistanceToGo": 52.3, "Counter": 11 },
    { "speed": 85.3, "DistanceToGo": 52.5, "Counter": 12 },
    { "speed": 82.8, "DistanceToGo": 52.6, "Counter": 13 },
    { "speed": 83.1, "DistanceToGo": 52.8, "Counter": 14 },
    { "speed": 85.4, "DistanceToGo": 52.3, "Counter": 15 },
    { "speed": 82.3, "DistanceToGo": 52.5, "Counter": 16 },
    { "speed": 83.8, "DistanceToGo": 52.6, "Counter": 17 },
    { "speed": 83.1, "DistanceToGo": 52.8, "Counter": 18 },
    { "speed": 82.4, "DistanceToGo": 52.3, "Counter": 19 },
    { "speed": 84.3, "DistanceToGo": 52.5, "Counter": 20 }

];

var GpsData2 = [
    { "speed": 1.4, "DistanceToGo": 52.3, "Counter": 1 },
    { "speed": 40.3, "DistanceToGo": 52.5, "Counter": 2 },
    { "speed": 100.8, "DistanceToGo": 52.6, "Counter": 3 },
    { "speed": 21.1, "DistanceToGo": 52.8, "Counter": 4 },
    { "speed": 1.4, "DistanceToGo": 52.3, "Counter": 5 },
    { "speed": 40.3, "DistanceToGo": 52.5, "Counter": 6 },
    { "speed": 100.8, "DistanceToGo": 52.6, "Counter": 7 },
    { "speed": 21.1, "DistanceToGo": 52.8, "Counter": 8 },
    { "speed": 21.1, "DistanceToGo": 52.8, "Counter": 9 },
    { "speed": 21.1, "DistanceToGo": 52.8, "Counter": 10 },
    { "speed": 1.4, "DistanceToGo": 52.3, "Counter": 11 },
    { "speed": 40.3, "DistanceToGo": 52.5, "Counter": 12 },
    { "speed": 100.8, "DistanceToGo": 52.6, "Counter": 13 },
    { "speed": 21.1, "DistanceToGo": 52.8, "Counter": 14 },
    { "speed": 1.4, "DistanceToGo": 52.3, "Counter": 15 },
    { "speed": 40.3, "DistanceToGo": 52.5, "Counter": 16 },
    { "speed": 100.8, "DistanceToGo": 52.6, "Counter": 17 },
    { "speed": 21.1, "DistanceToGo": 52.8, "Counter": 18 },
    { "speed": 1.4, "DistanceToGo": 52.3, "Counter": 19 },
    { "speed": 40.3, "DistanceToGo": 52.5, "Counter": 20 }
];



function GetMap() {
    map = new Microsoft.Maps.Map('#myMap', {
        credentials: 'Ap-rYkxddKIJj0aTnUwot7dfHj98aomVnrq7SUie4oNnnzgpCANowuvTHUnEI5kd'
    });

    SmallMap = new Microsoft.Maps.Map('#SmallMap', {
        credentials: 'Ap-rYkxddKIJj0aTnUwot7dfHj98aomVnrq7SUie4oNnnzgpCANowuvTHUnEI5kd',
        center: new Microsoft.Maps.Location(47.616343, -122.203177),
        customMapStyle: {
            elements: {
                area: { fillColor: '#b6e591' },
                water: { fillColor: '#75cff0' },
                tollRoad: { fillColor: '#ffffff', strokeColor: '#ffffff' },
                arterialRoad: { fillColor: '#ffffff', strokeColor: '#ffffff' },
                road: { fillColor: '#ffffff', strokeColor: '#ffffff' },
                street: { fillColor: '#ffffff', strokeColor: '#ffffff' },
                transit: { fillColor: '#000000' }
            },
            settings: {
                landColor: '#ffffff'
            }
        }
    });

    SmallMap.setView({
        
        center: new Microsoft.Maps.Location(52.520008, 13.404954),
        zoom: 5,
        showScalebar: false,
    });

    

    //Register the custom module.
    Microsoft.Maps.registerModule('HtmlPushpinLayerModule', 'JS/HtmlPushpinLayerModule.js');

    //Load the module.
    Microsoft.Maps.loadModule('HtmlPushpinLayerModule', function () {
        //Create a simple reusable HTML template to keep things easy.
        var htmlTemplate = '<div style="width:20px;padding:2px;text-align:center;">{text}</div>';

        var pins = [
            new HtmlPushpin(new Microsoft.Maps.Location(49.49596, 8.43048), htmlTemplate.replace('{text}', ' <img class="radiowave" src="img/PuppleTracker.svg" style="width: 100%; height: 100%;">'), new Microsoft.Maps.Point(10, 10)),
            new HtmlPushpin(new Microsoft.Maps.Location(48.49596, 8.43048), htmlTemplate.replace('{text}', ' <img class="radiowave" src="img/BlueTracker.svg" style="width: 100%; height: 100%;">'), new Microsoft.Maps.Point(10, 10)),
            new HtmlPushpin(new Microsoft.Maps.Location(48.49596, 9.43048), htmlTemplate.replace('{text}', ' <img class="radiowave" src="img/OrangeTracker.svg" style="width: 100%; height: 100%;">'), new Microsoft.Maps.Point(10, 10)),
        ];

        var layer = new HtmlPushpinLayer();
        layer.setPushpins(pins);

        //Add the HTML pushpin to the map.
        map.layers.insert(layer);
    });


    Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
        //Create an instance of the directions manager.
        directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);
        var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), null);
        map.entities.push(pushpin);
    });

    map.setView({
        mapTypeId: Microsoft.Maps.MapTypeId.aerial,
        center: new Microsoft.Maps.Location(52.520008, 13.404954),
        zoom: 5,
    });



}




function DisplayMap(origin, destination) {
    directionsManager = new Microsoft.Maps.Directions.DirectionsManager(SmallMap);
    var waypoint1 = new Microsoft.Maps.Directions.Waypoint({ address: origin });
    directionsManager.addWaypoint(waypoint1);

    var waypoint2 = new Microsoft.Maps.Directions.Waypoint({ address: destination });
    directionsManager.addWaypoint(waypoint2);
    directionsManager.calculateDirections();
    ShowLineChart();
};
let TruckSelected = 1;
function Truck1() {
    TruckSelected = 1;
    ShowBarChart(40)
    ShowPieChart(60);
    document.getElementById("DistanceLeftPercentage").innerHTML = "60%";
    DisplayMap('Berlin', 'Paris');
}
function Truck2() {
    ShowBarChart(70)
    ShowPieChart(30);
    ShowLineChart();
    document.getElementById("#DistanceLeftPercentage").innerHTML = "30%";
    TruckSelected = 2;
    DisplayMap('Berlin', 'Prauge');
}

// Set timer to upload data 
let Mappingi = 0;
var x = setInterval(function () {
    Mappingi += 1;
    if (Mappingi > GpsData.length - 1) {
        Mappingi = 0;
        let LC = document.getElementById("#LineChart");
        let steve = parseInt(window.getComputedStyle(LC).marginLeft);
        LC.style.marginLeft = 0 + "px";
    };

    if (TruckSelected === 1) {

        document.getElementById("CurrentSpeed").innerHTML = GpsData[Mappingi]["speed"] + "Km/h";
        document.getElementById("DistanceLeft").innerHTML = GpsData[Mappingi]["DistanceToGo"] + "Km/h";
        document.getElementById("PricePerTon").innerHTML = "€2.45"
    }
    else if (TruckSelected === 2) {
        document.getElementById("CurrentSpeed").innerHTML = GpsData2[Mappingi]["speed"] + "Km/h";
        document.getElementById("DistanceLeft").innerHTML = GpsData2[Mappingi]["DistanceToGo"] + "Km/h";
        document.getElementById("PricePerTon").innerHTML = "€3.15"
    }

}, 2000);

function ShowBarChart(weight) {
    let Barchart = document.getElementById('WeightBarChart');
    Barchart.className = '';
    if (weight === 70) {
        Barchart.classList.add('WeightBarChart70');
        document.getElementById('WeightPercentage').innerHTML = "70%";
    }
    else if (weight === 40) {
        Barchart.classList.add('WeightBarChart40');
        document.getElementById('WeightPercentage').innerHTML = "40%";

    }
}
function ShowPieChart(Complete) {
    $('.chart').easyPieChart({
        barColor: 'blue',
        size: '220',
        lineWidth: '24',
        barColor: function (Complete) {
            var ctx = this.renderer.getCtx();
            var canvas = this.renderer.getCanvas();
            var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
            gradient.addColorStop(1, "darkblue");
            gradient.addColorStop(0, "#4fb5fe");
            // gradient.addColorStop(0, "#ffe57e");
            // gradient.addColorStop(1, "#de5900");
            return gradient;
        }
    });
    $('.chart').data('easyPieChart').update(Complete);
};



function ShowLineChart() {
    document.getElementById("LineChart").innerHTML = "";
    var h = 150;
    var w = 1600;
    var linefun = d3.svg.line()
        .x(function (d) { return d.Counter * 60; })
        .y(function (d) { return d.speed; })
        .interpolate("linear");

    var area = d3.svg.area()
        .x(function (d) { return d.Counter * 60; })
        .y0(h)
        .y1(function (d) { return d.speed; })

    var svg =
        d3.select(document.getElementById("LineChart")).append("svg").attr({
            width: w, height: h
        });

    var defs = svg.append("defs");

    var gradient = defs.append("linearGradient")
        .attr("id", "svgGradient")
        .attr("x1", "0%")
        .attr("x2", "50%")
        .attr("y1", "0%")
        .attr("y2", "50%");

    gradient.append("stop")
        .attr('class', 'start')
        .attr("offset", "0%")
        .attr("stop-color", "#4fb5fe")
        .attr("stop-opacity", 1);

    gradient.append("stop")
        .attr('class', 'end')
        .attr("offset", "100%")
        .attr("stop-color", "white")
        .attr("stop-opacity", 1);


    svg.append("path")
        .datum(GpsData)
        .attr("class", "area")
        .attr("d", area);



    var viz = svg.append("path")
        .attr({
            d: linefun(GpsData),
            "stroke": "url(#svgGradient)",
            "stroke-width": 2,
            "fill": "none"
        });





    //.attr("class", "area")
    var x = d3.scale.ordinal()
        .domain([0, 1, 2, 3, 4, 5])
        .rangeBands([0, w]);

    var y = d3.scale.linear()
        .domain([0, 100])
        .range([h, 0]);

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
        .attr("class", "axis")
        .call(xAxis);

    svg.append("g")
        .attr("transform", "translate( 0 , 0)")
        .attr("class", "axis")
        .attr("class", "axisRed")
        .call(yAxis);
}

var LineChartTimer = setInterval(function () {
    let LC = document.getElementById("LineChart");
    let steve = parseInt(window.getComputedStyle(LC).marginLeft);
    LC.style.marginLeft = (steve - 2) + "px";


}, 100);


var x = setInterval(function () {
    Mappingi += 1;
    if (Mappingi > GpsData.length - 1) {
        Mappingi = 0;
        let LC = document.getElementById("LineChart");
        let steve = parseInt(window.getComputedStyle(LC).marginLeft);
        LC.style.marginLeft = 0 + "px";
    };

    if (TruckSelected === 1) {

        document.getElementById("CurrentSpeed").innerHTML = GpsData[Mappingi]["speed"] + "Km/h";
        document.getElementById("DistanceLeft").innerHTML = GpsData[Mappingi]["DistanceToGo"] + "Km/h";
      
        document.getElementById("PricePerTon").innerHTML = "€2.45"
    }
    else if (TruckSelected === 2) {
        document.getElementById("CurrentSpeed").innerHTML = GpsData2[Mappingi]["speed"] + "Km/h";
        document.getElementById("DistanceLeft").innerHTML = GpsData2[Mappingi]["DistanceToGo"] + "Km/h";
  
        document.getElementById("PricePerTon").innerHTML = "€3.15"
    }

}, 2000);