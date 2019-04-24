// Start Navbar 
$(function () {
    $('.bars').click(function () {
        $('.sm-ul-container').fadeToggle();
    });

    $('.sm-ul-container').click(function () {
        $(this).fadeOut();
    });

    $('.sm-ul').click(function (e) {
        e.stopPropagation();
    });
});

$(function () {
    $('.office-li a').click(function () {
        $('.office-li .office-sm-ul').slideToggle();

        $('.home-li .home-sm-ul').slideUp();
        $('.edu-li .edu-sm-ul').slideUp();
        $('.hotels-li .hotels-sm-ul').slideUp();
        $('.metallic-li .metallic-sm-ul').slideUp();
        $('.furn-li .furn-sm-ul').slideUp();
        $('.pcc-li .pcc-sm-ul').slideUp();
    });



    $('.hotels-li a').click(function () {
        $('.hotels-li .hotels-sm-ul').slideToggle();

        $('.home-li .home-sm-ul').slideUp();
        $('.office-li .office-sm-ul').slideUp();
        $('.furn-li .furn-sm-ul').slideUp();
        $('.pcc-li .pcc-sm-ul').slideUp();
    });

    $('.furn-li a').click(function () {
        $('.furn-li .furn-sm-ul').slideToggle();

        $('.home-li .home-sm-ul').slideUp();
        $('.office-li .office-sm-ul').slideUp();
        $('.hotels-li .hotels-sm-ul').slideUp();
        $('.pcc-li .pcc-sm-ul').slideUp();
    });
    $('.pcc-li a').click(function () {
        $('.pcc-li .pcc-sm-ul').slideToggle();

        $('.home-li .home-sm-ul').slideUp();
        $('.office-li .office-sm-ul').slideUp();
        $('.edu-li .edu-sm-ul').slideUp();
        $('.hotels-li .hotels-sm-ul').slideUp();
        $('.metallic-li .metallic-sm-ul').slideUp();
        $('.furn-li .furn-sm-ul').slideUp();
    });
    
});



var nav  = document.querySelector('nav');
var html = document.querySelector('html');

window.onscroll = function () {
    'use strict';
    if (pageYOffset >= 70) {
        nav.setAttribute('style', 'background-color:#1B1C1E;border-bottom: 1px solid #181718;'); 
    } else {
        nav.setAttribute('style', 'background:none;box-shadow:none');  
    }
}

// End Navbar 


/* Start slider of hot deals */

$('.owl-carousel').owlCarousel({
    mouseDrag:false,
    touchDrag:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    loop:true,
    nav:true,
    pagination:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },

        850:{
            items:3
        },

        1500:{
            items :4
        }
    }
});

/* End slider of hot deals */


/* Start Scrolling to top */
$(document).ready(function () {
    $('.scrolltop').click(function() {
        $('html, body').animate({
            scrollTop : $('#top').offset().top
        }, 1000);
    });
});
/* End Scrolling To top */

/* Start About */

$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.about').offset().top - 250) {
            $('.about').animate({
                opacity : 1,
            }, 500);
        }
    })
}) 

/* End About */

/* Start M.V.G */
$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.m-v-g').offset().top - 400) {
            $('.m-v-g .goal').animate({
                opacity: 1,
            }, 200);

            $('.m-v-g .vision').delay(500).animate({
                opacity: 1,
            }, 200);

            $('.m-v-g .mission').delay(1000).animate({
                opacity: 1,
            }, 200);
        }
    });
});
/* End M.V.G */
