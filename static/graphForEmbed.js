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
            data: [24, 21, 22, 19, 16, 13, 12],
        }]
    },

// Configuration options go here
    options: {}
});