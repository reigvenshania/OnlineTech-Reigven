
$(document).ready(function() {

  var angle = 0;
  var n = $('.carousel-item').length;
  var itemDegree = 360 / n;
  var interval;
  var autoplay = false;

  $('.carousel-item').each(function(index) {

    $(this).css({
      'transform': 'rotateY(' + (itemDegree * index) + 'deg) translateZ(275px)'
    });
  
  });

  function rotateCarousel() {

    $('.carousel').css({
      'transform': 'rotateY(' + angle + 'deg)'
    });

  }

  $('#next').click(function() {
    angle -= itemDegree;
    rotateCarousel();
  });

  $('#prev').click(function() {
    angle += itemDegree;
    rotateCarousel();
  });

  $('#autoplay').on('click', function() {

    if (!autoplay) {

      interval = setInterval(function(){
        angle -= itemDegree;
        rotateCarousel();
      }, 2000); // Change interval time to control rotation speed
      
      autoplay = true;

      $(this).text('Stop Autoplay');

    } else {

      clearInterval(interval);
      autoplay = false;
      $(this).text('Autoplay');

    }

  });

});