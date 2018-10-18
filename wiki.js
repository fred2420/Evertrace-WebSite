
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

});

function GoTo(clicked_id){
    var element = document.getElementById("clicked_id");
    let Clicked = clicked_id + "Header";
    var ele = document.getElementById(Clicked);
    ele.scrollIntoView({block: "start", behavior: "smooth"});
}

