
var numJava = 0;
var numPython = 0;
var numJavascript = 0;
var numRuby = 0;
var numClojure = 0;

 $(".btn").click(function() {
  $(".text").text("loading . . .");
   $.ajax({
    type: "GET",
    url: 'https://api.arbetsformedlingen.se/af/v0/platsannonser/matchning?nyckelord="java"',
    }).done(function(data) {


      var numOpenings = data.matchningslista.antal_platsannonser;
      numJava = numOpenings;
        $("#java-nums").text(numOpenings);

     

    }).fail(function(xhr, status, error) {
      alert("error " + xhr.responseText);})

       $.ajax({
    type: "GET",
    url: 'https://api.arbetsformedlingen.se/af/v0/platsannonser/matchning?nyckelord="python"',
    }).done(function(data) {

      var numOpenings = data.matchningslista.antal_platsannonser;
       numPython = numOpenings;
        $("#python-nums").text(numOpenings);

     

    }).fail(function(xhr, status, error) {
      alert("error " + xhr.responseText);})

   $.ajax({
    type: "GET",
    url: 'https://api.arbetsformedlingen.se/af/v0/platsannonser/matchning?nyckelord="javascript"',
    }).done(function(data) {


      var numOpenings = data.matchningslista.antal_platsannonser;
      numJavascript = numOpenings;
   $("#javascript-nums").text(numOpenings);

     

    }).fail(function(xhr, status, error) {
      alert("error " + xhr.responseText);})

$.ajax({
    type: "GET",
    url: 'https://api.arbetsformedlingen.se/af/v0/platsannonser/matchning?nyckelord="ruby"',
    }).done(function(data) {


      var numOpenings = data.matchningslista.antal_platsannonser;
      numRuby = numOpenings;
   $("#javascript-nums").text(numOpenings);

     

    }).fail(function(xhr, status, error) {
      alert("error " + xhr.responseText);})

    $.ajax({
    type: "GET",
    url: 'https://api.arbetsformedlingen.se/af/v0/platsannonser/matchning?nyckelord="clojure"',
    }).done(function(data) {


      var numOpenings = data.matchningslista.antal_platsannonser;
      numClojure = numOpenings;
   $("#javascript-nums").text(numOpenings);

     

    }).fail(function(xhr, status, error) {
      alert("error " + xhr.responseText);})



// Data chart

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['language', 'number of positions',],
        ['python', numPython],
        ['java', numJava],
        ['javascript', numJavascript],
        ['clojure', numClojure],
        ['ruby', numRuby]
      ]);

      var options = {
        title: 'positions on arbets',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'total positions',
          minValue: 0
        },
        vAxis: {
          title: 'language'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }


    });