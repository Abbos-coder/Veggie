jQuery(document).ready(function () {

    const nav = $('.nav');
    const open = $('#open');
    const close = $('.nav__close');

    nav.hide(0);

    open.click(function () {
        nav.slideDown(1000);

    });
    close.click(function () {
        nav.slideUp(800);
    });

    var navbar = $('.navbar__menu a');


});