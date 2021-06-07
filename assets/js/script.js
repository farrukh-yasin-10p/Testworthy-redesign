
// Carousel Section Search List
function searchList(a){
    var list = document.getElementById('list_search');
    list.style.display = a ;
}


// Edit Project Search List
function edit_searchList(a){
  var list = document.getElementById('list_search_edit');
  list.style.display = a ;
}


 


//==================//


var labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

var data = {
  labels: labels,
  datasets: [
    {
      label: 'Retest',
      backgroundColor: 'rgb(243, 194, 20)',
      borderColor: 'rgb(243, 194, 20)',
      data: [2, 13, 15, 21, 6, 30, 43],
      fill: true
      
    },
    {
      label: 'Failed',
      backgroundColor: 'rgb(231, 30, 30)',
      borderColor: 'rgb(231, 30, 30)',
      data: [2, 13, 15, 21, 6, 30, 43],
      fill: true
    },
    {
      label: 'Partial',
      backgroundColor: 'rgb(30, 170, 231)',
      borderColor: 'rgb(30, 170, 231)',
      data: [0, 20, 2, 8, 15, 26, 25],
      fill: true
    },
    {
      label: 'Passed',
      backgroundColor: 'rgb(36, 204, 9)',
      borderColor: 'rgb(36, 204, 9)',
      data: [0, 10, 5, 2, 20, 30, 45],
      fill: true
  },
  ]
};

$(document).ready(function () {
  // Owl Carousel Query
  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      items:1,
      nav: true,
      navText : ["<i class='fas fa-caret-left'></i>","<i class='fas fa-caret-right'></i>"]
  });
   // Owl Carousel Query End



  var ctx = document.getElementById('myChart').getContext('2d');
  ctx.height = 300;
  var myChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
          maintainAspectRatio: false,
        responsive: true,
        plugins: {
          // title: {
          //   display: true,
          //   text: (ctx) => 'Chart.js Line Chart - stacked='
          // },
          tooltip: {
            mode: 'index'
          },
        },
        interaction: {
          mode: 'nearest',
          axis: 'x',
          intersect: false
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Month'
            }
          },
          y: {
            stacked: true,
            title: {
              display: true,
              text: 'Value'
            }
          }
        }
      }
  });

// Test Changes & History Tabs Toggle
$('#tab-toggle button:first-child').addClass('active');
$('.tab-details').hide();
$('.tab-details:first').show();


// Click function
$('#tab-toggle button').click(function(){
  $('#tab-toggle button').removeClass('active');
  $(this).addClass('active');
  $('.tab-details').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});
// Test Changes & History Tabs Toggle End

})
