$(document).ready(function () {

    $('.menu-btn').click(function () {
        $('.xs-nav').show();
        $('.main-xs-nav').addClass('inscreen');
        $('.main-xs-nav').removeClass('outscreen');
        $('body').css("overflow", "hidden");
    });
    $('.xs-nav').click(function () {
        $('.xs-nav').fadeOut(500);
        $('.main-xs-nav').addClass('outscreen');
        $('.main-xs-nav').removeClass('inscreen');
        $('body').css("overflow", "auto");
    });
    $(".links").click(function (e) {
        e.stopPropagation();
    });

    // Main Slider
    $('.main-slider').owlCarousel({
        items: 1,
        autoplay: true,
        margin: 5,
        rtl: true,
        loop: true,
        nav: false,
        dots: true,
    });


    //swiper

    var categsSwiper = new Swiper('#catslider', {
        slidesPerView: 'auto',
    });

    //swiper

    if ($(window).width() < 992) {
        $(".linksheading").addClass("accordion");
        $(".foot-nav").addClass("panel");
    }
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
});