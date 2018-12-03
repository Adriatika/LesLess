$(document).ready(function(){
  $(".main__upArrow").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top}, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});
jQuery(function($){
  $(window).scroll(function(){
    // $('.main__upArrowDouble').css('display', 'block');
    var bottomOffset = $(window).height();
    if($(document).scrollTop() > (0.5*bottomOffset)){
      $('.main__upArrowDouble').addClass('arrowPosition').css('display', 'block');
    }else if($(document).scrollTop() < (0.5*bottomOffset)){
      $('.main__upArrowDouble').removeClass('arrowPosition').css('display', 'none');}
      if(($(document).scrollTop() + bottomOffset+300) > ($(document).height())){
        $('.main__upArrowDouble').removeClass('arrowPosition').css('display', 'none');}
      });
});
