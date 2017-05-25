




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