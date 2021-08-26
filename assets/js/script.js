

// This will check all boxes inside the tree
function checkAll(tree) {
  console.dir(tree.jstree())
      tree.jstree(true).check_all();
  }
  
  function getchild(parentId){
  
  var arr = [
  {"name":"Verify that document with maximun 750+ pages","ParentID":"node6"},
    {"name":"Verify that document with maximun 750+ pages","ParentID":"node1"},
    {"name":"Verify that document with maximun 750+ pages","ParentID":"node1"},
    {"name":"Verify that document with maximun 750+ pages","ParentID":"node2"},
    {"name":"Verify that document with maximun 750+ pages","ParentID":"node3"},
    {"name":"Verify that document with maximun 750+ pages","ParentID":"node4"},
    {"name":"Verify that document with maximun 750+ pages","ParentID":"node5"},
    {"name":"Verify that document with maximun 750+ pages","ParentID":"node2"},
    {"name":"Verify that document with maximun 750+ pages","ParentID":"node2"},
    {"name":"Verify that document with maximun 750+ pages","ParentID":"node6"},
    {"name":"Verify that document with maximun 750+ pages","ParentID":"node5"},
    {"name":"Verify that document with maximun 750+ pages","ParentID":"node2"},
    {"name":"Verify that document with maximun 750+ pages","ParentID":"node2"},
    {"name":"Verify that document with maximun 750+ pages","ParentID":"node6"},
    {"name":"Verify that document with maximun 750+ pages","ParentID":"node5"},
    {"name":"Verify that document with maximun 750+ pages","ParentID":"node2"},
    {"name":"Verify that document with maximun 750+ pages","ParentID":"node2"},
    {"name":"Verify that document with maximun 750+ pages","ParentID":"node6"},
    {"name":"Verify that document with maximun 750+ pages","ParentID":"node5"},
    {"name":"Verify that document with maximun 750+ pages","ParentID":"node5"},
    {"name":"Verify that document with maximun 750+ pages","ParentID":"node5"},
    {"name":"Verify that document with maximun 750+ pages","ParentID":"node6"},
    {"name":"Verify that document with maximun 750+ pages","ParentID":"node7"},
    {"name":"Verify that document with maximun 750+ pages","ParentID":"node8"},
    {"name":"Verify that document with maximun 750+ pages","ParentID":"node8"},
    {"name":"Verify that document with maximun 750+ pages","ParentID":"node9"},
    {"name":"Verify that document with maximun 750+ pages","ParentID":"node9"},
    {"name":"Verify that document with maximun 750+ pages","ParentID":"node10"},
    {"name":"Verify that document with maximun 750+ pages","ParentID":"node10"},
    {"name":"Verify that document with maximun 750+ pages","ParentID":"node10"},
    {"name":"Verify that document with maximun 750+ pages","ParentID":"node11"},
    {"name":"Verify that document with maximun 750+ pages","ParentID":"node12"},
    {"name":"Verify that document with maximun 750+ pages","ParentID":"node12"},
    
    ]
    
      return arr.filter(a => a.ParentID == parentId);
  }
