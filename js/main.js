(function ($) {
    "use strict";

    /*=============================================
        =    		 Preloader			      =
    =============================================*/
    function preloader() {
        //$('.smart-page-loader').delay(0).fadeOut();
        jQuery('.smart-page-loader').delay(0).fadeOut();
        jQuery('body:not(".elementor-editor-active")').removeClass('wp-smart-body');
    };

    $(window).on('load', function () {
        preloader();
        //mainSlider();
        //aosAnimation();
        //wowAnimation();
    });
    /* ===============================  Mouse effect  =============================== */

    function mousecursor() {
        if ($("body")) {
            const e = document.querySelector(".cursor-inner"),
                t = document.querySelector(".cursor-outer");
            let n, i = 0,
                o = !1;
            window.onmousemove = function (s) {
                o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
            }, $("body").on("mouseenter", "a, .cursor-pointer", function () {
                e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
            }), $("body").on("mouseleave", "a, .cursor-pointer", function () {
                $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
            }), e.style.visibility = "visible", t.style.visibility = "visible"
        }
    };

    $(function () {
        mousecursor();
    });

    /* ==========  Mouse effect  =========== */
    $('.testimonial-home').owlCarousel({
        items: 1,
        animateOut: 'fadeOut',
        loop: true,
        nav: true,
        margin: 10,
    });
    $('.custom1').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items: 1,
        margin: 30,
        stagePadding: 30,
        smartSpeed: 450
    });
   
    $('.owl-demo2').owlCarousel({
        loop: true,
        autoplay: true,
        autoPlaySpeed: 5000,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        margin: 25,
        responsiveClass: true,
        navText: ["<img src='./images/left-arrow-small.png'/>", "<img src='./images/right-arrow-small.png'/>"],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 2,
                autoplay: true,
                autoplayHoverPause: false,
                nav: true,
                dots: false,
                loop: true
            }
        }
    })
   
   
   
    //Submenu Dropdown Toggle
    if ($('.main-header li.dropdown ul').length) {
        $('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

        //Dropdown Button
        $('.main-header li.dropdown .dropdown-btn').on('click', function () {
            $(this).prev('ul').slideToggle(500);
        });

        //Disable dropdown parent link
        //$('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) {
        //e.preventDefault();
        //});
    }

    //Mobile Nav Hide Show
    if ($('.mobile-menu').length) {

        var mobileMenuContent = $('.main-header .nav-outer .main-menu .navigation').html();
        $('.mobile-menu .navigation').append(mobileMenuContent);
        $('.sticky-header .navigation').append(mobileMenuContent);
        $('.mobile-menu .close-btn').on('click', function () {
            $('body').removeClass('mobile-menu-visible');
        });
        //Dropdown Button
        $('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
            $(this).prev('ul').slideToggle(500);
        });
        //Menu Toggle Btn
        $('.mobile-nav-toggler').on('click', function () {
            $('body').addClass('mobile-menu-visible');
        });

        //Menu Toggle Btn
        $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function () {
            $('body').removeClass('mobile-menu-visible');
        });

    }

    $(".ddd").on("click", function () {

        var $button = $(this);
        var oldValue = $button.closest('.sp-quantity').find("input.quntity-input").val();

        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }

        $button.closest('.sp-quantity').find("input.quntity-input").val(newVal);

    });

    /*=============================================
   =     Background Data Images     =
=============================================*/
    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled: true
        },

        zoom: {
            enabled: true,

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            opener: function (openerElement) {

                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }

    });


    jQuery(".filter-button").click(function () {
        var value = jQuery(this).attr('data-filter');

        if (value == "all") {
            //$('.filter').removeClass('hidden');
            jQuery('.filter').show('1000');
        }
        else {
            jQuery(".filter").not('.' + value).hide('3000');
            jQuery('.filter').filter('.' + value).show('3000');

        }
    });

    if (jQuery(".filter-button").removeClass("active")) {
        jQuery(this).removeClass("active");
    }
    jQuery(this).addClass("active");

    jQuery(".port-filter li").click(function () {
        jQuery(this).addClass('selected').siblings().removeClass('selected');
    });


})(jQuery);