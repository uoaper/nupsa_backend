

var http = require('http');
//var user = require('/var/www/html/a/app/models/user');

var url = 'http://www.nupsa.me/api/graphdataforsite.php';

http.get(url, function(res){
    var body = '';

    res.on('data', function(chunk){
        body += chunk;
    });

    res.on('end', function(){
        var dataForGraph = JSON.parse(body);
   //     console.log("Got a response: ", fbResponse.picture);

        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
// The type of chart we want to create
            type: 'line',

// The data for our dataset
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "Depression level",
                    backgroundColor: 'rgb(159, 226, 24)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [dataForGraph],
                }]
            },

// Configuration options go here
            options: {}
        });



    });
}).on('error', function(e){
    console.log("Got an error: ", e);
});



