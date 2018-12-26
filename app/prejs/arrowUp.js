var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});
$(window).scroll(function(){
  var clfx = $(".wrapper").height()-1450;
  if($(window).scrollTop()>300 && $(window).scrollTop()<clfx){
      $(".main__upArrowDouble").fadeIn();
    }
    if($(window).scrollTop()>=clfx){
      $(".main__upArrowDouble").fadeOut();  
    }
    if($(window).scrollTop()<=300){
      $(".main__upArrowDouble").fadeOut();    
    }
})
// jQuery(function($){
//   $(window).scroll(function(){
//     var bottomOffset = $(window).height();
//     if($(document).scrollTop() > (0.2*bottomOffset)){
//       $('.main__upArrowDouble').addClass('arrowPosition').css('display', 'block');
//     }else if($(document).scrollTop() < (0.5*bottomOffset)){
//       $('.main__upArrowDouble').removeClass('arrowPosition').css('display', 'none');}
//       if(($(document).scrollTop() + bottomOffset+300) > ($(document).height())){
//         $('.main__upArrowDouble').removeClass('arrowPosition').css('display', 'none');}
//       });
// });
