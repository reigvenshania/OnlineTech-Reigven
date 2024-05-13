$(document).ready(function() {

    $('.accordion-header').on('click'), function() {
        $(this).next('.accordion-content').slideToggle();
        $(this).parent('.accordion-item').siblings().find('.accordion-content').slideUp();

        //$(this).find('.fa').toggleClass('fa-minus');
        //$(this).parent('.accordion-item').siblings().find('.fa-minus').addClass('fa-plus');

    });
  
  });
  