$(document).ready(function() {
    
    $('#splashPage-header').animate({
        'letter-spacing': '.1em'
    },1000)

    $('#cueboom-demos').delay(500).animate({
        'paddingTop': "0"
    }, 2000)

    // Expanding Mobile Nav Menu after 'hamburger' is clicked
    $('#nav-hamburger').click(() => {
        $("header").toggleClass("header-expanded");
        $('#nav-links-mobile').toggleClass('nav-links-mobile-display');
        
    })


    // Collapsing Mobile Nav Menu after a link is clicked
    $('#nav-links-mobile').click(() => {
        $("header").toggleClass("header-expanded");
        $('#nav-links-mobile').toggleClass('nav-links-mobile-display');
    })
})


