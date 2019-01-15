

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:4000,
    margin:2,
    mouseDrag:true,
    merge:true,
    slideTransition:'.3s'
    smartSpeed: 2500
  });

 /* $(".btn-nav").on("click", function(){
    var target = $(this).data("target");
    $(target).toggleClass("nav__list--open")
  });

});
*/
