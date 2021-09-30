$(window).load(function() {
  $("body").removeClass("ds-no-transition");
});

jQuery(document).ready(function() {

    // Bootsrap select script
    $('.search_select').selectpicker({
      style: 'input-group-btn',
      size: 4
    });

    $('.lang_select').selectpicker({
      style: 'input-group-btn form-control',
      size: 4
    });

    $('.homepage_brand_list').selectpicker({
      style: 'selct-box',
      size: 4
    });

    /* hover effect on header menus */
    var $el, 
        leftPos, 
        newWidth,
        $magicdot,
        $magicline,
        $mainNav = $(".header-line-wrapper .ds-horizontal-line"),
    	  $menu_active = $(".ds-nav > li > a.active");
        $wrapper = $(".ds-nav-wrapper");


        $mainNav.append("<span id='magicdot'></span>");

        $mainNav.append("<span id='magicline'></span>");
    function resixert(){
        $magicdot = $("body").find("#magicdot");
        $magicline = $("body").find("#magicline");
        if($(".ds-nav").find($menu_active).length > 0){
        	var $initial_left = parseInt($menu_active.parent().position().left)+(parseInt($menu_active.width())/2)-7;
          if($("body").hasClass("rtl")){
              $initial_left = $initial_left + 27;
          }
        }
        else{
          var $initial_left = 15;

          if(!$("body").hasClass("rtl")){
            if($initial_left == 0){
              $initial_left = $initial_left+15;
            }
          }
          if($("body").hasClass("rtl")){
              $initial_left = $wrapper.outerWidth();
          }
        }

        if($("body").hasClass("rtl")){
          $magicdot
            .css("right","auto");
          $magicline
            .width($wrapper.outerWidth()-$initial_left)
            .css("left",$initial_left-32)
            .data("origLeft", $wrapper.outerWidth()-$initial_left);
          $magicdot
            .css("left",$initial_left-27)
            .data("origLeft", $initial_left-27);
        }
        else{
          $magicline
            .width($initial_left-7)
            .css("left","16px")
            .data("origLeft", $initial_left-7);
          $magicdot
            .width($(".current_page_item").width())
            .css("left",$initial_left)
            .data("origLeft", $initial_left)
            .data("origWidth", $magicdot.width());
        }
        $("body").find(".ds-nav > li > a").hover(function() {
            $el = $(this);
            $magicdot.addClass("zooming-infinite");
            leftPos = $el.parent().position().left;
            newWidth = $el.width();
            leftPos = parseInt(leftPos)+(parseInt(newWidth)/2)-7;
            $magicdot.stop().animate({
                left: leftPos
            });

            if($("body").hasClass("rtl")){
              $magicline.stop().animate({
                  width: $wrapper.outerWidth()-leftPos-25
              });
            }
            else{
              $magicline.stop().animate({
                  width: leftPos-7
              });
            }

        }, function() {
        	$magicdot.removeClass("zooming-infinite");
            $magicdot.stop().animate({
                left: $magicdot.data("origLeft")
            });   
            $magicline.stop().animate({
                width: $magicline.data("origLeft")
            });   
        });
    }

    resixert();


    $(window).resize(function(){
      resixert();
    });

    /* end */

    // Ripple style script

    var parent, ink, d, x, y;

    $(".ripple").hover(function(e) {
      
      var item = $(this);
     
        parent = item;
        parent.css("overflow","hidden");
        //create .ink element if it doesn't exist
        if (parent.find(".ink").length == 0)
          parent.prepend("<div class='ink'></div>");

        ink = parent.find(".ink");
        //incase of quick double clicks stop the previous animation
        ink.removeClass("animate");
        ink.removeClass("end");
        //set size of .ink
        if (!ink.height() && !ink.width()) {
          //use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
          d = Math.max(parent.outerWidth(), parent.outerHeight());
          ink.css({
            height: d,
            width: d
          });
        }

        //get click coordinates
        //logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
        x = e.pageX - parent.offset().left - ink.width() / 2;
        y = e.pageY - parent.offset().top - ink.height() / 2;

        //set the position and add class .animate
        ink.css({
          top: y + 'px',
          left: x + 'px'
        }).addClass("animate");
        ink.addClass("end");
      
    },function(e) {
      ink.remove();
    });

    // Go down arrow function
    $("a.go-down-arrow").click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $("#"+$(this).attr("href")).offset().top+30},
            'slow');          
    });

    // Go up arrow function
    $("a.go-up-arrow").click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0},
            2000);          
    });


    // slider dot todggle function
    var slick_rtl = false;
    if($("body").hasClass("rtl")){
       var slick_rtl = true;
    }

    // Feature section slider 
    $('.fearture_slider').slick({
      dots: false,
      infinite: true,
      slidesToShow: 3,
      speed:2000,
      rtl:slick_rtl,
      slidesToScroll: 1,
      nextArrow:"<a href='#' class='sider-arrow right'><i class='fa fa-angle-right' aria-hidden='true'></i></a>",
      prevArrow:"<a href='#' class='sider-arrow left'><i class='fa fa-angle-left' aria-hidden='true'></i></a>",
      responsive: [
        {
          breakpoint: 991,
          settings: {
          	slidesToShow: 2,
          }
        },
        {
          breakpoint: 767,
          settings: {
          	slidesToShow: 2,
          	arrows:false,
            dots: true,
          }
        },
        {
          breakpoint: 460,
          settings: {
          	slidesToShow: 1,
          	arrows:false,
            dots: true,
          }
        }
      ]
    });

    // Hot deal slider
    $('.hotdeal_slider').slick({
      dots: false,
      infinite: true,
      slidesToShow: 3,
      speed:2000,
      rtl:slick_rtl,
      slidesToScroll: 1,
      nextArrow:"<a href='#' class='sider-arrow right'><i class='fa fa-angle-right' aria-hidden='true'></i></a>",
      prevArrow:"<a href='#' class='sider-arrow left'><i class='fa fa-angle-left' aria-hidden='true'></i></a>",
      responsive: [
        {
          breakpoint: 1199,
          settings: {
          	slidesToShow: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
          	slidesToShow: 1,
          	arrows:false,
            dots: true,
          }
        }
      ]
    });
    // related slider
    $('.related_slider').slick({
      dots: false,
      infinite: true,
      slidesToShow: 4,
      speed:2000,
      rtl:slick_rtl,
      slidesToScroll: 1,
      nextArrow:"<a href='#' class='sider-arrow right'><i class='fa fa-angle-right' aria-hidden='true'></i></a>",
      prevArrow:"<a href='#' class='sider-arrow left'><i class='fa fa-angle-left' aria-hidden='true'></i></a>",
      responsive: [
        {
          breakpoint: 1199,
          settings: {
          	slidesToShow: 3
          }
        },
        {
          breakpoint: 767,
          settings: {
          	slidesToShow: 1,
          	arrows:false,
            dots: true,
          }
        }
      ]
    });
    
        // related slider
    $('.slider-nav').slick({
      dots: false,
      infinite: true,
      slidesToShow: 4,
      speed:2000,
      rtl:slick_rtl,
      slidesToScroll: 1,
      nextArrow:"<a href='#' class='sider-arrow right'><i class='fa fa-angle-right' aria-hidden='true'></i></a>",
      prevArrow:"<a href='#' class='sider-arrow left'><i class='fa fa-angle-left' aria-hidden='true'></i></a>",
      responsive: [
        {
          breakpoint: 1199,
          settings: {
          	slidesToShow: 4
          }
        },
        {
          breakpoint: 767,
          settings: {
          	slidesToShow: 1,
          	arrows:false,
            dots: true,
          }
        }
      ]
    });

    // brand slider 
    $('.brand-slider').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      rtl:slick_rtl,
      arrows:false
    });

    // banner Slider
    $('.banner_slider').slick({
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 2000,
      fade:true,
      rtl:slick_rtl,
      slidesToShow: 1,
      swipe:false,
      slidesToScroll: 1,
      arrows:true,
      nextArrow:"<a href='#' class='sider-arrow right'><i class='fa fa-angle-right' aria-hidden='true'></i></a>",
      prevArrow:"<a href='#' class='sider-arrow left'><i class='fa fa-angle-left' aria-hidden='true'></i></a>",
      responsive: [
        {
          breakpoint: 767,
          settings: {
          	arrows:false,
            dots: true,
          }
        }
      ]
    });

    // Sidebar script
    var trigger = $('.sidebar_toggle_btn'),
        overlay = $('.overlay'),
       isClosed = false;

      trigger.click(function () {
        hamburger_cross();      
      });

      overlay.click(function () {
        hamburger_cross();  
      });

      function hamburger_cross() {
        if (isClosed == true) {          
          overlay.hide();
          trigger.removeClass('is-open');
          trigger.addClass('is-closed');
          isClosed = false;
        } else {   
          overlay.show();
          trigger.removeClass('is-closed');
          trigger.addClass('is-open');
          isClosed = true;
        }
    }
    $('.sidebar_toggle_btn').click(function () {
          $('body').toggleClass('toggled');
    }); 
    $('.overlay').click(function () {
          $('body').toggleClass('toggled');
    }); 


    // foter features height matching plugin
    $(".footer-feartures").footer_feature({
         matching_to: ".features",
         apply_for: ".features"
    });


    // Count down function for hotdeals 
    $("body").find(".ends_in").each(function(){
        $ends_in = parseInt($(this).attr("init"));

        if($ends_in < 86400){
            $(this).countdown( {
                from: $ends_in, // 3 minutes (3*60)
                to: 0, // stop at zero
                movingUnit: 1000, // 1000 for 1 second increment/decrements
                outputPattern: 'Ends $hour : $minute : $second',
                timerEnd: function() {
                    this.css( { 'text-decoration':'line-through' } ).animate( { 'opacity':.5 }, 500 );
                }
            } );
        }
        else{
            $(this).countdown( {
                from: $ends_in, // 3 minutes (3*60)
                to: 0, // stop at zero
                movingUnit: 1000, // 1000 for 1 second increment/decrements
                outputPattern: 'Ends $day Days $hour : $minute : $second',
                timerEnd: function() {
                    this.css( { 'text-decoration':'line-through' } ).animate( { 'opacity':.5 }, 500 );
                }
            } );
        }
    });


    // side-heading bottom line animations 
    jQuery('.ds-default-line-wrapper').addClass("post-hidden ").viewportChecker({
      classToAdd: 'post-visible animated', // Class to add to the elements when they are visible
      offset: 200    
    });

});

