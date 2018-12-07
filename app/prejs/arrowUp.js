var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

jQuery(function($){
  $(window).scroll(function(){
    var bottomOffset = $(window).height();
    if($(document).scrollTop() > (0.2*bottomOffset)){
      $('.main__upArrowDouble').addClass('arrowPosition').css('display', 'block');
    }else if($(document).scrollTop() < (0.5*bottomOffset)){
      $('.main__upArrowDouble').removeClass('arrowPosition').css('display', 'none');}
      if(($(document).scrollTop() + bottomOffset+300) > ($(document).height())){
        $('.main__upArrowDouble').removeClass('arrowPosition').css('display', 'none');}
      });
});
