$(document).ready(function() {

        var result_1;
        var mode_1;
      
        $('#rec-compute').on('click', function() {
      
          var length_ = $('#rec-length').val();
          var width_ = $('#rec-width').val();
          mode_1= $('#rec-mode').val();
      
          if (mode_1 == 'Rec-Area') {
      
            result_1 = length_ * width_;
      
      
          } else {
      
            result_1 = (2 * length_) + (2 * width_);
      
          }
      
          $('#rec-result').val(result_1.toFixed(2));
      
        });
      
        $('#rec-mode').on('change', function() {
      
          mode_1 = $('#rec-mode').val();
      
            if (mode_1 == 'Rec-Area') {
      
              mode_1 = 'Rectangle - Area';
      
            } else {
      
              mode_1 = 'Rectangle - Perimeter';
      
            }
          
          $('#rec-legend').text(mode_1);
      
        });
        
    });

    $(document).ready(function() {

        var result_2;
        var mode_2;
      

        $('#tri-compute').on('click', function() {
      
          var base_ = parseFloat($('#tri-base').val());
          var height_ = parseFloat($('#tri-height').val());
          var side1 = parseFloat($('#tri-side1').val());
          var side2 = parseFloat($('#tri-side2').val());
          var side3 = parseFloat($('#tri-side3').val());
      
          if (mode_2 == 'Triangle - Area') {
      
            result_2 = 0.5 * base_ * height_;
      
      
          } else {
      
            result_2 = (side1 + side2 + side3 );
    
          }
      
          $('#tri-result').val(result_2.toFixed(2));
      
        });
      
        $('#tri-mode').on('change', function() {
      
          mode_2 = $('#tri-mode').val();
      
            if (mode_2 == 'Tri-Area') {
      
              mode_2 = 'Triangle - Area';
              $('.per-container').hide();
              $('.area-container').show();
             

      
            } else {
      
            mode_2 = 'Triangle - Perimeter';
                $('.area-container').hide();
                $('.per-container').show();
               
      
            }
          
          $('#tri-legend').text(mode_2);
      
        });
      
    
        
    });

 
    
    
    $(document).ready(function() {

        var result_3;
        var mode_3;
      
        $('#cir-compute').on('click', function() {
      
          var radius_ = $('#cir-radius').val();
    
          mode_3 = $('#cir-mode').val();
      
          if (mode_3 == 'Cir-Area') {
      
            result_3 = (Math.PI  * (radius_*radius_));
      
      
          } else {
      
            result_3 = (2 * Math.PI * radius_);
      
          }
      
          $('#cir-result').val(result_3.toFixed(2));
      
        });
      
        $('#cir-mode').on('change', function() {
      
          mode_3 = $('#cir-mode').val();
      
            if (mode_3 == 'Cir-Area') {
      
              mode_3 = 'Circle - Area';
      
            } else {
      
              mode_3 = 'Circle - Perimeter';
      
            }
          
          $('#cir-legend').text(mode_3);
      
        });
      
        $('#triangle').show();
        $('#circle').show();
        
    });