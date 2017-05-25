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
  
  var height = document.documentElement.clientHeight;
  var windowWidth = document.documentElement.clientWidth;

  // var length1 = windowWidth ＊ 158 / 1980 ;

  // $('<style>.grid-item-2-1{width:'length1'px;}</style>').appendTo(document.body);


}
  


);


$( window ).resize(function() {

 if($( window ).width() <=667){

    

  }
  else{

  }



});