// js tree library
var tree_data = {
  "core": {
  "multiple" : false,
    "data": [
{
  "id": "node1",
  "parent": "#",
  "text": "<div class='jstree-textbox'><span class='jstree-text'>Prerequisites</span> <span class='jstree-counts'>(243/23)</span></div>" 
},
{
  "id": "node2",
  "parent": "node1",
  "text": "<div class='jstree-textbox'><span class='jstree-text'>Update</span></div>"
 
},
{
  "id": "node3",
  "parent": "node1",
  "text": "<div class='jstree-textbox'><span class='jstree-text'>Tutorials</span> <span class='jstree-counts'>(3/43)</span></div>"
 
},
 {
  "id": "node5",
  "parent": "node1",
  "text": "<div class='jstree-textbox'><span class='jstree-text'>Installation</span></div>"
 
},
{
  "id": "node4",
  "parent": "node2",
  "text": "<div class='jstree-textbox'><span class='jstree-text'>Goals</span></div>"
 
},

{
  "id": "node6",
  "parent": "node3",
  "text": "<div class='jstree-textbox'><span class='jstree-text'>Goals</span></div>"
 
},
{
  "id": "node13",
  "parent": "node2",
  "text": "<div class='jstree-textbox'><span class='jstree-text'>Goals</span></div>"
},
  
{
  "id": "node7",
  "parent": "#",
  "text": "<div class='jstree-textbox'><span class='jstree-text'>Installations</span> <span class='jstree-counts'>(3/43)</span></div>" 
},

{
  "id": "node8",
  "parent": "node7",
  "text":  "<div class='jstree-textbox'><span class='jstree-text'>Tutorials</span> <span class='jstree-counts'>(2/43)</span></div>"
 
},
{
  "id": "node9",
  "parent": "node7",
  "text": "<div class='jstree-textbox'><span class='jstree-text'>Installations</span></div>"
 
},

{
  "id": "node12",
  "parent": "node9",
  "text": "<div class='jstree-textbox'><span class='jstree-text'>Goals</span></div>"
 
}
]
  },
  "plugins" : ["checkbox"]
};


function clear_date(a){
  var x  = document.getElementById('clear_input');
  var y  = document.getElementById('clear_input2');
  x.value = "";
  x.hidden = true;
  y.value = "";
  y.hidden = true;
  a.hidden = true;
}

function clear_date2(b){
  var z  = document.getElementById('clear_input3');
  z.value = "";
  z.hidden = true;
  b.hidden = true;
}
function clear_date_tree(c){
  var x  = document.getElementById('clear_input');
  x.value = "";
  x.hidden = true;
  c.hidden = true;
}

