




// $(document).ready( function() {
//   $("#service-content").load("services-design.html", function(){
//     var msnry = $('.grid').masonry({
//       itemSelector: '.grid-item',
//       columnWidth: '.grid-sizer',
//       percentPosition: true,
//       gutter: 2
//     });

//     $("div.lazy").lazyload({
//         effect : "fadeIn"
//     });

//     $("#architecturalgrid").click(function() {

//       if($( window ).width() <=667){
//         $("#architecturalgrid").addClass("grid-item-3-1");
//         $("#architecturalgrid").addClass("hidedesktop");
//         $("#architecturalgrid").insertAfter("#servicegrid");

//         $("#designgrid").removeClass("grid-item-3-1");
//         $("#designgrid").removeClass("hidedesktop");

//         $("#eventgrid").removeClass("grid-item-3-1");
//         $("#eventgrid").removeClass("hidedesktop");

//         $("#mediagrid").removeClass("grid-item-3-1");
//         $("#mediagrid").removeClass("hidedesktop");
//       }
      

//       $("#service-content").load("services-architectural.html", function(){

//         if($( window ).width() <=667){
//           $("#service6").insertAfter("#service1");
//         }

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
//     });

//     $("#designgrid").click(function() {

//       if($( window ).width() <=667){
//         $("#designgrid").addClass("grid-item-3-1");
//         $("#designgrid").addClass("hidedesktop");
//         $("#designgrid").insertAfter("#servicegrid");

//         $("#architecturalgrid").removeClass("grid-item-3-1");
//         $("#architecturalgrid").removeClass("hidedesktop");

//         $("#eventgrid").removeClass("grid-item-3-1");
//         $("#eventgrid").removeClass("hidedesktop");

//         $("#mediagrid").removeClass("grid-item-3-1");
//         $("#mediagrid").removeClass("hidedesktop");
//       }

//       $("#service-content").load("services-design.html", function(){
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
//     });

//     $("#eventgrid").click(function() {

//       if($( window ).width() <=667){
//         $("#eventgrid").addClass("grid-item-3-1");
//         $("#eventgrid").addClass("hidedesktop");
//         $("#eventgrid").insertAfter("#servicegrid");

//         $("#designgrid").removeClass("grid-item-3-1");
//         $("#designgrid").removeClass("hidedesktop");

//         $("#architecturalgrid").removeClass("grid-item-3-1");
//         $("#architecturalgrid").removeClass("hidedesktop");

//         $("#mediagrid").removeClass("grid-item-3-1");
//         $("#mediagrid").removeClass("hidedesktop");
//       }

//       $("#service-content").load("services-event.html", function(){
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
//     });

//     $("#mediagrid").click(function() {

//       if($( window ).width() <=667){
//         $("#mediagrid").addClass("grid-item-3-1");
//         $("#mediagrid").addClass("hidedesktop");
//         $("#mediagrid").insertAfter("#servicegrid");

//         $("#designgrid").removeClass("grid-item-3-1");
//         $("#designgrid").removeClass("hidedesktop");

//         $("#architecturalgrid").removeClass("grid-item-3-1");
//         $("#architecturalgrid").removeClass("hidedesktop");

//         $("#eventgrid").removeClass("grid-item-3-1");
//         $("#eventgrid").removeClass("hidedesktop");
//       }

//       $("#service-content").load("services-media.html", function(){

//         if($( window ).width() <=667){
//           $("#media6").insertAfter("#media3");
//         }

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
//     });


//   });



//   if($( window ).width() <=667){
//     $("#designgrid").addClass("grid-item-3-1");
//     $("#designgrid").addClass("hidedesktop");
//     $("#designgrid").insertAfter("#servicegrid");
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