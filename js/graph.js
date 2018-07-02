var max = 0;
var steps = 10;
var chartData = {};

function respondCanvas() {
    var c = $('#userscreated');
    var ctx = c.get(0).getContext("2d");
    var container = c.parent();

    var $container = $(container);

    c.attr('width', $container.width()); //max width

    c.attr('height', $container.height()); //max height

    //Call a function to redraw other content (texts, images etc)



    console.log(chartData);
    var chart = new Chart(ctx , {
        type: 'bar',
        data: chartData
    });


}
var GetChartData = function () {
    $.ajax({
        url: 'http://api.nupsa.me/graphdataforsite.php',
        method: 'GET',
        dataType: 'json',
        headers: {"Authorization_google": '<%= user.googleid %>',
            "Authorization_facebook": '<%= user.facebookid%>',
        },
        success: function (data) {

            console.log('success kind a for graph ');
            console.log(data);
            //     var object = $.parseJSON(data);
            //   console.log(object);

            var labels = new Array();
            var dataGraph = new Array();

            $.each(data, function (i, item) {
                labels.push(item.datestamp_app);
                dataGraph.push(item.totalscore);
            });

            console.log(labels)
            console.log(dataGraph)

            chartData = {
                labels: labels,
                datasets: [
                    {
                        fillColor: "#79D1CF",
                        strokeColor: "#79D1CF",
                        pointColor: "rgba(220,220,220,1)",
                        pointStrokeColor: "#fff",
                        backgroundColor: 'rgb(159, 226, 24)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: dataGraph,
                        label: "Depression level history"
                    }
                ]

            };

            max = Math.max.apply(Math, data.totalscore);
            steps = 10;

            respondCanvas();
        }
    });
};

$(document).ready(function() {
    $(window).resize(respondCanvas);

    GetChartData();
});
