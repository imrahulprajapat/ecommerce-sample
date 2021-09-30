(function( $ ) {

    // for maintaining same height footer features sections
    
    $.fn.footer_feature = function(options) {
        
        var settings = $.extend({
            // These are the defaults.
            matching_to: ".parent",
            apply_for: ".child",
            extra_width: 0
        }, options );

        var $this = $(this);

        function change(){

          var highestBox = 0; 
          $(settings.apply_for).css("height","auto");
          $(settings.apply_for).find(".img").css("line-height","100%");
          $this.find(settings.matching_to).each(function(){     
              // Cache the highest

              if($(this).outerHeight() > highestBox) {
                highestBox = $(this).outerHeight(); 
              }

              // Set the height of all those children to whichever was highest 
          });

          $(settings.apply_for).css("height",highestBox+"px");

          if($(window).width() > 559){
            $(settings.apply_for).find(".img").css("line-height",highestBox+"px");
          }

          highestBox = 0;
        }

        $(document).ready(function(){
          setTimeout(function(){ change(); }, 50);
        });
        $(window).resize(function(){
          setTimeout(function(){ change(); }, 50);
        });

    };
 
}( jQuery ));