
//$('input[name="dates"]').daterangepicker();
// $(function () {
//   $('input[name="daterange"]').daterangepicker({
//     opens: 'left'
//   }, function (start, end, label) {
//     console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
//   });
// });

$(function () {
  $('#daterange').daterangepicker({
    opens: 'center'
  }, 
  function (start, end, label) {
    $('input[name="daterange"]').removeAttr('hidden');
    $('input[name="daterange"]').val(start.format('MM/DD/YYYY')+' - '+end.format('MM/DD/YYYY'));
    // console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });
});

// $('#daterange').on('apply.daterangepicker', function(ev, picker) {
//   console.log(picker.startDate.format('YYYY-MM-DD'));
//   console.log(picker.endDate.format('YYYY-MM-DD'));
// });

// $(function () {
//   $('input[name="daterange"]').daterangepicker({
//     function (start, end, label) {
//       console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
//     }
//   }) 
// });



// Carousel Section Search List
function searchList(a){
    var list = document.getElementById('list_search');
    list.style.display = a ;
}


// Edit Project Search List
function edit_searchList(a){
  var list = document.getElementById('list_search_edit');
  list.style.display = a ;

  var list1 = document.getElementById('list_search_edit1');
  list1.style.display = a ;

  var list2 = document.getElementById('list_search_edit2');
  list2.style.display = a ;
}

//Tooltip

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

//set all your datepickers inputs
// $("#feRouteDate").datepicker({
//   //dateFormat: 'dd/mm/yy',
//   //maxDate: 0
// });


//You can show datepicker on click on the calendar icon
$(".ic-date").on("click", function(){
  $(this).siblings("input").datepicker("show");    
});


/* Top Nav Bar */


// $(window).scroll(function() {
//   if ($(this).scrollTop()>100)
//    {
//       $('.topnavbar').fadeIn(300);
//       $('.bodymenubar').fadeOut(300);
//    }
//   else
//    {
//     $('.topnavbar').stop().fadeOut(300);
//     $('.bodymenubar').stop().fadeIn(300);
//    }
// });

 


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
