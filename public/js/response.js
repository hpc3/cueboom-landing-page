// (function($) {
//     $('#response-img').slideDown().removeClass('rotate');

//     $('#nav-hamburger').click(() => {
//         $("header").toggleClass("header-expanded");
//         $('#nav-links-mobile').toggleClass('nav-links-mobile-display');
//     })
// })



$(window).ready(() => {
    $('#response-img').slideDown().removeClass('rotate');

    $('#nav-hamburger').click(() => {
        $("header").toggleClass("header-expanded");
        $('#nav-links-mobile').toggleClass('nav-links-mobile-display');
    })
})