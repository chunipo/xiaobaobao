




// $(document).ready( function() {

//   $("#clients").click(function() {
//       clickclients();
//     });

//   $("#clients2").click(function() {
//       clickclients();
//     });

//   clickclients = function(){
//     $("#clients-content").load("clients-grids.html", function(){
//         $("#partners").removeClass("underlined");
//         $("#clients").addClass("underlined");

//         $("#partners2").removeClass("underlined");
//         $("#clients2").addClass("underlined");

//         $('.grid').masonry('destroy');

//         var msnry = $('.grid').masonry({
//           itemSelector: '.grid-item',
//           columnWidth: '.grid-sizer',
//           percentPosition: true,
//           gutter: 2
//         });

//         $("div.lazy").lazyload({
//             effect : "fadeIn"
//         });
//       });
//   }

//     $("#partners").click(function() {
//       clickPartners();
//     });

//     $("#partners2").click(function() {
//       clickPartners();
//     });

//     clickPartners = function(){
//       $("#clients-content").load("partners-grid.html", function(){
//         $("#partners").addClass("underlined");
//         $("#clients").removeClass("underlined");

//         $("#partners2").addClass("underlined");
//         $("#clients2").removeClass("underlined");

//         $('.grid').masonry('destroy');
        
//         var msnry = $('.grid').masonry({
//           itemSelector: '.grid-item',
//           columnWidth: '.grid-sizer',
//           percentPosition: true,
//           gutter: 2
//         });

//         $("div.lazy").lazyload({
//             effect : "fadeIn"
//         });
//       });
//     }


//   $("#clients-content").load("clients-grids.html", function(){
//     var msnry = $('.grid').masonry({
//       itemSelector: '.grid-item',
//       columnWidth: '.grid-sizer',
//       percentPosition: true,
//       gutter: 2
//     });

//     $("div.lazy").lazyload({
//         effect : "fadeIn"
//     });

//   });



//   if($( window ).width() <=667){

    

//   }


// });


// $( window ).resize(function() {

//  if($( window ).width() <=667){

    

//   }
//   else{

//   }



// });


$(document).ready( function() {
  var msnry = $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
    gutter: 2
  });

  $("div.lazy").lazyload({
      effect : "fadeIn"
  });
  
  if($( window ).width() <=667){


  }


});


$( window ).resize(function() {

 if($( window ).width() <=667){

    

  }
  else{

  }



});