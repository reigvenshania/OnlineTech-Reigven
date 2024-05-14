$(document).ready(function(){

    

  
    $('.accordion-title').click(function(){
        $(this).toggleClass('active').next('.accordion-content').slideToggle();


        $('.accordion-content').not($(this).next()).slideUp();
        $('.accordion-title').not($(this)).removeClass('active');
    });


});
