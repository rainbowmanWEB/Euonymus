window.addEventListener('load', function(event) { 
    $('.carousel-mini').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1200:{
                items:4
            }
        }
    })
});