$(function () {
  $('#daterange').daterangepicker({
    opens: 'center'
  }, 
  function (start, end, label) {
    $('#clear_cross').removeAttr('hidden');
    $('input[name="daterange"]').removeAttr('hidden');
    $('input[name="daterange"]').val(start.format('MM/DD/YYYY')+' - '+end.format('MM/DD/YYYY'));
    // console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });
});


$(function () {
  $('#single-date').daterangepicker({
    opens: 'left',
    singleDatePicker: true
  }, 
  function (start, end, label) {
    $('#clear_cross2').removeAttr('hidden');
    $('input[name="single-date"]').removeAttr('hidden');
    $('input[name="single-date"]').val(start.format('MM/DD/YYYY'));
  });
});



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


// assigned user Search List
function assigned_to(a){
  var list = document.getElementById('selectuser');
  list.style.display = a ;
}

function milestone_list(e,b){
  var x = document.getElementById(e);
  x.style.display = b;

}

function testsuite_list(b){
  var list = document.getElementById('testsuite_list');
  list.style.display = b;
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


var chartvar= document.getElementById('myChart');
if(chartvar){
  var ctx = chartvar.getContext('2d');
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

}
  
 
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

// js tree 
$('.collapse').on('show.bs.collapse', function(){
  $(this).parent().find(".icon-caret-right").removeClass("icon-caret-right").addClass("icon-caret-down");
  }).on('hide.bs.collapse', function(){
  $(this).parent().find(".icon-caret-down").removeClass("icon-caret-down").addClass("icon-caret-right");
 
  });


  $('#close-filter-btn').on("click",function(){
    $('#filter-col').hide();
    $('#open-filter-btn').removeAttr('hidden');
    $('#empty-div').removeAttr('hidden');
    $(this).hide();
  });

  $('#open-filter-btn').on("click",function(){
    $('#filter-col').show();
    $('#close-filter-btn').show();
    $('#empty-div').attr('hidden',true);
    $(this).attr('hidden' , true);
  });

})

// Test Case Hierarchy
$('#close-hierarchy-btn').on("click",function(){
  $('#open-hierarchy-btn').removeAttr('hidden');
  $('#test-case-hierarchy').addClass("bg-banner");
  $('#test-case-hierarchy').addClass("tree-style-margin-close");
  $('#test-case-hierarchy').removeClass("tree-style-margin-open");
  $('#hierarchy-col').attr('hidden',true);
  $(this).attr('hidden' , true);
});

$('#open-hierarchy-btn').on("click",function(){
  $('#close-hierarchy-btn').removeAttr('hidden');
  $('#hierarchy-col').removeAttr('hidden');
  $('#test-case-hierarchy').removeClass("bg-banner");
  $('#test-case-hierarchy').removeClass("tree-style-margin-close");
  $('#test-case-hierarchy').addClass("tree-style-margin-open");
  $(this).attr('hidden' , true);
});



jQuery(function($) {
  // js tree library
$('#jstree').jstree(tree_data);
$('#jstree').jstree({core:{multiple : false}});



// Try to check all boxes, here it works. Why.
$("#btn").click(function(){
    checkAll($("#jstree"));
})

$('#jstree').on("select_node.jstree", function (e, data1) { 
  console.log("hello");

var child = getchild(data1.node.id);
var r = [];
child.forEach((item) => {
  
  r.push(item.name);
});

var html_data= "" ; 
r.forEach((item) => {
html_data=html_data+'<div class="custom-control custom-checkbox"> <input class="custom-control-input" type="checkbox"> <label class="custom-control-label" for=""></label> <span data-toggle="tooltip" data-placement="top"  title="'+item+'">'+item+'</span> </div>';

});

$('#event_result').html(html_data);

//Tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

}
);

});


// Populate the tree with some generic data




function formsubmit(a){
  a.preventDefault();

  var t = document.getElementById('input-check');
  var x = document.getElementById('input-warning-text');
  var y = document.getElementById('tvalid');
  var z1 = document.getElementById('input-list1');
  var z2 = document.getElementById('input-list2');
  var z3 = document.getElementById('input-list3');
  var z4 = document.getElementById('input-list4');
      if(t.value.length===0){
        //alert("Please enter your name");
        t.focus();
        // t.style.background = "rgba(231, 30, 30, 0.06)";
        // t.style.border = "1px solid #e71e1e";
        t.classList.add("required");
        x.classList.add("d-inline-block");
        return false;
      }

      if(z1.value.length===0){
        //alert("Please enter your name");
        z1.focus();
        // t.style.background = "rgba(231, 30, 30, 0.06)";
        // t.style.border = "1px solid #e71e1e";
        z1.classList.add("required");
        //x.classList.add("d-inline-block");
        return false;
      }

      if(z2.value.length===0){
        z2.focus();
        z2.classList.add("required");
        return false;
      }
      if(z3.value.length===0){
        z3.focus();
        z3.classList.add("required");
        return false;
      }
      if(z4.value.length===0){
        z4.focus();
        z4.classList.add("required");
        return false;
      }

  if(y.value.length>256){
    y.focus();
      return false;
  }
      t.classList.remove("required");
      x.classList.remove("d-inline-block");
  } 

  function ontitlechange(e){
    var x = document.getElementById('input-warning-text');
    e.classList.remove("required");
    x.classList.remove("d-inline-block");
  }






  function textCount(e){
    var x = document.getElementById('textCounter');
    var y = document.getElementById('count-text');
var z = document.getElementById('count-text-icon');
   
  y.innerText = e.value.length ;

  if(e.value.length>256){
    x.classList.add("warning-text");
    z.classList.remove("d-none");
    e.classList.add('required');
  }
else{
  x.classList.remove("warning-text");
  z.classList.add("d-none");
  e.classList.remove('required');
}
  }

  function myFunction(e,i) {
    var dots = document.getElementById("dots"+i);
    var moreText = document.getElementById("more"+i);

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      e.innerHTML = "See More"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      e.innerHTML = "See Less"; 
      moreText.style.display = "inline";
    }

  }
