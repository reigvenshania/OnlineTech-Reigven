$(document).ready(function() {

    var angle = 0;
    var n = $('.image').length;
    var itemDegree = 360 / n;
    var interval;
    var autoplay = false;
  
    $('.image').each(function(index) {
  
      $(this).css({
        transform: 'rotateY(' + (itemDegree * index) + 'deg) translateZ(275px)'
      });
    
    });
  
    function rotateThumbnail() {
  
      $('.thumbnail').css({
        transform: 'rotateY(' + angle + 'deg)'
      });
  
    }
  
    $('#next').click(function() {
      angle -= itemDegree;
      rotateThumbnail();
    });
  
    $('#prev').click(function() {
      angle += itemDegree;
      rotateThumbnail();
    });
  
    $('#autoplay').on('click', function() {
  
      if (!autoplay) {
  
        interval = setInterval(function(){
          angle -= itemDegree;
          rotateThumbnail();
        }, 3000); // Change interval time to 3000 milliseconds for 3 seconds
        
        autoplay = true;
  
        $(this).text('Stop Autoplay');
  
      } else {
  
        clearInterval(interval);
        autoplay = false;
        $(this).text('Autoplay');
  
      }
  
    });
  
  });
  