const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function(){
    
    $nav = $('.mainnav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event toggle menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

    //owl-carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-nav .owl-nav-prev'), $('.owl-nav .owl-nav-next')],
        responsive: responsive
    });

    //move up button
    $('.move-up span').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    // AOS Instance
    AOS.init();

});