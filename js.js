// Made by @elevu

var allLanguagesDictionary = [];

getAmountJobPostings("C++");
getAmountJobPostings("Java");
getAmountJobPostings("JavaScript");
getAmountJobPostings("Python");
getAmountJobPostings("Clojure");
getAmountJobPostings("PHP");
getAmountJobPostings("Scala");
getAmountJobPostings("Ruby");
getAmountJobPostings("Perl");
getAmountJobPostings("Objective-C");
getAmountJobPostings("SQL");
getAmountJobPostings("Haskell");
getAmountJobPostings("Swift");
getAmountJobPostings("C#");
getAmountJobPostings(".NET");



// Gets values from Arbetsförmedlingen API https://www.arbetsformedlingen.se/Globalmeny/Om-webbplatsen/Oppna-data.html

function getAmountJobPostings(keyWord) {
    var adress = 'https://api.arbetsformedlingen.se/af/v0/platsannonser/matchning?nyckelord=' + '"' + encodeURIComponent(keyWord) + '"';
    $.ajax({
        type: "GET",
        url: adress,
    }).done(function(data) {
        var numOpenings = data.matchningslista.antal_platsannonser;
        addObjectToAllLanguagesDictionary(keyWord, numOpenings);

    }).fail(function(xhr, status, error) {
        alert("Connections with Arbetsförmedlingen failed, not possible to retreive the data. Error " + xhr.responseText);
    })

}

// Called from  getAmountJobPostings(keyWord), add Objects ex {key:"python", value:"567"} to an array of Objects

function addObjectToAllLanguagesDictionary(keyWord, value) {
    allLanguagesDictionary.push({
        key: keyWord,
        value: value
    });


}


// On click the chart is loaded

$(".btn").click(function() {

    if (allLanguagesDictionary.length < 15) {
        alert("The connection with Arbetsförmedlingen is either slow or not working. Try again to click on the button in a few seconds");

    } else {

        allLanguagesDictionary.sort(function(a, b) {
            return b.value - a.value;
        });

        // Chartjs

        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: [allLanguagesDictionary[0].key,
                        allLanguagesDictionary[1].key, 
                        allLanguagesDictionary[2].key, 
                        allLanguagesDictionary[3].key, 
                        allLanguagesDictionary[4].key, 
                        allLanguagesDictionary[5].key, 
                        allLanguagesDictionary[6].key, 
                        allLanguagesDictionary[7].key, 
                        allLanguagesDictionary[8].key, 
                        allLanguagesDictionary[9].key, 
                        allLanguagesDictionary[10].key, 
                        allLanguagesDictionary[11].key, 
                        allLanguagesDictionary[12].key, 
                        allLanguagesDictionary[13].key,
                        allLanguagesDictionary[14].key],
                datasets: [{

                    label: "Programming languages ordered by popularity on Arbetsförmedlingen's Platsbanken",
                    backgroundColor: ['#FFAACC', "#FFBBCC", "#FFCCCC", "#FFDDCC", "#FFEECC","#FFFFCC", "#CCFFFF", "#CCEEFF", "#CCDDFF", "#CCCCFF","#CCBBFF", "#CCAAFF", "#CCAACC", "#CCBBCC", "#CCCCDD"],
                    borderColor: ['#FFAACC', "#FFBBCC", "#FFCCCC", "#FFDDCC", "#FFEECC","#FFFFCC", "#CCFFFF", "#CCEEFF", "#CCDDFF", "#CCCCFF","#CCBBFF", "#CCAAFF", "#CCAACC", "#CCBBCC","#CCCCDD"],
                    data: [allLanguagesDictionary[0].value,
                        allLanguagesDictionary[1].value, 
                        allLanguagesDictionary[2].value, 
                        allLanguagesDictionary[3].value, 
                        allLanguagesDictionary[4].value, 
                        allLanguagesDictionary[5].value, 
                        allLanguagesDictionary[6].value, 
                        allLanguagesDictionary[7].value, 
                        allLanguagesDictionary[8].value, 
                        allLanguagesDictionary[9].value, 
                        allLanguagesDictionary[10].value, 
                        allLanguagesDictionary[11].value, 
                        allLanguagesDictionary[12].value, 
                        allLanguagesDictionary[13].value,
                        allLanguagesDictionary[14].value

                    ],
                    hoverBackgroundColor: '#E2F0F5',


                }]
            },

            options: {}
        });

    }

});

Chart.scaleService.updateScaleDefaults('linear', {
    ticks: {
        max: 700
    }
});

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: ["Python", "C++", "Scala", "Java", "SQL", "C#", "PHP","Perl","Ruby","Swift", "Scala", "Objective-C", "Haskell", "Clojure",".NET"],
        datasets: [{
            label: "Programming languages ordered by popularity on Arbetsförmedlingen's Platsbanken",
            backgroundColor: ['#FFAACC', "#FFBBCC", "#FFCCCC", "#FFDDCC", "#FFEECC","#FFFFCC", "#CCFFFF", "#CCEEFF", "#CCDDFF", "#CCCCFF","#CCBBFF", "#CCAAFF", "#CCAACC", "#CCBBCC", "#CCCCDD"],
            borderColor: ['#FFAACC', "#FFBBCC", "#FFCCCC", "#FFDDCC", "#FFEECC","#FFFFCC", "#CCFFFF", "#CCEEFF", "#CCDDFF", "#CCCCFF","#CCBBFF", "#CCAAFF", "#CCAACC", "#CCBBCC", "#CCCCDD"],
            data: [0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0],
        }]
    },

    // Configuration options go here
    options: {}
});

