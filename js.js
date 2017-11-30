   $(".btn").click(function() {
  $(".text").text("loading . . .");

   $.ajax({
    type: "GET",
    url: 'http://api.arbetsformedlingen.se/af/v0/platsannonser/matchning?nyckelord="python"',
    }).done(function(data) {
      alert("loading");
      $("#ajaxtest").text(JSON.stringify(data));

    }).fail(function(xhr, status, error) {
      alert("error " + xhr.responseText);})

});




   $.ajax({
    type: "GET",
    url: 'http://api.arbetsformedlingen.se/af/v0/platsannonser/matchning?nyckelord="java"',
    }).done(function(data) {


      alert("loading java");
      var numOpenings = data.matchningslista.antal_platsannonser;
   
   // alert("trying to load number " + data.matchningslista.antal_platsannonser);
     // $("#ajaxtest").text(JSON.stringify(data));
      
        $("#java-nums").text(numOpenings);

     

    }).fail(function(xhr, status, error) {
      alert("error " + xhr.responseText);})

       $.ajax({
    type: "GET",
    url: 'http://api.arbetsformedlingen.se/af/v0/platsannonser/matchning?nyckelord="python"',
    }).done(function(data) {


      alert("loading python");
      var numOpenings = data.matchningslista.antal_platsannonser;
   
   // alert("trying to load number " + data.matchningslista.antal_platsannonser);
     // $("#ajaxtest").text(JSON.stringify(data));
      
        $("#python-nums").text(numOpenings);

     

    }).fail(function(xhr, status, error) {
      alert("error " + xhr.responseText);})

   $.ajax({
    type: "GET",
    url: 'http://api.arbetsformedlingen.se/af/v0/platsannonser/matchning?nyckelord="javascript"',
    }).done(function(data) {


      alert("loading javascript");
      var numOpenings = data.matchningslista.antal_platsannonser;
   
   // alert("trying to load number " + data.matchningslista.antal_platsannonser);
     // $("#ajaxtest").text(JSON.stringify(data));
      
        $("#javascript-nums").text(numOpenings);

     

    }).fail(function(xhr, status, error) {
      alert("error " + xhr.responseText);})




  
	
	function hideshow() {
    var x = document.getElementById("videos");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

$(document).ready(function(){
    $("#buttonfade").click(function(){
        $("#videos").fadeToggle();
        $("#video2").fadeToggle("slow");
        
    });
});


var ctxR = document.getElementById("radarChart").getContext('2d');
var myRadarChart = new Chart(ctxR, {
    type: 'radar',
    data: {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 90, 81, 56, 55, 40]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [28, 48, 40, 19, 96, 27, 100]
            }
        ]
    },
    options: {
        responsive: true
    }    
});