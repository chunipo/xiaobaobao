// var slider = new IdealImageSlider.Slider({
//     selector: '#slider',
//     height: 349, // Required but can be set by CSS
//     interval: 4000
// });
// slider.addCaptions();
// slider.addBulletNav();
// slider.start();


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