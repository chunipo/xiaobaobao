var slider = new IdealImageSlider.Slider({
    selector: '#slider',
    height: 464, // Required but can be set by CSS
    interval: 4000
});
slider.addCaptions();
slider.addBulletNav();
slider.start();

$('#cap1').hover(function() 
{ 
    $('#cap1').css("background-image", "url('img/captaen/Retail Consumer Products-2.png')"); 
}); 

$('#cap1').mouseleave(function() 
{ 
    $('#cap1').css("background-image", "url('img/captaen/Retail Consumer Products-1.png')"); 
}); 

$('#cap2').hover(function() 
{ 
    $('#cap2').css("background-image", "url('img/captaen/Sport Brands-2.png')"); 
}); 

$('#cap2').mouseleave(function() 
{ 
    $('#cap2').css("background-image", "url('img/captaen/Sport Brands-1.png')"); 
}); 

$('#cap3').hover(function() 
{ 
    $('#cap3').css("background-image", "url('img/captaen/Property Urban  Design-2.png')"); 
}); 

$('#cap3').mouseleave(function() 
{ 
    $('#cap3').css("background-image", "url('img/captaen/Property Urban  Design-1.png')"); 
}); 

$('#cap4').hover(function() 
{ 
    $('#cap4').css("background-image", "url('img/captaen/Commodities-2.png')"); 
}); 

$('#cap4').mouseleave(function() 
{ 
    $('#cap4').css("background-image", "url('img/captaen/Commodities-1.png')"); 
}); 

$('#cap5').hover(function() 
{ 
    $('#cap5').css("background-image", "url('img/captaen/Wholesale  Logistics-2.png')"); 
}); 

$('#cap5').mouseleave(function() 
{ 
    $('#cap5').css("background-image", "url('img/captaen/Wholesale  Logistics-1.png')"); 
}); 

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