(function($){
    "use strict"; // Start of use strict

      var ktmobile, init_js_height, init_MainMenu, init_MobileMenu, init_wow, $back_to_top, offset, offset_opacity, scroll_top_duration;

    /* ## Mobile detect
     *****************************************************/
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        ktmobile = true;
        $("html").addClass("mobile");
    }
    else {
        ktmobile = false;
        $("html").addClass("no-mobile");
    }

    // /* ## home-load animation
    // ****************************************************/
    // $(window).load(function () {
    //   $('.slider-preloader').fadeOut(200);
    //   $('.hero-unit').show();
    //
    //   setTimeout(function(){
    //     $('.video-slider').css({
    //       'display': 'block'
    //     });
    //   }, 200);
    //   $('.video-content').addClass('animated bounceInUp');
    // });

    /* ## Scripts initialization
    ****************************************************/
    $(window).load(function() {
      $(window).trigger('resize');

      /* ## Scripts ready
      ******************************************/
      init_MainMenu();
      init_MobileMenu();
      init_wow();
    });


    /* ## Scripts resize
    ****************************************************/
    $(window).resize(function() {
      init_js_height();

      /* ## Sticky header
      ******************************************/
      if ($.fn.ktSticky) {
        $('.navbar-container.sticky-header').ktSticky({
          contentSticky: '',
          offset: 65
        });
      }

      /* ## Disable mobile menu in desktop
      ******************************************/
      if ($(window).width() >= 1200) {
        $('body').removeClass('opened-nav-animate');
        $('#hamburger-icon').removeClass('active');
      }
    });

    /* ## youtube video
    ****************************************************/
    $('.popup-youtube, popup-youtube2').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'my-mfp-zoom-in',
      removalDelay: 300,
      preloader: !0,
      closeOnBgClick: false,
      fixedBgPos: true,
      overflowY: 'auto'
    });

    $('#image-popups, #image-popup2').magnificPopup({
      delegate: 'a',
      type: 'image',
      removalDelay: 500,
      callbacks: {
        beforeOpen: function() {
          this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
          this.st.mainClass = this.st.el.attr('data-effect');
        }
      },
      closeOnContentClick: true,
      midClick: false
    });


    /* ## Height 100%
    ****************************************************/
    init_js_height = function() {
      $('.item-height-window').css('height', $(window).height());
      $('.item-height-parent').each(function() {
        $(this).height($(this).parent().first().height());
      });
    };

    /* ## Main Menu
    ****************************************************/
    init_MainMenu = function() {
      $('ul#main-navigation').superfish({
        hoverClass: 'hovered',
        popUpSelector: 'ul.sub-menu-dropdown',
        pathClass: 'overrideThisToUse',
        animation: {},
        animationOut: {}
      });
    };


    /* ## Main Menu
    ****************************************************/
    init_MobileMenu = function() {
      $('body').on('click', '#hamburger-icon', function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('body').toggleClass('opened-nav-animate');
        setTimeout((function() {
          $('body').toggleClass('opened-nav');
        }), 100);
      });
      $('ul.navigation-mobile ul.sub-menu-dropdown, ul.navigation-mobile').each(function() {
        $(this).parent().children('a').prepend('<span class="open-submenu"></span>');
      });
      $('.open-submenu').on('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        $(this).closest('li').toggleClass('active-menu-item');
        $(this).closest('li').children('.sub-menu-dropdown').slideToggle();
      });
      $(window).resize(function() {
        var $navHeight;
        $navHeight = $(window).height() - $('.navbar-container').height();
        $('.main-nav-mobile').css({
          'max-height': $navHeight
        });
      });
    };

    /* ## WOW animations
    ****************************************************/
    init_wow = function() {
      var wow;
      wow = new WOW({
        mobile: false
      });
      if ($('body').hasClass('appear-animate')) {
        wow.init();
      }
    };


    /* ## Scroller page
    ****************************************************/
    jQuery(document).ready(function($) {
      offset = 300;
      offset_opacity = 1200;
      scroll_top_duration = 700;
      $back_to_top = $('.cd-top');
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $back_to_top.addClass('cd-is-visible');
        } else {
          $back_to_top.removeClass('cd-is-visible cd-fade-out');
        }
        if ($(this).scrollTop() > offset_opacity) {
          $back_to_top.addClass('cd-fade-out');
        }
      });
      $back_to_top.on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
          scrollTop: 0
        }, scroll_top_duration);
      });
    });



})(jQuery); // End of use strict
