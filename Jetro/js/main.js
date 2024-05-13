$(document).ready(function(){
  

    $('.accordion-header').click(function(){
        $(this).toggleClass('active').next('.accordion-content').slideToggle();


        $('.accordion-content').not($(this).next()).slideUp();
        $('.accordion-header').not($(this)).removeClass('active');
    });


});