$(document).ready(function(){
    if(!$("body").hasClass("home-page")){      
        wrapper_top_set();
    }
});
$(window).resize(function(){

    if(!$("body").hasClass("home-page")){      
        wrapper_top_set();
    }
});
function wrapper_top_set(){
    if($(window).width() > 767){
      var header_height = $("#header").height();
      $("#wrapper").css("padding-top",header_height+"px");
    }
    else{
      $("#wrapper").css("padding-top","0px");
    }
}

$("#range-slider").slider({});
var res = $("#range-slider").val().split(",");
$("#range-slider-value").html("<span class='pull-left'>QR "+res[0]+"</span><span class='pull-left'>&nbsp;-&nbsp;</span><span class='pull-left'>QR "+res[1]+"</span>");
$("#range-slider").slider().on("change", function() {
 var res = $("#range-slider").val().split(",");
 $("#range-slider-value").html("<span class='pull-left'>QR "+res[0]+"</span><span class='pull-left'>&nbsp;-&nbsp;</span><span class='pull-left'>QR "+res[1]+"</span>");

});


$(document).ready(function(){
    fiter_height();
    $('[data-target="#filter"]').click(function () {
        $('#qfilter').removeClass('collapse in').addClass('collapsing').removeClass('collapse');
    });
    $('[data-target="#qfilter"]').click(function () {
        $('#filter').removeClass('collapse in').addClass('collapsing').removeClass('collapse');
    });
});
$(window).resize(function(){ 
    fiter_height();
});
function fiter_height(){
    if($(window).width() < 1024){
      var w_h = $(window).height()-120;
      $(".fiter-scroller-body").css("height",w_h+"px");
    }
    else{
      $(".fiter-scroller-body").css("height","auto");
    }
}

$('.filter-options .filter-option-list .panel-heading').click(function () {
    $(this).toggleClass("active");
    var body_panel = $(this).closest(".panel").find(".panel-body");
    if($(this).hasClass("active")){
      body_panel.slideDown(300);
    }
    else{
      body_panel.slideUp(300);
    }
});

jQuery(function($) {
    var $cache = $('.filter-section');
    var $cache1 = $('.filter-body');
    function fixDiv() {
          var $cache_height = $('.filter-section').height();
        var footer = $cache.offset().top;
        var peak_point = $(window).scrollTop()+$(window).height()-$cache_height;
        if ( peak_point < footer)
          $cache1.addClass("make_fixed");
      else
            $cache1.removeClass("make_fixed");
     }

    $(window).scroll(function(){
      fixDiv();
    });
    fixDiv();
});